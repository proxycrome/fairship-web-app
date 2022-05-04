import React from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Alert,
  FormGroup,
} from "reactstrap";
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import walkIcon from "../../../assets/images/walkIcon.png";

const WalkThroughPayment = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Card>
          <CardBody>
            <AvForm>
              <Row>
                <Col md={12}>
                  <div>
                    <img src={walkIcon} />
                    <span className="ml-2">
                      Do you want a 3D walk around photography and video
                      services by Fairship?
                    </span>
                  </div>
                </Col>
                <Col xs={6} className="my-5">
                  <FormGroup className="form-group-custom mb-4">
                    <AvField
                      type="select"
                      name="apartment"
                      id="apartment"
                      label="Number of bedrooms in Apartment"
                    >
                      <option>1 Bedroom Apartment</option>
                      <option>2 Bedroom Apartment</option>
                      <option>3 Bedroom Apartment</option>
                      <option>4 Bedroom Apartment</option>
                      <option>5 Bedroom Apartment</option>
                    </AvField>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <div>
                    <h6>Rank Package</h6>
                    <p>Purchase higher listing Rank and sell Faster</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4} className="d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      border: "1px solid black",
                      width: "90%",
                      textAlign: "center",
                      padding: "15px",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h4 className="mb-4">N45,000</h4>
                    <small className="mb-4">HD Photography Only</small>
                    <p style={{ fontWeight: "600", color: "#1E33C6" }}>BASIC PLAN</p>
                  </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      border: "1px solid black",
                      width: "90%",
                      textAlign: "center",
                      padding: "15px",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h4 className="mb-4">N105,000</h4>
                    <small className="mb-4">HD Photography<br/>Interactive 360 Virtual Tour</small>
                    <p style={{ fontWeight: "600", color: "#FD8E34" }}>STANDARD PLAN</p>
                  </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center">
                  <div
                    style={{
                      border: "1px solid black",
                      width: "90%",
                      textAlign: "center",
                      padding: "15px",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h4 className="mb-4">N120,000.00</h4>
                    <small className="mb-4">HD Photography<br/>Interactive 360 Virtual Tour<br/>Aerial/Drone views</small>
                    <p style={{ fontWeight: "600", color: "#00A769" }}>PREMIUM PLAN</p>
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Button color="success" className="px-5 my-4">Post</Button>
              </Row>
            </AvForm>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default WalkThroughPayment;
