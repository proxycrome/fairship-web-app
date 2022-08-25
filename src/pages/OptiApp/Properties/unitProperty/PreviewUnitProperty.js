import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledTooltip,
} from "reactstrap";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import DocumentsUpload from "../leaseUpload";
import { fetchEachProperties } from "../../../../store/actions";
import PropertyIcon from "../../../../assets/images/Property.png";
import avatar from "../../../../assets/images/avi.jpg";
import Loader from "../../../../components/Common/Loading/index";
import chat from "../images/chat.svg"

const ListUnitPreview = ({
  match,
  history,
  fetchEachProperties,
  property,
  loading,
}) => {
  const [uploadModal, setUploadModal] = useState(false);
  const [reload, reloadProperty] = useState(false);
  const [taskContents, setTaskContents] = useState(false);
  const [propImages, setPropImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(property){
      setPropImages(property?.images)
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
    const slider = setInterval(()=> {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    fetchEachProperties(match.params.id);
  }, []);

  useEffect(() => {
    if (reload) {
      fetchEachProperties(match.params.id);
    }
  }, [reload]);

  const backwards = () => {
    history.goBack();
  };

  const cardStyle = {
    boxShadow: "0px 4px 30px rgba(98, 134, 154, 0.38)",
    borderRadius: "10px",
    width: "90%",
    textAlign: "center",
    padding: "10px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    flex: "1",
    cursor: "pointer",
  };

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
                    <div className="section-center">
                      {propImages?.map((propImage, propIndex) => {
                        const { id, imageUrl} = propImage;
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
                          <article className={`imgarticle ${position}`} key={id}>
                            <a href={`${imageUrl}`} target="_blank" rel="noopener noreferrer">
                              <img
                                src={imageUrl}
                                alt="property"
                                className="prop-img"
                                style={{ borderRadius: "20px", width: "100%" }}
                              />
                            </a>  
                          </article>
                        );
                      })}
                      <button className="prevbtn" onClick={() => setIndex(index - 1)}>
                        <i className="fas fa-angle-left"></i>
                      </button>
                      <button className="nextbtn" onClick={() => setIndex(index + 1)}>
                        <i className="fas fa-angle-right"></i>
                      </button>
                    </div>
                  </Col>
                  <Col ls={5}>
                    {/* <div className='mb-3'>
                      <h6>Unit Number</h6>
                      <span>{property?.unitNo}</span>
                    </div> */}
                    <div className="mb-3">
                      <h6>Property</h6>
                      <span style={{ display: "block" }}>
                        {property?.title}
                      </span>
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
                    <div className="mb-3">
                      <h6>Status</h6>
                      <span>{property?.status}</span>
                    </div>
                    <div>
                      <h6>Amenities</h6>
                      {property?.otherAmenities?.split(',').map((amentity, i) => (
                        <span key={i} className="d-block">{amentity}</span>
                      ))}
                    </div>
                  </Col>
                  <Col ls={5}>
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={() => setTaskContents(true)}
                        color="success"
                      >
                        {" "}
                        Tasks
                      </Button>
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
                      <span>₦{property?.price?.toLocaleString()}</span>
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
                      <span>₦{property?.price?.toLocaleString()}</span>
                    </div>
                    <div>
                      <h6>Advertised Amount</h6>
                      <span>₦{property?.price?.toLocaleString()}</span>
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
            <div>
              <Card>
                <CardBody>
                  <h4 className="card-title">Agent</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="align-items-center">
                      <div className="d-flex mb-2">
                        {property?.agentDetail?.profilePhoto ? (
                          <img
                            src={property?.agentDetail?.profilePhoto}
                            alt="agent"
                            className="avatar-sm mr-4"
                          />
                        ) : (
                          <img
                            src={avatar}
                            alt="agent"
                            className="avatar-sm mr-4"
                          />
                        )}

                        <h5 className="card-title">
                          {" "}
                          {property?.agentDetail?.firstName}{" "}
                          {property?.agentDetail?.lastName}
                        </h5>
                      </div>
                      {/* <div className="d-flex">
                        <img src={chat} alt="chat" />
                        <h6 className="ml-2">Chat with this Agent</h6>
                      </div> */}
                    </div>
                    <div className="d-flex">
                      <div>
                        <div
                          className="d-flex rounded-circle justify-content-center align-items-center"
                          style={{
                            backgroundColor: "lightGreen",
                            height: "50%",
                          }}
                          id="phone"
                        >
                          <i
                            className="fa fa-phone"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                        <p> Call </p>
                        {property?.agentDetail && (
                          <UncontrolledTooltip
                          placement="left"
                          target="phone"
                        >
                          {property?.agentDetail && property?.agentDetail?.phone}
                        </UncontrolledTooltip>
                        )}
                      </div>
                      <div className="ml-5">
                        <a
                          href={property?.agentDetail && `mailto:${property?.agentDetail?.email}`}
                          className="d-flex rounded-circle justify-content-center align-items-center"
                          style={{
                            backgroundColor: "lightGreen",
                            height: "50%",
                          }}
                          id="email"
                        >
                          <i
                            className=" fas fa-envelope"
                            style={{ color: "white" }}
                          ></i>
                        </a>
                        <p> Email </p>
                        {property?.agentDetail && (
                          <UncontrolledTooltip
                          placement="top"
                          target="email"
                        >
                          {property?.agentDetail && property?.agentDetail?.email}
                        </UncontrolledTooltip>
                        )}
                        
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <Card>
              <CardBody>
                <h4 className="card-title">Current Tenant</h4>
                <div className="d-flex justify-content-between align-items-center">
                  {property?.rentedBy ? (
                    <div className=" align-items-center">
                      {property?.rentedBy?.profilePhoto ? (
                        <img
                          src={property?.rentedBy?.profilePhoto}
                          alt="tenant"
                          className="avatar-sm mr-4 mb-2"
                        />
                      ) : (
                        <img
                          src={avatar}
                          alt="tenant"
                          className="avatar-sm mr-4 mb-2"
                        />
                      )}

                      <h5 className="card-title mb-2">
                        {property?.rentedBy?.firstName}{" "}
                        {property?.rentedBy?.lastName}
                      </h5>
                      <Link to="#">
                        <div className="d-flex mb-2">
                          <img src={chat} alt="chat" />
                          <h6 className="ml-2">Chat with this Tenant</h6>
                        </div>
                      </Link>  
                    </div>
                  ) : (
                    <span>You have no tenant for this unit</span>
                  )}

                  <div className="d-flex">
                    <div>
                      <div
                        className="d-flex rounded-circle justify-content-center align-items-center"
                        style={{ backgroundColor: "lightGreen", height: "50%" }}
                        id="call"
                      >
                        <i
                          className="fa fa-phone"
                          style={{ color: "white" }}
                        ></i>
                      </div>
                      <p> Call </p>
                      {property?.rentedBy && (
                        <UncontrolledTooltip
                        placement="left"
                        target="call"
                      >
                         {property?.rentedBy && property?.rentedBy?.phone}
                      </UncontrolledTooltip>
                      )}    
                    </div>
                    <div className="ml-5">
                      <a
                        href={property?.rentedBy && `mailto:${property?.rentedBy?.email}`}
                        className="d-flex rounded-circle justify-content-center align-items-center"
                        style={{ backgroundColor: "lightGreen", height: "50%" }}
                        id="email"
                      >
                        <i
                          className=" fas fa-envelope"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                      <p> Email </p>
                      {property?.rentedBy && (
                        <UncontrolledTooltip
                        placement="top"
                        target="email"
                      >
                        {property?.rentedBy && property?.rentedBy?.email}
                      </UncontrolledTooltip>
                      )}  
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div>
                  <h6>Documents</h6>
                  <div>
                    {/* <span>Lease Agreement</span> */}
                    <div className="d-flex mt-2">
                      {property?.documents?.length > 0
                        ? property?.documents?.map((item) => (
                            <Card key={item.id} className="shadow-lg mr-3">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <CardBody>
                                  <h1 className="card-title">{item.name}</h1>
                                </CardBody>
                              </a>
                            </Card>
                          ))
                        : "No document found"}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <div>
              <Modal
                // size="sm"
                isOpen={uploadModal}
                toggle={() => setUploadModal(!uploadModal)}
              >
                <ModalHeader toggle={() => setUploadModal(false)}>
                  Lease Agreement
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    closeModal={setUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
            </div>
            <div>
              <Modal
                // size="sm"
                isOpen={taskContents}
                toggle={() => setTaskContents(!taskContents)}
              >
                <ModalHeader toggle={() => setTaskContents(false)}>
                  Select Tasks
                </ModalHeader>
                <ModalBody>
                  <div className="d-flex justify-content-around">
                    <div
                      style={cardStyle}
                      onClick={() => {
                        setUploadModal(true);
                        return setTaskContents(false);
                      }}
                    >
                      <span className="mb-4 text-success">
                        Upload Lease Agreement
                      </span>
                    </div>
                    <Link to="/walkthrough">
                      <div style={cardStyle}>
                        <span className="mb-4 text-success">
                          Upload WalkThrough Video
                        </span>
                      </div>
                    </Link>
                  </div>
                </ModalBody>
              </Modal>
            </div>
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
