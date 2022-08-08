import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";

// import livingRoom from "../../../assets/images/Living.png";
// import CircuitImg from "../../../assets/images/Circuit.png";
import profileImage from "../../../assets/images/ProfileImage.svg";
import { Link, withRouter } from "react-router-dom";
import { fetchService } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const ServiceSummary = (props) => {
  const dispatch = useDispatch();

  const serviceId = props?.match?.params?.bookedServiceId;

  useEffect(() => {
    dispatch(fetchService(serviceId));
  }, [dispatch, serviceId]);

  const { serviceSummary } = useSelector((state) => state.Maintenance);

  console.log(serviceSummary);


  return (
    <div className="page-content">
      <Row className="mb-2">
        <Col xs={10} className="header-box">
          <Link to="#" onClick={() => props.history.goBack()}>
            <i className="ri-arrow-left-line"></i>
            <span className="ml-2">Back</span>
          </Link>
          <Row className="d-flex align-items-center ml-5 mb-3 mt-3">
            {serviceSummary?.tenant?.profilePhoto ? (
              <img
                src={serviceSummary?.tenant?.profilePhoto}
                alt="livingroom"
                width="116"
                height="108"
              />
            ) : null}
            <Col ls={6}>
              <h6>Property</h6>
              <span>{serviceSummary?.tenant?.address?.houseNoAddress}</span>
            </Col>
            <Col ls={6}>
              {/* <h6>Unit</h6>
              <p>0009</p> */}
            </Col>
          </Row>
          <Row>
            <div className="d-flex align-items-center ml-5 mb-5 mt-4">
              <i
                className="far fa-calendar-alt ml-2 mr-2"
                style={{ color: "#187CC3" }}
              ></i>
              <span>
                {serviceSummary?.appointedDate} {serviceSummary?.appointedTime}
              </span>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={10} className="header-box pt-5">
          <Row className="other-info">
            <Col ls={6}>
              <div>
                <h6>Fee</h6>
                <p>₦{serviceSummary?.invoice?.totalCost}</p>
              </div>
              <div>
                <h6>Description</h6>
                <p>{serviceSummary?.description}</p>
              </div>
            </Col>
            <Col ls={6}>
              <div>
                <h6>Service Type</h6>
                <p>{serviceSummary?.serviceProviderService?.serviceType}</p>
              </div>
              <div>
                <h6>Status</h6>
                <p>{serviceSummary?.status}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="images-dock d-flex flex-column mb-5">
        <h6 className="mb-4 mt-5">Images</h6>
        <div className="imgContainer d-flex">
          {/* <i className="fas fa-angle-left prev"></i> */}
          {serviceSummary?.uploadedImages?.map((info) => (
            <img
              key={info?.id}
              src={info?.imageUrl}
              alt="circuit"
              width="100"
              height="100"
              className="mr-2"
            />
          ))}
          {/* <i className="fas fa-angle-right next"></i> */}
        </div>
      </Row>
      <Row
        className="d=flex flex-column"
        style={{ margin: "80px 0 30px 80px" }}
      >
        <h6>Documents</h6>
        {serviceSummary?.signedContractAgreement && (
          <div className="docContainer p-3">
            <a href={serviceSummary?.signedContractAgreement} target="_blank" rel="noopener noreferrer">
            <img
              src={serviceSummary?.signedContractAgreement}
              alt="contract"
              width="100"
            />
            <small>signed</small>
            </a>
          </div>
        )}
      </Row>
      <Row className="mb-3">
        <Col xs={10} className="header-box">
          <h6 className="mb-4"> Vendor</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img src={profileImage} alt="profile" width="50" height="50" />
            <Col className="vendor">
              <p>
                {serviceSummary?.serviceProviderUseraccount?.firstName}{" "}
                {serviceSummary?.serviceProviderUseraccount?.lastName}
              </p>
              <div>
                {serviceSummary?.serviceProviderUseraccount?.averageRating}
                <i
                  className="fas fa-star ml-1"
                  style={{ color: "#2173A0", fontSize: "14px" }}
                ></i>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={10} className="header-box">
          <h6 className="mb-4"> Tenant</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img src={profileImage} alt="profile" width="38" height="38" />
            <span className="ml-2">
              {serviceSummary?.tenant?.firstName}{" "}
              {serviceSummary?.tenant?.lastName}
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(ServiceSummary);
