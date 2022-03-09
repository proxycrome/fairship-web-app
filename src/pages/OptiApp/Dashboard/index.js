import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// actions
import { fetchDashboard } from '../../../store/actions';

import ExpiringListAnalytics from './ExpiringListAnalytics';
import OutstandingBalance from './OutstandingBalance';
import Reports from './Reports';
import RevenueAnalytics from './RevenueAnalytics';
import UpcomingPayment from './UpcomingPayment';
import ServiceAnalytics from './listTable';
import Loader from '../../../components/Common/Loading/index';

const Dashboard = ({ fetchDashboard, dashboard, loading }) => {
  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {loading ? (
            <Card>
              <CardBody>
                <Loader loading={loading} />
              </CardBody>
            </Card>
          ) : (
            <Row>
              <Col md={6}>
                <Card
                  style={{
                    backgroundColor: 'rgba(30, 155, 163, 1)',
                    height: '339px',
                    borderRadius: '20px',
                    display: 'flex',
                  }}
                >
                  <CardBody style={{ display: 'flex' }}>
                    <div>
                      <div style={{ width: '90px', height: '50px' }}>
                        <p
                          style={{
                            width: '90px',
                            color: 'rgba(172, 223, 252, 0.25)',
                          }}
                        >
                          ||||||||||||||||
                          <br />
                          ||||||||||||||||
                          <br />
                          ||||||||||||||||
                          <br />
                          ||||||||||||||||
                          <br />
                        </p>
                      </div>
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          border: '35px solid rgba(30, 155, 163, 1)',
                          borderTop: 0,
                          borderBottom: '60px solid #c100A1',
                          marginTop: '80px',
                        }}
                      ></div>
                    </div>
                    <div style={{ width: '321px' }}>
                      <p
                        className="text-white"
                        style={{
                          height: '42px',
                          font: 'Poppins',
                          fontWeight: 600,
                          fontSize: '28px',
                          lineHeight: '42px',
                        }}
                      >
                        Welcome Saheed Abdul
                      </p>
                      <p
                        className=" text-white"
                        style={{
                          height: '27px',
                          font: 'Poppins',
                          fontWeight: 500,
                          fontSize: '18px',
                          lineHeight: '27px',
                        }}
                      >
                        25 Jan 2021
                      </p>
                      <hr
                        style={{
                          width: '252.14px',
                          color: 'rgba(255, 255, 255, 0.42)',
                          marginRight: '130px',
                        }}
                      />
                      <div style={{ display: 'flex' }}>
                        <p
                          className="text-white"
                          style={{
                            width: '230px',
                            height: '27px',
                            font: 'Poppins',
                            fontSize: '18px',
                            lineHeight: '27px',
                            fontWeight: 700,
                          }}
                        >
                          Your Appointments
                        </p>
                        <p
                          className="text-white"
                          style={{
                            width: '50px',
                            height: '14px',
                            font: 'Poppins',
                            fontSize: '11px',
                            lineHeight: '14.41px',
                            fontWeight: 700,
                            marginTop: '5px',
                          }}
                        >
                          View All
                        </p>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p
                          className="text-white"
                          style={{
                            width: '39px',
                            height: '24px',
                            font: 'Poppins',
                            fontSize: '18px',
                            lineHeight: '23.58px',
                            fontWeight: 600,
                          }}
                        >
                          7:45
                        </p>
                        <div style={{ display: 'flex' }}>
                          <p
                            className="text-white"
                            style={{
                              width: '23px',
                              height: '20px',
                              font: 'Poppins',
                              fontSize: '13px',
                              lineHeight: '19.5px',
                              fontWeight: 400,
                              marginLeft: '2px',
                            }}
                          >
                            am
                          </p>
                          <p
                            className="text-white"
                            style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: 'rgba(255, 255, 255, 1)',
                              borderRadius: '50%',
                              marginTop: '7px',
                              marginRight: '7px',
                            }}
                          ></p>
                          <p className="text-white">January 18th</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p
                          className="text-white"
                          style={{
                            backgroundColor: 'rgba(56,199,40,1)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                          }}
                        >
                          Mo
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          Tu
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          We
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          Th
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          Fr
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          Sa
                        </p>
                        <p
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.85)',
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                            marginLeft: '7px',
                          }}
                        >
                          Su
                        </p>
                        <p
                          className="text-white"
                          style={{
                            width: '70px',
                            height: '13px',
                            borderRadius: '50%',
                            marginLeft: '12px',
                            font: 'Poppins',
                            fontWeight: 600,
                            marginTop: '4px',
                            fontSize: '11px',
                            lineHeight: '13.1px',
                          }}
                        >
                          36 Hours left
                        </p>
                      </div>
                    </div>
                    <div style={{ width: '140px' }}>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          backgroundColor: 'rgba(30, 155, 163, 1)',
                          border: ' 0.1875em solid #c100A1',
                          borderRadius: '50%',
                        }}
                      ></div>
                      <div
                        style={{
                          width: '51px',
                          height: '42px',
                          backgroundColor: 'rgba(30, 155, 163, 1)',
                          border: ' 0.1875em solid #ffd700',
                          marginTop: '70px',
                        }}
                      ></div>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody className="text-center">
                    <Row>
                      <Col>Total Rent</Col>
                      <Col>
                        <h6> 5,000,000.00</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <RevenueAnalytics />
              </Col>
              <Col md={6}>
                <Reports data={dashboard}/>
              </Col>
              <Col md={6}>
                <OutstandingBalance />
              </Col>
              <Col md={6}>
                <ExpiringListAnalytics />
              </Col>
              <Col md={6}>
                <UpcomingPayment />
              </Col>
              <Col md={6}>
                <ServiceAnalytics Title={'Recent Service Request'} />
              </Col>
              <Col md={6}>
                <ServiceAnalytics Title={'Recent Maintenance Request'} />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { dashboard, loading } = state.Account;
  return { dashboard, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchDashboard })(Dashboard)
);
