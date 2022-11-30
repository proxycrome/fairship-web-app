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
  Alert,
} from "reactstrap";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import DocumentsUpload from "../leaseUpload";
import { fetchEachProperties } from "../../../../store/actions";
import { clearUnitMessage } from "../../../../store/properties/actions";
import PropertyIcon from "../../../../assets/images/Property.png";
import avatar from "../../../../assets/images/avi.jpg";
import Loader from "../../../../components/Common/Loading/index";
import chat from "../images/chat.svg";

const ListUnitPreview = ({
  match,
  history,
  fetchEachProperties,
  property,
  loading,
  notifyMsg,
  notifyMsgError,
  clearUnitMessage,
}) => {
  const [leaseUploadModal, setLeaseUploadModal] = useState(false);
  const [purchaseUploadModal, setPurchaseUploadModal] = useState(false);
  const [cooUploadModal, setCooUploadModal] = useState(false);
  const [loaUploadModal, setLoaUploadModal] = useState(false);
  const [lcUploadModal, setLcUploadModal] = useState(false);
  const [conveyUploadModal, setConveyUploadModal] = useState(false);
  const [concentUploadModal, setConcentUploadModal] = useState(false);
  const [reload, reloadProperty] = useState(false);
  const [taskContents, setTaskContents] = useState(false);
  const [propImages, setPropImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (property) {
      setPropImages(property?.images);
    }
  }, [property]);

  useEffect(() => {
    const lastIndex = propImages?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, propImages]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    fetchEachProperties(match.params.id);
    clearUnitMessage();
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

  console.log(property);

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
            {notifyMsg && notifyMsg?.message && (
              <Alert className="text-center" color="success">
                {notifyMsg?.message}
              </Alert>
            )}
            <Card>
              <CardBody>
                <Row>
                  <Col md={4} sm={12}>
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
                                style={{ borderRadius: "20px", width: "100%" }}
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
                  </Col>
                  <Col ls={5}>
                    {/* <div className='mb-3'>
                      <h6>Unit Number</h6>
                      <span>{property?.unitNo}</span>
                    </div> */}
                    <div className="my-3">
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
                      {property?.otherAmenities
                        ?.split(",")
                        .map((amentity, i) => (
                          <span key={i} className="d-block">
                            {amentity}
                          </span>
                        ))}
                    </div>
                  </Col>
                  <Col ls={5}>
                    <div className="d-flex justify-content-end mt-3">
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
            {property?.feature === "RENT" ? (
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <h4>Rental Information</h4>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={4} sm={12}>
                      <div className="mb-3">
                        <h6>Basic Rent</h6>
                        <span>₦{property?.price?.toLocaleString()}</span>
                      </div>
                      <div className="mb-3">
                        <h6>Serviced</h6>
                        <span>
                          {property?.isServiced === true ? "True" : "False"}
                        </span>
                      </div>
                      <div>
                        <h6>Furnished</h6>
                        <span>
                          {property?.isFurnished === true ? "True" : "False"}
                        </span>
                      </div>
                    </Col>
                    <Col md={4} sm={12}>
                      <div className="mb-3">
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
                        <h6>Size</h6>
                        <span>{property?.size}</span>
                      </div>
                      <div>
                        <h6>Unit Type</h6>
                        <span>{property?.type}</span>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ) : property?.feature === "SALE" ? (
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <h4>Sale Information</h4>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={4} sm={12}>
                      <div className="mb-3">
                        <h6>Price</h6>
                        <span>₦{property?.price?.toLocaleString()}</span>
                      </div>
                      <div className="mb-3">
                        <h6>last Inspection</h6>
                        <span></span>
                      </div>
                    </Col>
                    <Col md={4} sm={12}>
                      <div className="mb-3">
                        <h6>Status</h6>
                        <span>
                          {property?.status !== "SOLD" ? "Processing" : "Sold"}
                        </span>
                      </div>
                      <div className="mb-3">
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
                        <h6>Application Fee</h6>
                        <span></span>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            ) : null}
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
                          <UncontrolledTooltip placement="left" target="phone">
                            {property?.agentDetail &&
                              property?.agentDetail?.phone}
                          </UncontrolledTooltip>
                        )}
                      </div>
                      <div className="ml-5">
                        <a
                          href={
                            property?.agentDetail &&
                            `mailto:${property?.agentDetail?.email}`
                          }
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
                          <UncontrolledTooltip placement="top" target="email">
                            {property?.agentDetail &&
                              property?.agentDetail?.email}
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
                        <UncontrolledTooltip placement="left" target="call">
                          {property?.rentedBy && property?.rentedBy?.phone}
                        </UncontrolledTooltip>
                      )}
                    </div>
                    <div className="ml-5">
                      <a
                        href={
                          property?.rentedBy &&
                          `mailto:${property?.rentedBy?.email}`
                        }
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
                        <UncontrolledTooltip placement="top" target="email">
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
                isOpen={leaseUploadModal}
                toggle={() => setLeaseUploadModal(!leaseUploadModal)}
              >
                <ModalHeader toggle={() => setLeaseUploadModal(false)}>
                  Lease Agreement
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="LEASE_AGREEMENT"
                    closeModal={setLeaseUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              <Modal
                // size="sm"
                isOpen={purchaseUploadModal}
                toggle={() => setPurchaseUploadModal(!purchaseUploadModal)}
              >
                <ModalHeader toggle={() => setPurchaseUploadModal(false)}>
                  Purchase Agreement
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="SELL_AGREEMENT"
                    closeModal={setPurchaseUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              {/* <Modal
                // size="sm"
                isOpen={cooUploadModal}
                toggle={() => setCooUploadModal(!cooUploadModal)}
              >
                <ModalHeader toggle={() => setCooUploadModal(false)}>
                  Certificate of Occupancy
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="CERTIFICATE_OF_OCCUPANCY"
                    closeModal={setCooUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              <Modal
                // size="sm"
                isOpen={loaUploadModal}
                toggle={() => setLoaUploadModal(!loaUploadModal)}
              >
                <ModalHeader toggle={() => setLoaUploadModal(false)}>
                  Letter of Allocation
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="LETTER_OF_ALLOCATION"
                    closeModal={setLoaUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              <Modal
                // size="sm"
                isOpen={lcUploadModal}
                toggle={() => setLcUploadModal(!lcUploadModal)}
              >
                <ModalHeader toggle={() => setLcUploadModal(false)}>
                  Land Certificate
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="LAND_CERTIFICATE"
                    closeModal={setLcUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              <Modal
                // size="sm"
                isOpen={conveyUploadModal}
                toggle={() => setConveyUploadModal(!conveyUploadModal)}
              >
                <ModalHeader toggle={() => setConveyUploadModal(false)}>
                  Conveyance
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="CONVEYANCE"
                    closeModal={setConveyUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal>
              <Modal
                // size="sm"
                isOpen={concentUploadModal}
                toggle={() => setConcentUploadModal(!concentUploadModal)}
              >
                <ModalHeader toggle={() => setConcentUploadModal(false)}>
                  Concent
                </ModalHeader>
                <ModalBody>
                  <DocumentsUpload
                    name="CONCENT"
                    closeModal={setConcentUploadModal}
                    propertyId={property?.id}
                    reloadProperty={reloadProperty}
                  />
                </ModalBody>
              </Modal> */}
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
                  <div className="d-grid">
                    <Link to={`/walkthrough/${match.params.id}`}>
                      <div style={cardStyle}>
                        <span className="mb-4 text-success">
                          Upload WalkThrough Video
                        </span>
                      </div>
                    </Link>
                    {property?.feature === "RENT" && (
                      <div
                        style={cardStyle}
                        onClick={() => {
                          setLeaseUploadModal(true);
                          return setTaskContents(false);
                        }}
                      >
                        <span className="mb-4 text-success">
                          Upload Lease Agreement
                        </span>
                      </div>
                    )}
                    {property?.feature === "SALE" && (
                      <>
                        <div
                          style={cardStyle}
                          onClick={() => {
                            setPurchaseUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Purchase Agreement
                          </span>
                        </div>
                        {/* <div
                          style={cardStyle}
                          onClick={() => {
                            setCooUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Certificate of Occupancy
                          </span>
                        </div>
                        <div
                          style={cardStyle}
                          onClick={() => {
                            setLoaUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Letter of Allocation
                          </span>
                        </div>
                        <div
                          style={cardStyle}
                          onClick={() => {
                            setLcUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Land Certificate
                          </span>
                        </div>
                        <div
                          style={cardStyle}
                          onClick={() => {
                            setConveyUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Conveyance
                          </span>
                        </div>
                        <div
                          style={cardStyle}
                          onClick={() => {
                            setConcentUploadModal(true);
                            return setTaskContents(false);
                          }}
                        >
                          <span className="mb-4 text-success">
                            Upload Concent
                          </span>
                        </div> */}
                      </>
                    )}
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
  const { property, loading, notifyMsg, notifyMsgError } = state.Properties;
  return { property, loading, notifyMsg, notifyMsgError };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties, clearUnitMessage })(
    ListUnitPreview
  )
);
