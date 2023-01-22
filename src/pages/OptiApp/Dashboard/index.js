import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// actions
import {
  fetchDashboard,
  fetchAppointment,
  getAllServiceReq,
  getMaintenanceReq,
  fetchAllRental,
} from "../../../store/actions";

import ExpiringListAnalytics from "./ExpiringListAnalytics";
import OutstandingBalance from "./OutstandingBalance";
import Reports from "./Reports";
import RevenueAnalytics from "./RevenueAnalytics";
import UpcomingPayment from "./UpcomingPayment";
import ServiceAnalytics from "./listTable";
import MaintenanceAnalytics from "./maintenaceListTable";
import Loader from "../../../components/Common/Loading/index";
import { useSelector } from "react-redux";
// import moment from "moment";

const Dashboard = ({
  fetchDashboard,
  dashboard,
  loading,
  user,
  appointment,
  fetchAppointment,
  getAllServiceReq,
  fetchAllRental,
  getMaintenanceReq,
}) => {
  const date = new Date();
  const mm = date.getMonth();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // const dispatch = useDispatch();

  useEffect(() => {
    fetchDashboard();
    fetchAppointment();
    getAllServiceReq();
    fetchAllRental();
    getMaintenanceReq();
  }, []);

  // const recentAppointment = appointment?.filter(appoint => appoint?.status === "PENDING").slice(0, 1);
  const recentAppointment = appointment?.slice(0, 1);

  const allrentals = useSelector((state) => state.fetchReducerExpiring.allrent);

  const { services, maintenanceRequests } = useSelector(
    (state) => state.Maintenance
  );

  const cardLoading = useSelector((state) => state.Maintenance.loading);

  const appDate = new Date(
    recentAppointment &&
      recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[1] +
        "-" +
        recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[0] +
        "-" +
        recentAppointment[0]?.startDateTime?.split(" ")[0].split("-")[2] +
        " " +
        recentAppointment[0]?.startDateTime?.split(" ")[1] +
        " " +
        recentAppointment[0]?.startDateTime?.split(" ")[2]
  );
  const dd = appDate.getDay();

  // const testDate = new Date("2023-02-20");

  function getDifferenceInHours(date1, date2) {
    if (date2 >= date1) {
      const diffInMs = Math.abs(date2 - date1);
      return Math.round(diffInMs / (1000 * 60 * 60));
    }
  }

  const remainingHours = getDifferenceInHours(date, appDate);

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
                    backgroundColor: "rgba(30, 155, 163, 1)",
                    width: "auto",
                    height: "auto",
                    borderRadius: "20px",
                    display: "flex",
                  }}
                  className="p-4"
                >
                  <CardBody style={{ display: "flex", position: "relative", width: "auto", height: "auto"}}>
                    <div>
                      <div style={{ width: "90px", height: "50px" }}>
                        <p
                          style={{
                            width: "90px",
                            color: "rgba(172, 223, 252, 0.25)",
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
                          border: "35px solid rgba(30, 155, 163, 1)",
                          borderTop: 0,
                          borderBottom: "60px solid #c100A1",
                          marginTop: "80px",
                          position: "absolute",
                          top: "10%",
                          left: "4%",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{ width: "85%" }}
                      className="d-flex flex-column"
                    >
                      <div className="d-flex flex-column">
                        <p
                          className="text-white d-flex flex-wrap"
                          style={{
                            height: "42px",
                            font: "Poppins",
                            fontWeight: 600,
                            fontSize: "28px",
                            lineHeight: "42px",
                          }}
                        >
                          Welcome {user?.fullName}
                        </p>
                        <p
                          className="text-white"
                          style={{
                            height: "27px",
                            font: "Poppins",
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "4rem",
                            paddingTop: "3rem"
                          }}
                        >
                          {date.getDate() +
                            " " +
                            month[mm] +
                            " " +
                            date.getFullYear()}
                        </p>
                      </div>
                      <hr
                        style={{
                          width: "252.14px",
                          color: "rgba(255, 255, 255, 0.42)",
                          marginRight: "130px",
                          marginTop: "20px",
                        }}
                      />
                      <div className="d-flex flex-wrap">
                        <p
                          className="text-white"
                          style={{
                            font: "Poppins",
                            fontSize: "18px",
                            lineHeight: "27px",
                            fontWeight: 700,
                          }}
                        >
                          Your Appointments
                        </p>
                        <Link
                          to="/appointments"
                          className="text-white"
                          style={{
                            font: "Poppins",
                            fontSize: "11px",
                            lineHeight: "14.41px",
                            fontWeight: 700,
                            padding: "8px 20px",
                          }}
                        >
                          <span>View All</span>
                        </Link>
                      </div>
                      <div className="d-flex">
                        <p
                          className="text-white"
                          style={{
                            width: "50px",
                            height: "24px",
                            font: "Poppins",
                            fontSize: "18px",
                            fontWeight: 600,
                          }}
                        >
                          {recentAppointment &&
                            recentAppointment[0]?.startDateTime?.split(" ")[1]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p
                            className="text-white"
                            style={{
                              width: "23px",
                              height: "20px",
                              font: "Poppins",
                              fontSize: "13px",
                              lineHeight: "19.5px",
                              fontWeight: 400,
                              marginLeft: "2px",
                            }}
                          >
                            {recentAppointment &&
                              recentAppointment[0]?.startDateTime?.split(
                                " "
                              )[2]}
                          </p>
                          <p
                            className="text-white"
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "rgba(255, 255, 255, 1)",
                              borderRadius: "50%",
                              marginTop: "7px",
                              marginRight: "7px",
                            }}
                          ></p>
                          <p className="text-white">
                            {recentAppointment &&
                              recentAppointment[0]?.startDateTime?.split(
                                " "
                              )[0]}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className="d-flex flex-wrap">
                          <p
                            className={
                              day[dd] === "Mo" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              paddingTop: "2px",
                            }}
                          >
                            Mo
                          </p>
                          <p
                            className={
                              day[dd] === "Tu" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            Tu
                          </p>
                          <p
                            className={
                              day[dd] === "We" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            We
                          </p>
                          <p
                            className={
                              day[dd] === "Th" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            Th
                          </p>
                          <p
                            className={
                              day[dd] === "Fr" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            Fr
                          </p>
                          <p
                            className={
                              day[dd] === "Sa" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            Sa
                          </p>
                          <p
                            className={
                              day[dd] === "Su" ? "appointDay" : "nonAppDay"
                            }
                            style={{
                              width: "23px",
                              height: "23px",
                              borderRadius: "50%",
                              textAlign: "center",
                              marginLeft: "7px",
                              paddingTop: "2px",
                            }}
                          >
                            Su
                          </p>
                        </div>

                        <p
                          className="text-white"
                          style={{
                            width: "100px",
                            height: "13px",
                            borderRadius: "50%",
                            marginLeft: "12px",
                            font: "Poppins",
                            fontWeight: 600,
                            marginTop: "4px",
                            fontSize: "14px",
                            lineHeight: "13.1px",
                          }}
                        >
                          {remainingHours ? remainingHours : 0} Hours left
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "140px" }}>
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "rgba(30, 155, 163, 1)",
                          border: " 0.1875em solid #c100A1",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "60%",
                          left: "6%",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "51px",
                          height: "42px",
                          backgroundColor: "rgba(30, 155, 163, 1)",
                          border: " 0.1875em solid #ffd700",
                          marginTop: "70px",
                          position: "absolute",
                          top: "60%",
                          left: "6%",
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
                <Reports data={dashboard} />
              </Col>
              <Col md={6}>
                <OutstandingBalance allrentals={allrentals} />
              </Col>
              <Col md={6}>
                <ExpiringListAnalytics />
              </Col>
              <Col md={6}>
                <UpcomingPayment />
              </Col>
              <Col md={6}>
                <ServiceAnalytics
                  Title={"Recent Service Request"}
                  services={services}
                  loading={cardLoading}
                />
              </Col>
              <Col md={6}>
                <MaintenanceAnalytics
                  Title={"Recent Maintenance Request"}
                  maintenance={maintenanceRequests}
                  loading={cardLoading}
                />
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
  const { allrent, errorrent } = state.fetchReducerExpiring;
  return { dashboard, loading, user, appointment, allrent, errorrent };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchDashboard,
    fetchAppointment,
    getAllServiceReq,
    fetchAllRental,
    getMaintenanceReq,
  })(Dashboard)
);
