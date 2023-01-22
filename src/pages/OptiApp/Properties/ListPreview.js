import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, Row, Col, Button } from "reactstrap";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEachProperties } from "../../../store/actions";
// import BusStop from '../../../assets/images/BusStop.png';
// import Parking from '../../../assets/images/Parking.png';
// import Transit from '../../../assets/images/Transit.png';
import PropertyIcon from "../../../assets/images/Property.png";
import Loading from "../../../components/Common/Loading/";

const ListPreview = ({ match, fetchEachProperties, property, loading }) => {
  const [propImages, setPropImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchEachProperties(match.params.id);
  }, [fetchEachProperties, match.params.id]);


  useEffect(() => {
    if (property) {
      setPropImages(property?.images);
    }
    const lastIndex = propImages?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, propImages, property]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 text-right">
          <Link to="/listing_properties">
            <button className="btn btn-success btn-sm">
              <i className="fas fa-arrow-left mr-2" /> Back
            </button>
          </Link>
        </div>
        <Card>
          <CardBody>
            {/* Preview List Item here
            <Alert className="text-center mt-4" color="danger">
              The property with ID:{' '}
              <span className="font-weight-bolder"> {match.params.id}</span>{' '}
              Page is under Construction
            </Alert> */}
            {loading ? (
              <Loading />
            ) : (
              <>
                <Row>
                  <Col md={12}>
                    <div className="d-flex justify-content-center">
                      <div className="section-center">
                        {propImages?.map((propImage, propIndex) => {
                          const { id, imageUrl } = propImage;
                          // more stuff coming up
                          let position = "nextSlide";
                          if (propIndex === index) {
                            position = "activeSlide";
                          }
                          if (
                            propIndex === index - 1 ||
                            (index === 0 && propIndex === propImages.length - 1)
                          ) {
                            position = "lastSlide";
                          }
                          return (
                            <article
                              className={`imgarticle ${position}`}
                              key={id}
                            >
                              <a
                                href={`${imageUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={imageUrl}
                                  alt="property"
                                  className="prop-img"
                                />
                              </a>
                            </article>
                          );
                        })}
                        <button
                          className="prevbtn"
                          onClick={() => setIndex(index - 1)}
                        >
                          <i className="fas fa-angle-left"></i>
                        </button>
                        <button
                          className="nextbtn"
                          onClick={() => setIndex(index + 1)}
                        >
                          <i className="fas fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-between mt-4">
                  <div className="ml-3">
                    <h5>
                      {property?.parentProperty?.title} <br />
                      {property?.title}
                    </h5>
                  </div>
                  <div className="mr-3">
                    <p>
                      From N
                      <span style={{ fontWeight: "600", color: "blue" }}>
                        {property?.price?.toLocaleString()}
                      </span>
                      / yr
                    </p>
                  </div>
                </Row>
                <Row>
                  <div className="d-flex flex-column ml-3">
                    <span>(ID: {property?.propertyRef})</span>
                    <span>
                      {property?.address?.houseNoAddress},{" "}
                      {property?.address?.state}, {property?.address?.country}
                    </span>
                  </div>
                </Row>
                <Row>
                  <Col md={6}>
                    {/* <div className="my-3">
                      <img src={BusStop} alt="busstop icon" className="ml-1"/>
                      <span className="ml-2">Bus-stop: 4 min walk to the bus line</span>
                    </div>
                    <div className="my-3">
                      <img src={Parking} alt="parking icon" className="ml-1"/>
                      <span className="ml-2">Parking: 3 drive way spaces</span>
                    </div> */}
                    <div className="my-3">
                      <img
                        src={PropertyIcon}
                        alt="property icon"
                        className="ml-1"
                      />
                      <span className="ml-2">
                        <strong>Features: </strong>
                        {property?.bedrooms} bedrooms {property?.bathrooms}{" "}
                        bathrooms
                      </span>
                    </div>
                    <div className="my-3">
                      <span className="ml-2">
                        <strong>Size: </strong>
                        {property?.size}sqm
                      </span>
                    </div>
                    <a
                      href={property && property?.video?.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button color="success"> View WalkThrough Video</Button>
                    </a>
                  </Col>
                  <Col md={6}>
                    {/* <div className="my-3">
                      <img src={Transit} alt="Transit icon" className="ml-1"/>
                      <span className="ml-2">Transit: 20 min walk to ikeja bus terminal</span>
                    </div> */}
                  </Col>
                </Row>
                <Row>
                  <div className="ml-3 mt-5">
                    <h6>Description</h6>
                    <p>{property?.description}</p>
                  </div>
                </Row>
              </>
            )}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { property, loading } = state.Properties;
  return { property, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties })(ListPreview)
);
