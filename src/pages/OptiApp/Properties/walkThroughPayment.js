import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";

import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import walkIcon from "../../../assets/images/walkIcon.png";
import {
  fetchEachProperties,
  getAllApartmentTypes,
  getWalkByApartment,
} from "../../../store/actions";
import PaystackIntegration from "../../../components/Common/paystackIntegration";

const WalkThroughPayment = ({ match }) => {
  const [planType, setPlanType] = useState("");
  const [open, setOpen] = useState(false);
  const [apartmentType, setApartmentType] = useState("");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e, values) => {
    setOpen(true);
  };

  const {
    property,
    notifyMsg,
    notifyMsgError,
    apartmentTypes,
    walkVideoPlans,
  } = useSelector((state) => state.Properties);

  console.log(walkVideoPlans);

  const cardStyle = {
    boxShadow: "0px 4px 30px rgba(98, 134, 154, 0.38)",
  };

  const id = match?.params?.id;

  useEffect(() => {
    dispatch(getAllApartmentTypes());
  }, []);

  useEffect(() => {
    if (apartmentType) {
      dispatch(getWalkByApartment(apartmentType));
    }
  }, [apartmentType]);

  useEffect(() => {
    dispatch(fetchEachProperties(id));
  }, [dispatch, id]);

  console.log(property);

  return (
    <div className="page-content">
      <Container fluid>
        <Card>
          <CardBody>
            {notifyMsg && notifyMsg?.message && (
              <Alert className="text-center" color="success">
                {notifyMsg?.message}
              </Alert>
            )}
            {notifyMsgError && notifyMsgError?.message && (
              <Alert className="text-center" color="danger">
                {notifyMsgError?.message}
              </Alert>
            )}
            <AvForm onValidSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <div>
                    {/* <img src={walkIcon} /> */}
                    <AvInput
                      name="walkThrough"
                      type="checkbox"
                      className="ml-1"
                    />
                    <span className="ml-4">
                      Do you want a 3D walk around photography and video
                      services by Fairship?
                    </span>
                  </div>
                </Col>
                <Col xs={6} className="my-5">
                  <FormGroup className="form-group-custom mb-4">
                    <AvField
                      type="select"
                      name="apartmentType"
                      id="apartment"
                      label="Number of bedrooms in Apartment"
                      value={apartmentType}
                      onChange={(e) => setApartmentType(e.target.value)}
                      required
                    >
                      <option value="" hidden>
                        Select Apartment Type
                      </option>
                      {apartmentTypes?.map((item, i) => (
                        <option key={i} value={item}>
                          {item.split("_")[0]} {item.split("_")[1]}
                        </option>
                      ))}
                    </AvField>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <div className="mb-4">
                    <h6>Rank Package</h6>
                    <p>Purchase higher listing Rank and sell Faster</p>
                  </div>
                </Col>
              </Row>
              <Row className="pl-3">
                {walkVideoPlans?.map((item, i) => (
                  <Col md={4} className="mt-3" key={i}>
                    <Link to="#">
                      <div
                        className="cardStyle"
                        style={
                          planType ===
                          item.walkthroughVideoPlanResponse.planType
                            ? cardStyle
                            : null
                        }
                        onClick={() => {
                          setPlanType(
                            item.walkthroughVideoPlanResponse.planType
                          );
                          setAmount(item.price);
                        }}
                      >
                        <h4 className="mb-4">₦{item.price.toFixed(2)}</h4>
                        <small className="mb-4">
                          {item.walkthroughVideoPlanResponse.features?.map(
                            (data, i) => (
                              <div key={i} className="d-block">
                                {data}
                              </div>
                            )
                          )}
                          <br />
                        </small>
                        <p
                          style={{
                            fontWeight: "800",
                            color:
                              item.walkthroughVideoPlanResponse.planType ===
                              "BASIC_PLAN"
                                ? "#1E33C6"
                                : item.walkthroughVideoPlanResponse.planType ===
                                  "STANDARD_PLAN"
                                ? "#00A769"
                                : "#FD8E34",
                          }}
                        >
                          {item.walkthroughVideoPlanResponse.planType}
                        </p>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
              <Row className="d-flex justify-content-center">
                <Button
                  type="submit"
                  color="success"
                  className="px-5 my-5"
                  disabled={!amount}
                >
                  Pay
                </Button>
              </Row>
            </AvForm>
          </CardBody>
        </Card>
        <Modal
          // size="sm"
          isOpen={open}
          toggle={() => setOpen(!open)}
        >
          <ModalHeader toggle={() => setOpen(!open)}>
            <span className="d-block">
              {property?.parentProperty?.title} {property?.title}
            </span>
            <small>{property?.propertyRef}</small>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col sm={12}>
                <Button color="secondary" className="float-right mr-2" disabled>
                  Unpaid
                </Button>
              </Col>
            </Row>
            <Row
              className="mt-4 pb-4 mb-2"
              style={{ borderBottom: "1px dashed #000000" }}
            >
              <Col xs={8}>
                <span>
                  {apartmentType?.split("_")[0]?.toLowerCase() +
                    " " +
                    apartmentType?.split("_")[1]?.toLowerCase()}{" "}
                  apartment,{" "}
                  {planType?.split("_")[0]?.toLowerCase() +
                    " " +
                    planType?.split("_")[1]?.toLowerCase()}
                </span>
              </Col>
              <Col xs={4} className="d-flex justify-content-end pr-3">
                <span>
                  <strong>₦ {amount}</strong>
                </span>
              </Col>
            </Row>
            <Row
              className="mt-4 pb-2 mb-2"
              style={{ borderBottom: "1px dashed #000000" }}
            >
              <Col xs={8}>
                <span>Total</span>
              </Col>
              <Col xs={4} className="d-flex justify-content-end pr-3">
                <span>
                  <strong>₦ {amount}</strong>
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="d-flex justify-content-center mt-5">
                <PaystackIntegration
                  amount={amount}
                  id={id}
                  apartmentType={apartmentType}
                  planType={planType}
                  paymentType="WALKTHROUGH"
                  setShow={setOpen}
                />
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
};

export default withRouter(WalkThroughPayment);
