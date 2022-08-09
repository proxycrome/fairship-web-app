import React, { useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMaintenance } from '../../../store/actions';
import avatar from '../../../assets/images/avi.jpg';
// import livingRoom from "../../../assets/images/Living.png";
// import profileImage from '../../../assets/images/ProfileImage.svg';

const MaintenanceSummary = (props) => {
  const dispatch = useDispatch();

  const id = props?.match?.params?.id;

  useEffect(() => {
    dispatch(fetchMaintenance(id));
  }, [dispatch, id]);

  const { maintenanceSummary } = useSelector((state) => state.Maintenance);

  // console.log(maintenanceSummary);

  return (
    <div className="page-content">
      <Row className="mb-4">
        <Col xl={10} className="header-box">
          <Link to="/maintenance">
            <i className="ri-arrow-left-line"></i>
            <span className="ml-2">Back</span>
          </Link>
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
                {maintenanceSummary?.property?.parentProperty?.title}{' '}
                {maintenanceSummary?.property?.title}
              </span>
            </Col>
            {/* <Col ls={6}>
              <h6>Unit</h6>
              <p>0009</p>
            </Col> */}
          </Row>
          <Row>
            <div className="m-5">
              <h6>Problem Description</h6>
              <p>{maintenanceSummary?.description}</p>
            </div>
          </Row>
          <Row>
            <div className="ml-5 mb-5">
              <h6>Created on</h6>
              <span>{maintenanceSummary?.createdAt}</span>
            </div>
          </Row>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xl={10} className="header-box">
          <h6 className="mb-4">Vendor</h6>
          <Row className="d-flex align-items-center ml-2 mb-3">
            <img
              src={
                maintenanceSummary?.serviceProviderService
                  ?.serviceProviderDetail?.useraccount?.profilePhoto
              }
              alt="profile"
              width="38"
              height="38"
            />
            <span className="ml-2">
              {
                maintenanceSummary?.serviceProviderService
                  ?.serviceProviderDetail?.useraccount?.firstName
              }{' '}
              {
                maintenanceSummary?.serviceProviderService
                  ?.serviceProviderDetail?.useraccount?.lastName
              }
            </span>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col xl={8} className="mx-auto d-flex justify-content-center">
          <Button outline color="success" className="w-lg mr-4">
            Reject
          </Button>
          <Button color="success" className="w-lg">
            Accept
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MaintenanceSummary);
