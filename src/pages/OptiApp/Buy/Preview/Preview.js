import React, { useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  Alert,
} from "reactstrap";

import Loader from "../../../../components/Common/Loading/index";

// import RejectionForm from '../RejectionForm';

// user
// import avatar4 from '../../../../assets/images/users/avatar-2.jpg';
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getEachBuyApplication,
  reviewOffer,
  reviewApplication,
  reviewGuarantor,
} from "../../../../store/actions";
import { clearMessages } from "../../../../store/Buy/actions";
import emptyCan from "../../../../assets/images/EmptyCan.png";

const BuyPreview = (props) => {
  // const [approved, setApproved] = useState(false);
  // const [modalOpen, ModalToggle] = useState(false);
  // const [dueOpen, DueToggle] = useState(false);
  // const [tenant, setTenant] = useState('');
  const dispatch = useDispatch();

  const buyId = props?.match?.params?.id;

  // const { user } = useSelector((state) => state.Account);

  const handleApplication = (e, action) => {
    e.preventDefault();
    const data = {
      buyPropertyId: buyId,
      reviewAction: action,
      reviewComments: "comments",
    };
    dispatch(reviewApplication(data));
  };

  const {
    application,
    appMessage,
    loading,
    offerMessage,
    offerMsgError,
    garantMsg,
    garantErrorMsg,
  } = useSelector((state) => state.Buy);

  useEffect(() => {
    dispatch(getEachBuyApplication(buyId));
  }, [dispatch, buyId, appMessage]);

  const handleOffer = (e, action) => {
    e.preventDefault();

    const data = {
      buyPropertyId: buyId,
      reviewAction: action,
    };

    dispatch(reviewOffer(data));
  };

  const handleGuarantor = (e, action) => {
    e.preventDefault();

    const data = {
      buyPropertyId: buyId,
      status: action,
    };
    dispatch(reviewGuarantor(data));
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  console.log(application);

  return (
    <React.Fragment>
      <div>
        <Container fluid style={{ margin: "80px 0" }}>
          <Link
            style={{ color: "Black" }}
            to="/buy_application"
            className="mx-2 font-size-14"
          >
            <span>
              <i
                className="fas fa-arrow-left
                 font-size-14 mr-2"
              />
            </span>
            Back
          </Link>
          {loading ? (
            <Card>
              <CardBody>
                <Loader loading={loading} />
              </CardBody>
            </Card>
          ) : application ? (
            <Row className="my-3">
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <h4> Personal Details </h4>
                    <Row className="mt-4">
                      <Col sm={9}>
                        <Row>
                          <Col sm={6}>
                            <p className="text-muted mb-0">First Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {`${application?.tenant?.firstName}`}
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Last Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {`${application?.tenant?.lastName}`}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-5">
                          <Col sm={6}>
                            <p className="text-muted mb-0">Email</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {application?.applicationForm?.email}
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Phone Number</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {application?.applicationForm?.phone}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-5">
                          <Col sm={9}>
                            <p className="text-muted mb-0">Address</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {application?.applicationForm?.address}
                            </h5>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={3} className="text-center">
                        <CardImg
                          src={application?.tenant?.profilePhoto}
                          alt="Nazox"
                          className="rounded avatar-lg"
                        />
                        <h4 className="my-2  mb-lg-0">
                          {application?.applicationForm?.name}
                        </h4>
                        <div className="row justify-content-md-center text-center my-3">
                          <div className="col-4">
                            <span className="avatar-sm mr-1">
                              <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                <i className=" dripicons-phone"></i>
                              </span>
                            </span>
                          </div>
                          <div className="col-4">
                            <span className="avatar-sm mr-1">
                              <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                <i className=" fas fa-video"></i>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          {application?.status ===
                          "PENDING_VERIFICATION_SELECTION" ? (
                            <h4 className="text-success">
                              {" "}
                              Application Accepted{" "}
                            </h4>
                          ) : application?.status === "PENDING_APPROVAL" ? (
                            <>
                              <div>
                                <button
                                  onClick={(e) =>
                                    handleApplication(e, "APPROVED")
                                  }
                                  className="btn btn-success mb-2 w-100"
                                >
                                  Accept Application
                                </button>
                              </div>
                              <div>
                                <button
                                  onClick={(e) =>
                                    handleApplication(e, "REJECTED")
                                  }
                                  className="btn btn-outline-success w-100"
                                >
                                  Decline Application
                                </button>
                              </div>
                            </>
                          ) : application?.status === "APPLICATION_REJECTED" ? (
                            <h4 className="text-danger">
                              {" "}
                              Application Rejected{" "}
                            </h4>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <Row className="my-3">
                      <Col sm={4} className="text-center">
                        <p className="text-muted mb-0">Property Price</p>
                        <h5 className="font-size-12 text-capitalize mt-2">
                          ₦{application?.property?.price?.toLocaleString()}
                        </h5>
                      </Col>
                      <Col sm={4} className="text-center">
                        <p className="text-muted mb-0">Status</p>
                        <h5 className="font-size-12 text-capitalize mt-2">
                          {application?.status !== "PURCHASED"
                            ? "Processing"
                            : "Completed"}
                        </h5>
                      </Col>
                      <Col sm={4} className="text-center">
                        <p className="text-muted mb-0">Offer Price</p>
                        <h5 className="font-size-12 text-capitalize mt-2">
                          {application?.buyersOffer
                            ? `₦${application?.buyersOffer?.toLocaleString()}`
                            : ""}
                        </h5>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {application?.guarantorDetails && (
                  <Card>
                    <CardBody>
                      <h4> Guarantor's Details </h4>
                      <Row className="mt-4">
                        <Col sm={12}>
                          <Row>
                            <Col sm={4}>
                              <p className="text-muted mb-0">First Name</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {
                                  application?.guarantorDetails?.fullName?.split(
                                    " "
                                  )[0]
                                }
                              </h5>
                            </Col>
                            <Col sm={4}>
                              <p className="text-muted mb-0">Last Name</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {
                                  application?.guarantorDetails?.fullName?.split(
                                    " "
                                  )[1]
                                }
                              </h5>
                            </Col>
                            <Col sm={4}>
                              <p className="text-muted mb-0">Email</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {application?.guarantorDetails?.email}
                              </h5>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm={4}>
                              <p className="text-muted mb-0">Phone Number</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {application?.guarantorDetails?.phone}
                              </h5>
                            </Col>
                            <Col sm={4}>
                              <p className="text-muted mb-0">Company Name</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {application?.guarantorDetails?.companyName}
                              </h5>
                            </Col>
                            <Col sm={4}>
                              <p className="text-muted mb-0">Work Address</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {application?.guarantorDetails?.workAddress}
                              </h5>
                            </Col>
                          </Row>
                          <Row className="mt-5">
                            <Col sm={9}>
                              <p className="text-muted mb-0">Home Address</p>
                              <h5 className="font-size-12 text-capitalize mt-2">
                                {application?.guarantorDetails?.homeAddress}
                              </h5>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                )}
                <div>
                  {offerMessage && offerMessage?.message && (
                    <Alert color="success" className="text-center">
                      {offerMessage?.message}
                    </Alert>
                  )}
                  {offerMsgError && offerMsgError?.message && (
                    <Alert color="danger" className="text-center">
                      {offerMsgError?.message}
                    </Alert>
                  )}
                  {garantMsg && garantMsg?.message && (
                    <Alert color="success" className="text-center">
                      {garantMsg?.message}
                    </Alert>
                  )}
                  {garantErrorMsg && garantErrorMsg?.message && (
                    <Alert color="danger" className="text-center">
                      {garantErrorMsg?.message}
                    </Alert>
                  )}

                  {application?.status === "PENDING_OFFER_APPROVAL" ? (
                    <Row>
                      <Col
                        sm={12}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <div className="mr-3">
                          <button
                            className="btn btn-success"
                            onClick={(e) => handleOffer(e, "APPROVED")}
                          >
                            Accept Offer
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-success"
                            onClick={(e) => handleOffer(e, "REJECTED")}
                          >
                            Reject Offer
                          </button>
                        </div>
                      </Col>
                    </Row>
                  ) : application?.status === "AWAITING_GUARANTOR_APPROVAL" ? (
                    <Row>
                      <Col
                        sm={12}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <div className="mr-3">
                          <button
                            className="btn btn-success"
                            onClick={(e) => handleGuarantor(e, "ACCEPT")}
                          >
                            Accept Guarantor
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-success"
                            onClick={(e) => handleGuarantor(e, "REJECT")}
                          >
                            Reject Guarantor
                          </button>
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                </div>
              </Col>
            </Row>
          ) : (
            <Card>
              <CardBody>
                <div className="text-center mt-4">
                  <img src={emptyCan} alt="empty" className="rounded mb-2" />
                  <h4> No Buy Application Details</h4>
                </div>
              </CardBody>
            </Card>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(BuyPreview);
