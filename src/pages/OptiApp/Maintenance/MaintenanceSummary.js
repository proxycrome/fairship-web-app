import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  UncontrolledTooltip,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Alert,
  Input,
  Label,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  acceptInvoice,
  acceptServiceAgreement,
  fetchMaintenance,
  getInvoiceDets,
  initCompletePayment,
  initPartPayment,
  rejectInvoice,
  reviewUser,
} from "../../../store/actions";
import avatar from "../../../assets/images/avi.jpg";
import File from "../../../assets/images/File.png";
import Loader from "../../../components/Common/Loading";
import PaystackIntegration from "../../../components/Common/paystackIntegration";
import { clearMessages } from "../../../store/Maintenance/actions";

// import livingRoom from "../../../assets/images/Living.png";
// import profileImage from '../../../assets/images/ProfileImage.svg';

const MaintenanceSummary = (props) => {
  const [show, setShow] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    comments: "",
    score: 0,
  });
  const dispatch = useDispatch();

  const id = props?.match?.params?.id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchMaintenance(id));
  }, [dispatch, id]);

  const {
    maintenanceSummary,
    loading,
    invoiceDetails,
    acceptMsg,
    acceptError,
    rejectMsg,
    rejectError,
    agreementMsg,
    agreementError,
    partPaymentMsg,
    partPaymentError,
    completePaymentMsg,
    completePaymentError,
  } = useSelector((state) => state.Maintenance);

  const { reviewMsg, reviewError } = useSelector((state) => state.Settings);

  const { verifyTransMsg, verifyTransError } = useSelector(
    (state) => state.payment
  );

  console.log(invoiceDetails);

  const handleClick = async (ref) => {
    await dispatch(getInvoiceDets(ref));
    setShow(true);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked && maintenanceSummary) {
      dispatch(acceptServiceAgreement(maintenanceSummary?.id, dispatch));
    }
  }, [isChecked]);

  const acceptMainInvoice = (id) => {
    dispatch(acceptInvoice(parseInt(id), setShow, dispatch));
    setShow(false);
  };

  const rejectMainInvoice = (id) => {
    dispatch(rejectInvoice(parseInt(id), setShow, dispatch));
  };

  const handleReview = (e) => {
    e.preventDefault();
    const { comments, score } = formData;
    const data = {
      comments,
      revieweeId: maintenanceSummary?.serviceProviderUseraccount?.id,
      score: Number(score),
    };
    dispatch(reviewUser(data, setShowReview, dispatch, id));
  };

  useEffect(() => {
    if (
      maintenanceSummary?.signedContractAgreement === "ACCEPTED" &&
      maintenanceSummary?.paymentStatus === "PENDING" &&
      maintenanceSummary?.status === "PENDING"
    ) {
      dispatch(initPartPayment(maintenanceSummary?.id));
    }
  }, [maintenanceSummary?.signedContractAgreement]);

  useEffect(() => {
    if (
      maintenanceSummary?.signedContractAgreement === "ACCEPTED" &&
      maintenanceSummary?.paymentStatus === "PART_PAYMENT" &&
      maintenanceSummary?.status === "COMPLETED"
    ) {
      dispatch(initCompletePayment(maintenanceSummary?.id));
    }
  }, [maintenanceSummary]);

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);


  console.log(maintenanceSummary);
  console.log(completePaymentMsg);

  return (
    <div className="page-content">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Row className="mb-4">
            <Col xl={10} className="header-box">
              <Link to="/maintenance">
                <i className="ri-arrow-left-line"></i>
                <span className="ml-2">Back</span>
              </Link>
              {acceptMsg && (
                <Alert color="success" className="text-center">
                  {acceptMsg?.message}
                </Alert>
              )}
              {acceptError && (
                <Alert color="danger" className="text-center">
                  {acceptError?.message}
                </Alert>
              )}
              {rejectMsg && (
                <Alert color="success" className="text-center">
                  {rejectMsg?.message}
                </Alert>
              )}
              {rejectError && (
                <Alert color="danger" className="text-center">
                  {rejectError?.message}
                </Alert>
              )}
              {agreementMsg && (
                <Alert color="success" className="text-center">
                  {agreementMsg?.message}
                </Alert>
              )}
              {agreementError && (
                <Alert color="danger" className="text-center">
                  {agreementError?.message}
                </Alert>
              )}
              {verifyTransMsg && (
                <Alert color="success" className="text-center">
                  {verifyTransMsg?.message}
                </Alert>
              )}
              {verifyTransError && (
                <Alert color="danger" className="text-center">
                  {verifyTransError?.message}
                </Alert>
              )}
              {partPaymentError && (
                <Alert color="danger" className="text-center">
                  {partPaymentError?.message}
                </Alert>
              )}
              {completePaymentError && (
                <Alert color="danger" className="text-center">
                  {completePaymentError?.message}
                </Alert>
              )}
              {reviewMsg && (
                <Alert color="success" className="text-center">
                  {reviewMsg?.message}
                </Alert>
              )}
              {reviewError && (
                <Alert color="danger" className="text-center">
                  {reviewError?.message}
                </Alert>
              )}
              <Row className="d-flex align-items-center ml-5 mb-3">
                {maintenanceSummary?.property?.indexImage ? (
                  <img
                    src={maintenanceSummary?.property?.indexImage}
                    alt="livingroom"
                    width="116"
                    height="108"
                  />
                ) : (
                  <img src={avatar} alt="livingroom" width="116" height="108" />
                )}

                <Col ls={6}>
                  <span>
                    {maintenanceSummary?.property?.parentProperty?.title}{" "}
                    {maintenanceSummary?.property?.title}
                  </span>
                  <div>
                    {maintenanceSummary?.property?.address?.houseNoAddress}
                  </div>
                </Col>
                {/* <Col ls={6}>
              <h6>Unit</h6>
              <p>0009</p>
            </Col> */}
              </Row>
              <Row>
                <div className="mx-5 my-2">
                  <h6>Service Type</h6>
                  <p>{maintenanceSummary?.serviceTypeDto?.name}</p>
                </div>
              </Row>
              <Row>
                <div className="mx-5 mb-2">
                  <h6>Problem Description</h6>
                  <p>{maintenanceSummary?.description}</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex align-items-center ml-5 mb-5">
                  <i
                    className="far fa-calendar-alt ml-2 mr-2"
                    style={{ color: "#187CC3" }}
                  ></i>
                  <span>
                    {maintenanceSummary?.appointedDate}{" "}
                    {maintenanceSummary?.appointedTime}
                  </span>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="images-dock d-flex flex-column">
            <Col xl={12} className="mb-5">
              <h6 className="mb-4">Images</h6>
              <div className="imgContainer d-flex">
                {/* <i className="fas fa-angle-left prev"></i> */}
                {maintenanceSummary?.image?.map((info) => (
                  <a
                    href={`${info?.imageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={info?.id}
                  >
                    <img
                      src={info?.imageUrl}
                      alt="circuit"
                      width="100"
                      height="100"
                      className="mr-2"
                    />
                  </a>
                ))}
                {/* <i className="fas fa-angle-right next"></i> */}
              </div>
            </Col>
          </Row>
          <Row className="images-dock d-flex flex-column my-5">
            <Col xl={12} className="">
              <div>
                <h6>View Invoice</h6>
                <div>
                  {/* <span>Lease Agreement</span> */}
                  <div className="d-flex mt-2">
                    {maintenanceSummary?.invoice ? (
                      <Card className="shadow-lg mr-3">
                        <Link
                          to="#"
                          onClick={() =>
                            handleClick(maintenanceSummary?.invoice?.invoiceRef)
                          }
                        >
                          <CardBody>
                            <h1 className="card-title">
                              Invoice{" "}
                              <span>
                                Ref: {maintenanceSummary?.invoice?.invoiceRef}
                              </span>
                            </h1>
                          </CardBody>
                        </Link>
                      </Card>
                    ) : (
                      "Awaiting Invoice"
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {maintenanceSummary?.invoiceStatus === "ACCEPTED" ? (
            <Row className="images-dock d-flex flex-column my-5">
              <Col xl={12} className="">
                <div>
                  <h6>Documents</h6>
                  <div>
                    {/* <span>Lease Agreement</span> */}
                    <div className="d-flex align-items-baseline mt-2">
                      <Card className="shadow-lg mr-3">
                        <Link to="#">
                          <CardBody>
                            <div className="d-flex flex-column">
                              <span
                                className={
                                  maintenanceSummary?.signedContractAgreement ===
                                  "ACCEPTED"
                                    ? "text-success"
                                    : "text-danger"
                                }
                                style={{ textAlign: "right" }}
                              >
                                {maintenanceSummary?.signedContractAgreement ===
                                "ACCEPTED"
                                  ? "Signed"
                                  : "Not Signed"}
                              </span>
                              <div className="d-flex">
                                <img
                                  src={File}
                                  alt="file"
                                  width="20"
                                  height="20"
                                />
                                <h5 className="ml-2">Contract Agreement</h5>
                              </div>
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                      <div className="mx-3">
                        <Input
                          type="checkbox"
                          name="sign"
                          value={isChecked}
                          checked={
                            maintenanceSummary?.signedContractAgreement ===
                              "ACCEPTED" || isChecked
                          }
                          onChange={handleCheck}
                          disabled={
                            maintenanceSummary?.signedContractAgreement ===
                            "ACCEPTED"
                          }
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ) : null}
          <Row className="my-4">
            <Col xl={10} className="header-box">
              <h6 className="mb-4"> Vendor</h6>
              <Row className="d-flex justify-content-between ml-2 mb-3">
                <div>
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        maintenanceSummary?.serviceProviderService
                          ?.serviceProviderDetail?.useraccount?.profilePhoto
                      }
                      alt="profile"
                      width="38"
                      height="38"
                    />
                    <Col className="vendor">
                      <p>
                        {
                          maintenanceSummary?.serviceProviderService
                            ?.serviceProviderDetail?.useraccount?.firstName
                        }{" "}
                        {
                          maintenanceSummary?.serviceProviderService
                            ?.serviceProviderDetail?.useraccount?.lastName
                        }
                      </p>
                      <div>
                        {
                          maintenanceSummary?.serviceProviderUseraccount
                            ?.averageRating
                        }
                        <i
                          className="fas fa-star ml-1"
                          style={{ color: "#2173A0", fontSize: "14px" }}
                        ></i>
                      </div>
                    </Col>
                  </div>
                  <div>
                    {maintenanceSummary?.status === "COMPLETED" && (
                      <Button
                        color="success"
                        className="w-lg mt-2"
                        onClick={() => setShowReview(true)}
                      >
                        Give Review
                      </Button>
                    )}
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-flex flex-column align-items-center">
                    <div
                      className="d-flex rounded-circle justify-content-center align-items-center"
                      style={{
                        backgroundColor: "lightGreen",
                        width: "40px",
                        height: "40px",
                      }}
                      id="call"
                    >
                      <i className="fa fa-phone" style={{ color: "white" }}></i>
                    </div>
                    <p> Call </p>
                    {maintenanceSummary?.serviceProviderUseraccount && (
                      <UncontrolledTooltip placement="left" target="call">
                        {maintenanceSummary?.serviceProviderUseraccount &&
                          maintenanceSummary?.serviceProviderUseraccount?.phone}
                      </UncontrolledTooltip>
                    )}
                  </div>
                  <div className="ml-4 mr-2 d-flex flex-column align-items-center">
                    <a
                      href={
                        maintenanceSummary?.serviceProviderUseraccount &&
                        `mailto:${maintenanceSummary?.serviceProviderUseraccount?.email}`
                      }
                      className="d-flex rounded-circle justify-content-center align-items-center"
                      style={{
                        backgroundColor: "lightGreen",
                        width: "40px",
                        height: "40px",
                      }}
                      id="email"
                    >
                      <i
                        className=" fas fa-envelope"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                    <p> Email </p>
                    {maintenanceSummary?.serviceProviderUseraccount && (
                      <UncontrolledTooltip placement="top" target="email">
                        {maintenanceSummary?.serviceProviderUseraccount &&
                          maintenanceSummary?.serviceProviderUseraccount?.email}
                      </UncontrolledTooltip>
                    )}
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
          <Modal
            // size="sm"
            isOpen={show}
            toggle={() => setShow(!show)}
          >
            <ModalHeader toggle={() => setShow(!show)}>
              <span className="d-block">
                {maintenanceSummary?.invoice?.invoiceRef}
              </span>
              <small>{maintenanceSummary?.createdAt}</small>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col sm={12}>
                  {maintenanceSummary?.paymentStatus === "COMPLETE" ? (
                    <Button
                      color="success"
                      className="float-right mr-2"
                      disabled
                    >
                      Paid
                    </Button>
                  ) : (
                    <Button
                      color="secondary"
                      className="float-right mr-2"
                      disabled
                    >
                      Unpaid
                    </Button>
                  )}
                </Col>
              </Row>
              <Row
                className="mt-4 pb-4 mb-2"
                style={{ borderBottom: "1px dashed #000000" }}
              >
                <Col xs={12}>
                  <div style={{ width: "100%" }}>
                    <table style={{ width: "100%" }}>
                      <thead>
                        <tr style={{ fontWeight: "700" }}>
                          <th>item Name</th>
                          <th>Ouantity</th>
                          <th>Unit Price</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoiceDetails?.invoiceDetailsList?.map((data) => (
                          <tr key={data.id}>
                            <td>{data.item}</td>
                            <td>{data.quantity}</td>
                            <td>{data.unitPrice.toLocaleString()}</td>
                            <td>{data.totalPrice.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row
                className="mt-4 pb-2 mb-2"
                style={{ borderBottom: "1px dashed #000000" }}
              >
                <Col xs={11} className="d-flex justify-content-between">
                  <Col xs={8}>
                    <h6>Total</h6>
                  </Col>
                  <Col xs={4} className="d-flex justify-content-end pr-3">
                    <span>
                      <strong>
                        ₦ {Number(invoiceDetails?.totalCost).toLocaleString()}
                      </strong>
                    </span>
                  </Col>
                </Col>
              </Row>
              {maintenanceSummary?.signedContractAgreement === "ACCEPTED" &&
                maintenanceSummary?.paymentStatus === "PENDING" &&
                maintenanceSummary?.status === "PENDING" && (
                  <Row
                    className="mt-4 pb-2 mb-2"
                    style={{ borderBottom: "1px dashed #000000" }}
                  >
                    <Col xs={11} className="d-flex justify-content-between">
                      <Col xs={8}>
                        <h6>Amount To Be Paid</h6>
                        <span>70% of the total amount</span>
                      </Col>
                      <Col xs={4} className="d-flex justify-content-end pr-3">
                        <span>
                          <strong>
                            ₦ {partPaymentMsg?.totalAmount?.toLocaleString()}
                          </strong>
                        </span>
                      </Col>
                    </Col>
                  </Row>
                )}
              <Row>
                <Col xs={12} className="d-flex justify-content-center mt-5">
                  {maintenanceSummary?.invoice ? (
                    <Row className="mt-5 mb-5">
                      <Col
                        xs={12}
                        className="mx-auto d-flex justify-content-center"
                      >
                        {maintenanceSummary?.invoiceStatus !== "ACCEPTED" ? (
                          <>
                            {maintenanceSummary?.status === "DELETED" ? (
                              <h5 className="text-danger">INVOICE REJECTED</h5>
                            ) : (
                              <>
                                <Button
                                  outline
                                  color="secondary"
                                  className="w-lg mr-4"
                                  onClick={() =>
                                    rejectMainInvoice(maintenanceSummary?.id)
                                  }
                                  disabled={
                                    maintenanceSummary.invoiceStatus ===
                                    "ACCEPTED"
                                  }
                                >
                                  Reject
                                </Button>
                                <Button
                                  color="success"
                                  className="w-lg"
                                  onClick={() =>
                                    acceptMainInvoice(maintenanceSummary?.id)
                                  }
                                  disabled={
                                    maintenanceSummary.invoiceStatus ===
                                    "ACCEPTED"
                                  }
                                >
                                  Accept
                                </Button>
                              </>
                            )}
                          </>
                        ) : maintenanceSummary?.signedContractAgreement ===
                            "ACCEPTED" &&
                          maintenanceSummary?.paymentStatus === "PENDING" &&
                          maintenanceSummary?.status === "PENDING" ? (
                          <PaystackIntegration
                            amount={partPaymentMsg?.totalAmount}
                            transactionRef={partPaymentMsg?.transactionRef}
                            paymentType="PART"
                            setShow={setShow}
                            id={maintenanceSummary?.id}
                          />
                        ) : maintenanceSummary?.signedContractAgreement ===
                            "ACCEPTED" &&
                          maintenanceSummary?.paymentStatus ===
                            "PART_PAYMENT" ? (
                          <div className="d-flex flex-column align-items-center justify-content-center">
                            <h5 className="text-primary">
                              70% PART PAYMENT DONE
                            </h5>
                            {maintenanceSummary?.status === "COMPLETED" && (
                              <PaystackIntegration
                                amount={completePaymentMsg?.totalAmount}
                                transactionRef={
                                  completePaymentMsg?.transactionRef
                                }
                                paymentType="FULL"
                                setShow={setShow}
                                id={maintenanceSummary?.id}
                              />
                            )}
                          </div>
                        ) : maintenanceSummary?.paymentStatus === "COMPLETE" ? (
                          <h5 className="text-success">PAYMENT COMPLETED</h5>
                        ) : (
                          <></>
                        )}
                      </Col>
                    </Row>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </ModalBody>
          </Modal>
          <Modal
            // size="sm"
            isOpen={showReview}
            toggle={() => setShowReview(!showReview)}
          >
            <ModalHeader toggle={() => setShowReview(!showReview)}>
              Review Vendor
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleReview}>
                <div className="my-4">
                  <Label>Score / Rating (0 to 5)</Label>
                  <input
                    className="form-control"
                    type="number"
                    name="score"
                    value={formData.score}
                    onChange={handleChange}
                    max={5}
                    min={0}
                    required
                  />
                </div>

                <textarea
                  className="form-control mb-4"
                  placeholder="Comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  cols="55"
                >
                  {" "}
                </textarea>
                <div className="d-flex justify-content-center">
                  <Button className="btn btn-success w-lg" type="submit">
                    Submit Review
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </>
      )}
    </div>
  );
};

export default withRouter(MaintenanceSummary);
