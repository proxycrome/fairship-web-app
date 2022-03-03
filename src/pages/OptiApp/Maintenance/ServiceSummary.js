import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import ServiceRequest from "./ServiceRequest";
import livingRoom from "../../../assets/images/Living.png";
import CircuitImg from "../../../assets/images/Circuit.png";
import profileImage from '../../../assets/images/ProfileImage.svg';


const ServiceSummary = () => {
  const [isBackClicked, setIsBackClicked] = useState(false);

  if (isBackClicked) {
    return <ServiceRequest />;
  }
  return (
    <div className="page-content">
      <Row className="mb-2">
        <Col xl={10} className="header-box">
          <Button
            color="link"
            outline
            onClick={() => setIsBackClicked(!isBackClicked)}
          >
            <i className="ri-arrow-left-line"></i>
            <span className="ml-2">Back</span>
          </Button>
          <Row className="d-flex align-items-center ml-5 mb-3">
            <img src={livingRoom} alt="livingroom" width="116" height="108" />
            <Col ls={6}>
              <span>Cosy Studio in the heart of Lagos</span>
            </Col>
            <Col ls={6}>
              <h6>Unit</h6>
              <p>0009</p>
            </Col>
          </Row>
          <Row>
            <div className="d-flex align-items-center ml-5 mb-5">
              <i
                className="far fa-calendar-alt ml-2 mr-2"
                style={{ color: "#187CC3" }}
              ></i>
              <span>3rd July 2020 3:00pm</span>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xl={10} className="header-box pt-5">
          <Row className="other-info">
            <Col ls={6}>
              <div>
                <h6>Fee</h6>
                <p>20,000</p>
              </div>
              <div>
                <h6>Description</h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis ut sit magni blanditiis ex.
                </p>
              </div>
            </Col>
            <Col ls={6}>
              <div>
                <h6>Service Type</h6>
                <p>House Cleaning</p>
              </div>
              <div>
                <h6>Status</h6>
                <p>Completed</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="images-dock d-flex flex-column mb-5">
        <h6 className="mb-4 mt-5" >Images</h6>
        <div className="imgContainer">
            <i className="fas fa-angle-left prev"></i>
            <img src={CircuitImg} alt="circuit" width="100"/>
            <img src={CircuitImg} alt="circuit" width="100"/>
            <img src={CircuitImg} alt="circuit" width="100"/>
            <i className="fas fa-angle-right next"></i>
        </div>
      </Row>
      <Row className="d=flex flex-column" style={{margin: "80px 0 30px 80px"}}>
          <h6>Documents</h6>
          <div className="docContainer">
              <i className="far fa-file-alt mr-1" style={{color: "#187CC3"}}></i>
              <span>Contract Agreement</span>
              <small>signed</small>
          </div>
      </Row>
      <Row className="mb-3">
        <Col xl={10} className="header-box">
          <h6 className="mb-4"> Vendor</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img src={profileImage} alt="profile" width="50" height="50" />
            <Col className="vendor">
              <p>Robert Williams</p>
              <div>4.8<i className="fas fa-star ml-1" style={{color: "#2173A0", fontSize: "14px"}}></i></div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xl={10} className="header-box">
          <h6 className="mb-4"> Tenant</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img src={profileImage} alt="profile" width="38" height="38" />
            <span className="ml-2">Robert Williams</span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceSummary;
