import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import MaintenanceRequest from ".";
import livingRoom from "../../../assets/images/Living.png";
import profileImage from '../../../assets/images/ProfileImage.svg';


const MaintenanceSummary = () => {
  const [isBackClicked, setIsBackClicked] = useState(false);

  if (isBackClicked) {
    return <MaintenanceRequest />;
  }
  return (
    <div className="page-content">
      <Row className="mb-4">
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
            <div className="m-5">
              <h6>Problem Description</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis ut sit magni blanditiis ex.</p>
            </div>
          </Row>
          <Row>
            <div className="ml-5 mb-5">
              <h6>Created on</h6>
              <span>3rd July 2020 3:00pm</span>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xl={10} className="header-box">
          <h6 className="mb-4"> Tenant</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img src={profileImage} alt="profile" width="38" height="38" />
            <span className="ml-2">Robert Williams</span>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
          <Col xl={8} className="mx-auto d-flex justify-content-center">
            <Button outline color="success" className="w-lg mr-4">Reject</Button>
            <Button color="success" className="w-lg">Accept</Button>
          </Col>
      </Row>
    </div>
  );
};

export default MaintenanceSummary;
