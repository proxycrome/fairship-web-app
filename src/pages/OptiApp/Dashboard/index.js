import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// actions
import { fetchDashboard, fetchAppointment, getAllServiceReq, fetchRental } from '../../../store/actions';


import ExpiringListAnalytics from './ExpiringListAnalytics';
import OutstandingBalance from './OutstandingBalance';
import Reports from './Reports';
import RevenueAnalytics from './RevenueAnalytics';
import UpcomingPayment from './UpcomingPayment';
import ServiceAnalytics from './listTable';
import MaintenanceAnalytics from './maintenaceListTable';
import Loader from '../../../components/Common/Loading/index';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllRental } from '../../../store/actions';

const Dashboard = ({ fetchDashboard, dashboard, loading, user, appointment, fetchAppointment, getAllServiceReq }) => {
  const date = new Date();
  const mm = date.getMonth();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const dispatch = useDispatch()

  

  useEffect(() => {
    fetchDashboard();
    fetchAppointment();
    getAllServiceReq();
    dispatch(fetchAllRental());
  }, []);

 const allrentals = useSelector((state) => state.fetchReducerExpiring.allrent)

 console.log(allrentals)

  const recentAppointment = appointment?.filter(appoint => appoint?.status === "PENDING").slice(0, 1);

  const services = useSelector((state) => state.Maintenance?.services );

  const appDate = new Date(recentAppointment && (recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[1] + "-" + recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[0] + "-" + recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[2] + " " + recentAppointment[0]?.startDateTime?.split(" ")[1] + " " + recentAppointment[0]?.startDateTime?.split(" ")[2]));
  const dd = appDate.getDay();
  
  function getDifferenceInHours(date1, date2) {
    if(date2 >= date1){
      const diffInMs = Math.abs(date2 - date1);
      return Math.round(diffInMs / (1000 * 60 * 60));
    }
  }

  const remainingHours = getDifferenceInHours(date, appDate)

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
                        Welcome {user && user?.fullName}
                      </p>
                      <p
                        className=" text-white"
                        style={{
                          height: '27px',
                          font: 'Poppins',
                          fontWeight: 500,
                          fontSize: '18px',
                          lineHeight: '4',
                        }}
                      >
                        {date.getDate() + " " + month[mm] + " " + date.getFullYear()}
                      </p>
                      <hr
                        style={{
                          width: '252.14px',
                          color: 'rgba(255, 255, 255, 0.42)',
                          marginRight: '130px',
                          marginTop: '20px'
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
                        <Link 
                          to="/appointments"
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
                        </Link>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p
                          className="text-white"
                          style={{
                            width: '50px',
                            height: '24px',
                            font: 'Poppins',
                            fontSize: '18px',
                            fontWeight: 600,
                          }}
                        >
                          {recentAppointment && recentAppointment[0]?.startDateTime?.split(" ")[1]}
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
                            {recentAppointment && recentAppointment[0]?.startDateTime?.split(" ")[2]}
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
                          <p className="text-white">{recentAppointment && recentAppointment[0]?.startDateTime?.split(" ")[0]}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p
                          className={day[dd] === "Mo" ? "appointDay" : "nonAppDay"}
                          style={{
                            width: '23px',
                            height: '23px',
                            borderRadius: '50%',
                            textAlign: 'center',
                          }}
                        >
                          Mo
                        </p>
                        <p
                 className={day[dd] === "Tu" ? "appointDay" : "nonAppDay"}

                          style={{
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
                          className={day[dd] === "We" ? "appointDay" : "nonAppDay"}
                          style={{
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
                          className={day[dd] === "Th" ? "appointDay" : "nonAppDay"}
                          style={{
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
                          className={day[dd] === "Fr" ? "appointDay" : "nonAppDay"}
                          style={{
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
                          className={day[dd] === "Sa" ? "appointDay" : "nonAppDay"}
                          style={{
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
                          className={day[dd] === "Su" ? "appointDay" : "nonAppDay"}
                          style={{
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
                            width: '100px',
                            height: '13px',
                            borderRadius: '50%',
                            marginLeft: '12px',
                            font: 'Poppins',
                            fontWeight: 600,
                            marginTop: '4px',
                            fontSize: '14px',
                            lineHeight: '13.1px',
                          }}
                        >
                          {remainingHours ? remainingHours : 0 } Hours left
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
                        <h6> {allrentals?.entities?.length}</h6>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <RevenueAnalytics allrentals={allrentals} />
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
                <ServiceAnalytics Title={'Recent Service Request'} services={services}/>
              </Col>
              <Col md={6}>
                <MaintenanceAnalytics Title={'Recent Maintenance Request'} />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { dashboard, loading, user } = state.Account;
  const { appointment } = state.Appointment;
  const {allrent, errorrent } = state.fetchReducerExpiring;
  return { dashboard, loading, user, appointment, allrent, errorrent};
};

export default withRouter(
  connect(mapStatetoProps, { fetchDashboard, fetchAppointment, getAllServiceReq, fetchAllRental})(Dashboard)
);
