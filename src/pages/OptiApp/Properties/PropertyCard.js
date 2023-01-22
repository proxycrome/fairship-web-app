import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  Table,
  Alert,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

import Loading from "../../../components/Common/Loading";
// import chat from "./images/chat.svg";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchEachProperties,
  fetchProperties,
  duplicateUnitProperty,
  deleteProperty,
} from "../../../store/actions";

import { clearUnitMessage } from "../../../store/properties/actions";
import avatar from "../../../assets/images/avi.jpg";
import PropertyIcon from "../../../assets/images/Property.png";

const PropertyCard = ({
  fetchEachProperties,
  fetchProperties,
  match,
  property,
  properties,
  loading,
  propertiesError,
  duplicateUnitProperty,
  deleteProperty,
  deleteMessage,
  message,
  clearUnitMessage,
}) => {
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
    let slider =
      propImages?.length > 2
        ? setInterval(() => {
            setIndex(index + 1);
          }, 3000)
        : null;
    return () => clearInterval(slider);
  }, [index]);

  useEffect(() => {
    clearUnitMessage();
  }, []);

  useEffect(() => {
    if (match.params.id) {
      fetchEachProperties(match.params.id);
    }
  }, [match.params.id, fetchEachProperties]);

  const duplicateProperty = (id) => {
    duplicateUnitProperty(id);
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  };

  const deleteUnitProperty = (id) => {
    deleteProperty(id);
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  };

  useEffect(() => {
    const isAuth = {
      type: "collective_units",
    };
    if (match.params.id) {
      fetchProperties(isAuth, match.params.id);
    }
  }, [match.params.id, fetchProperties]);

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <div className="mb-2 text-right">
            <Link to="/properties">
              <button className="btn btn-success btn-sm">
                <i className="fas fa-arrow-left mr-2" /> Back
              </button>
            </Link>
          </div>
          {propertiesError && (
            <Alert color="danger" className="text-center">
              {propertiesError}
            </Alert>
          )}
          {loading ? (
            <Loading />
          ) : (
            property !== null && (
              <>
                <Card>
                  <CardBody>
                    <Row>
                      <Col md={4} className="d-flex flex-column align-items-center">
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
                              (index === 0 &&
                                propIndex === propImages.length - 1)
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
                                    style={{
                                      borderRadius: "20px",
                                      width: "100%",
                                    }}
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
                        <div className="my-4">
                          <a
                            href={property && property?.video?.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              color="success"
                              disabled={!property?.video?.videoUrl}
                            >
                              {property?.video?.videoUrl
                                ? "View WalkThrough Video"
                                : "Walkthrough Video Not Available"}
                            </Button>
                          </a>
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="ml-2">
                          <h4 className="card-title text-capitalize">
                            {" "}
                            {property?.title}{" "}
                          </h4>
                          <p className="text-muted">
                            {" "}
                            <span style={{ display: "block" }}>
                              {property?.address?.houseNoAddress},{" "}
                              {property?.address?.state},{" "}
                              {property?.address?.country}
                            </span>
                            <span>ID: ({property?.propertyRef})</span>
                          </p>
                          <div>
                            <img src={PropertyIcon} alt="property icon" />
                            <span
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                margin: "0 5px",
                              }}
                            >
                              Features:{" "}
                            </span>
                            <span style={{ display: "block" }}>
                              size: {property?.size}sqm
                            </span>
                          </div>
                          <div className="mt-2">
                            <h6>Description</h6>
                            <p>{property?.description}</p>
                          </div>
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
                                {property?.agentDetail &&
                                  property?.agentDetail?.phone}
                              </UncontrolledTooltip>
                            )}
                          </div>
                          <div className="ml-3">
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
                              <UncontrolledTooltip
                                placement="top"
                                target="email"
                              >
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

                <div>
                  <Card>
                    <CardBody>
                      {deleteMessage && (
                        <Alert color="success" className="text-center">
                          {deleteMessage}
                        </Alert>
                      )}
                      {message && (
                        <Alert color="success" className="text-center">
                          {message}
                        </Alert>
                      )}
                      <h4 className="card-title">Unit({properties?.total})</h4>

                      <div className="table-responsive">
                        <Table striped className="mb-0">
                          <thead>
                            <tr>
                              <th>Unit Title</th>
                              <th>Description</th>
                              <th>Tenant</th>
                              <th>Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {properties?.entities?.map((unit, index) => (
                              <tr key={index}>
                                <td>
                                  {property?.title}
                                  <br />
                                  <b>Unit:</b> {unit.title}
                                </td>
                                <td>{unit?.description}</td>
                                <td>
                                  {unit.rentedBy !== null
                                    ? `${unit.rentedBy.firstName} ${unit.rentedBy.lastName}`
                                    : "No tenant for this unit"}
                                </td>
                                <td>
                                  <div className="d-flex">
                                    <div>
                                      <Link
                                        to={`/unit_property/${unit.id}`}
                                        className="mx-2 text-primary"
                                        id="preview"
                                      >
                                        <i className="dripicons-preview font-size-18"></i>
                                      </Link>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="preview"
                                      >
                                        Preview
                                      </UncontrolledTooltip>
                                    </div>

                                    <div>
                                      <Link
                                        to="#"
                                        className="mx-2 text-primary"
                                        id="duplicate"
                                        onClick={() =>
                                          duplicateProperty(unit.id)
                                        }
                                      >
                                        <i className="fas fa-copy font-size-12"></i>
                                      </Link>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="duplicate"
                                      >
                                        Duplicate
                                      </UncontrolledTooltip>
                                    </div>

                                    <div>
                                      <Link
                                        to={`/update_unit/${unit.id}`}
                                        className="mx-2 text-primary"
                                        id="edit"
                                      >
                                        <i className="fas fa-pen font-size-12"></i>
                                      </Link>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="edit"
                                      >
                                        Edit
                                      </UncontrolledTooltip>
                                    </div>

                                    <div>
                                      <Link
                                        to="#"
                                        className="mx-2 text-danger"
                                        id="delete"
                                        onClick={() =>
                                          deleteUnitProperty(unit.id)
                                        }
                                      >
                                        <i className="fas fa-trash font-size-12"></i>
                                      </Link>
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="delete"
                                      >
                                        Delete
                                      </UncontrolledTooltip>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        {properties?.entities?.length === 0 && (
                          <div className="d-flex justify-content-center my-4">
                            <h6>
                              No Approved Unit(s) for this Multi-Unit Property
                            </h6>
                          </div>
                        )}
                        <div className="d-flex justify-content-center mt-3">
                          <Link to={`/create_more_unit/${property?.id}`}>
                            <Button color="success">Add Unit</Button>
                          </Link>
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
                          <div className="d-flex flex-wrap mt-2">
                            {property?.documents?.length > 0
                              ? property?.documents?.map((item) => (
                                  <Card
                                    key={item.id}
                                    className="shadow-lg mr-3"
                                  >
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <CardBody>
                                        <h1 className="card-title">
                                          {item.name === "OTHERS"
                                            ? item?.title
                                            : item.name}
                                        </h1>
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
                </div>
              </>
            )
          )}
        </Container>
      </div>
    </>
  );
};

const mapStatetoProps = (state) => {
  const {
    property,
    loading,
    propertiesError,
    properties,
    deleteMessage,
    message,
  } = state.Properties;
  return {
    property,
    loading,
    propertiesError,
    properties,
    deleteMessage,
    message,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchEachProperties,
    fetchProperties,
    duplicateUnitProperty,
    deleteProperty,
    clearUnitMessage,
  })(PropertyCard)
);
