import React, { useEffect } from "react";
import { Container, Card, CardBody, Alert, Row, Col, Button } from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEachProperties } from "../../../../store/actions";
import PropertyIcon from "../../../../assets/images/Property.png";
import avatar from "../../../../assets/images/avi.jpg";
import Loader from "../../../../components/Common/Loading/index";

const ListUnitPreview = ({ match, history, fetchEachProperties, property, loading }) => {
  useEffect(() => {
    fetchEachProperties(match.params.id);
  }, []);

  const backwards = () => {
    history.goBack();
  }

  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 text-right">
          <Link to="#" onClick={backwards}>
            <button className="btn btn-success btn-sm">
              <i className="fas fa-arrow-left mr-2" /> Back
            </button>
          </Link>
        </div>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <Card>
              <CardBody>
                <Row>
                  <Col ls={2}>
                    <img
                      src={property?.indexImage}
                      alt="property"
                      style={{ borderRadius: "20px", width: "100%" }}
                    />
                  </Col>
                  <Col ls={5}>
                    {/* <div className='mb-3'>
                      <h6>Unit Number</h6>
                      <span>{property?.unitNo}</span>
                    </div> */}
                    <div className="mb-3">
                      <h6>Property</h6>
                      <span style={{display: "block"}}>{property?.title}</span>
                      <span>(ID: {property?.propertyRef})</span>
                    </div>
                    <div className="mb-3">
                      <span>
                        {property?.address?.houseNoAddress},{" "}
                        {property?.address?.state}, {property?.address?.country}
                      </span>
                    </div>
                    <div className="mb-3">
                      <img src={PropertyIcon} alt="property icon" />
                      <span className="ml-2">
                        {property?.bedrooms} bedrooms {property?.bathrooms}{" "}
                        bathrooms
                      </span>
                    </div>
                    <div>
                      <h6>Status</h6>
                      <span>{property?.status}</span>
                    </div>
                  </Col>
                  <Col ls={5}>
                    <div className="d-flex justify-content-end">
                      <Button color="success">Tasks</Button>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <p>
                        From ₦
                        <span style={{ fontWeight: "800", color: "blue" }}>
                          {property?.price?.toLocaleString()}
                        </span>
                        / yr
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <h4>Rental Information</h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      <h6>Basic Rent</h6>
                      <span>₦{property?.price}</span>
                    </div>
                    <div className="mb-3">
                      {/* <h6>Last payment date</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Serviced</h6>
                      <span>
                        {property?.isServiced === true ? "True" : "False"}
                      </span>
                    </div>
                    <div>
                      {/* <h6>Last Inspection</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Furnished</h6>
                      <span>
                        {property?.isFurnished === true ? "True" : "False"}
                      </span>
                    </div>
                  </Col>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      {/* <h6>Rental Status</h6>
                      <span>Occupied</span> */}
                      <h6>Parking Space</h6>
                      <span>
                        {property?.parkingLot === true ? "True" : "False"}
                      </span>
                    </div>
                    <div className="mb-3">
                      <h6>Next Payment Amount</h6>
                      <span>₦{property?.price}</span>
                    </div>
                    <div>
                      <h6>Advertised Amount</h6>
                      <span>₦{property?.price}</span>
                    </div>
                  </Col>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      <h6>Payment plan</h6>
                      <span>
                        {property?.periodInMonths
                          ? property?.periodInMonths + " months"
                          : "None"}
                      </span>
                    </div>
                    <div className="mb-3">
                      {/* <h6>Next Payment Date</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Size</h6>
                      <span>{property?.size}</span>
                    </div>
                    <div>
                      {/* <h6>Application fee</h6>
                      <span>N 50,000</span> */}
                      <h6>Unit Type</h6>
                      <span>{property?.type}</span>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h4 className="card-title">Current Tenant</h4>
                <div className="d-flex justify-content-between align-items-center">
                  {property?.rentedBy ? (
                    <div className="d-flex align-items-center">
                      {property?.rentedBy?.profilePhoto ? (
                        <img
                          src={property?.rentedBy?.profilePhoto}
                          alt="tenant"
                          className="avatar-sm mr-4"
                        />
                      ) : (
                        <img
                          src={avatar}
                          alt="tenant"
                          className="avatar-sm mr-4"
                        />
                      )}

                      <h5 className="card-title">
                        {property?.rentedBy?.firstName}{" "}
                        {property?.rentedBy?.lastName}
                      </h5>
                    </div>
                  ) : (
                    <span>You have no tenant for this unit</span>
                  )}
                  
                  <div className="d-flex">
                    <div>
                      <div
                        className="d-flex rounded-circle justify-content-center align-items-center"
                        style={{ backgroundColor: "lightGreen", height: "50%" }}
                      >
                        <i
                          className="fa fa-phone"
                          style={{ color: "white" }}
                        ></i>
                      </div>
                      <p> Call </p>
                    </div>
                    <div className="ml-5">
                      <a
                        href={`mailto:${property?.rentedBy?.email}`}
                        className="d-flex rounded-circle justify-content-center align-items-center"
                        style={{ backgroundColor: "lightGreen", height: "50%" }}
                      >
                        <i
                          className=" fas fa-envelope"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                      <p> Email </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            {/* <Row>
              <Col>
                <div className='mb-5'>
                  <h6>Documents</h6>
                  <div style={{backgroundColor: "white", width: "120px", height: "50px"}}>
                    <span>Lease Agreement</span>
                  </div>
                </div>
              </Col>  
            </Row> */}
          </>
        )}
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { property, loading } = state.Properties;
  return { property, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties })(ListUnitPreview)
);
