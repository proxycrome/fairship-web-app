import React, { Component } from "react";
import { Container, Card, CardBody, Row, Col, Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Import Breadcrumb
import { MDBDataTable } from "mdbreact";
import "./dataTables.scss";

// actions
import { fetchAppointment } from "../../../store/actions";
import Loader from "../../../components/Common/Loading/index";

import emptyCan from "../../../assets/images/EmptyCan.png";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  componentDidMount() {
    this.props.fetchAppointment();
    // document
    //   .getElementsByClassName('pagination')[0]
    //   .classList.add('pagination-rounded');
  }

  render() {
    console.log(this.props.appointment);
    const data = {
      columns: [
        {
          label: "Time",
          field: "time",
          sort: "asc",
          width: 80,
        },
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 120,
        },
        {
          label: "Client",
          field: "client",
          sort: "asc",
          width: 100,
        },
        {
          label: "Phone number",
          field: "phone_no",
          // sort: 'asc',
          width: 80,
        },
        {
          label: "Address",
          field: "address",
          // sort: 'asc',
          width: 110,
        },
        {
          label: "Actions",
          field: "actions",
          // sort: 'asc',
          width: 135,
        },
        {
          label: "Status",
          field: "status",
          // sort: 'asc',
          width: 135,
        },
      ],
      rows: this.props.appointment?.map((appoint) => ({
        time: (
          <span className="font-weight-bold">
            {appoint?.startDateTime.split(" ")[1]}
            {appoint?.startDateTime.split(" ")[2]}
          </span>
        ),
        date: `${appoint?.startDateTime.split(" ")[0]}`,
        client: (
          <>
            <span className="badge badge-soft-success font-size-12"> New </span>
            <span className="font-weight-bold">
              {" "}
              {appoint?.tenant?.firstName} {appoint?.tenant?.lastName}{" "}
            </span>
          </>
        ),
        phone_no: `${appoint?.tenant?.phone}`,
        address: `${appoint?.tenant?.address?.houseNoAddress}`,
        status: (
          <Button
            className={
              appoint?.status === "PENDING"
                ? "btn btn-danger btn-sm text-capitalize"
                : "btn btn-success btn-sm text-capitalize"
            }
          >
            {" "}
            {appoint?.status}{" "}
          </Button>
        ),
        actions: (
          <>
            <Link to="#" className="mr-3 text-primary" id="edit1">
              <span className="border border-1 p-1 rounded">
                <i className="text-success fab fa-rocketchat font-size-12"></i>
              </span>
            </Link>
            <Link to="#" className="mr-3 text-primary" id="edit1">
              <span className="border border-1 p-1 py-0 rounded">
                <i
                  className="text-secondary fas fa-user-alt
                  font-size-12"
                ></i>
              </span>
            </Link>
            <Link to="#" className="mr-3 text-primary" id="edit1">
              <span className="border border-1 p-1 py-0 rounded">
                <i
                  className="text-danger fas fa-trash-alt
                  font-size-12"
                ></i>
              </span>
            </Link>
          </>
        ),
      })),

      // [
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-success btn-sm text-capitalize">
      //         {' '}
      //         accepted{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-success btn-sm text-capitalize">
      //         {' '}
      //         accepted{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-danger btn-sm text-capitalize">
      //         {' '}
      //         Rejected{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-danger btn-sm text-capitalize">
      //         {' '}
      //         Rejected{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-success btn-sm text-capitalize">
      //         {' '}
      //         accepted{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      //   {
      //     time: <span className="font-weight-bold">9:30AM</span>,
      //     date: '2021-01-19',
      //     client: (
      //       <>
      //         <span className="badge badge-soft-success font-size-12">
      //           {' '}
      //           New{' '}
      //         </span>
      //         <span className="font-weight-bold"> Jane Kris Doe </span>
      //       </>
      //     ),
      //     phone_no: '+234-801-2345-2567',
      //     address: 'No 4, Lorem ipsum close, ikeja, Lagos',
      //     status: (
      //       <Button className=" btn btn-secondary btn-sm text-capitalize">
      //         {' '}
      //         accept{' '}
      //       </Button>
      //     ),
      //     actions: (
      //       <>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 rounded">
      //             <i className="text-success fab fa-rocketchat font-size-12"></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-secondary fas fa-user-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //         <Link to="#" className="mr-3 text-primary" id="edit1">
      //           <span className="border border-1 p-1 py-0 rounded">
      //             <i
      //               className="text-danger fas fa-trash-alt
      //               font-size-12"
      //             ></i>
      //           </span>
      //         </Link>
      //       </>
      //     ),
      //   },
      // ],
    };
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {this.props?.loading ? (
              <Card>
                <CardBody>
                  <Loader loading={this.props.loading} />
                </CardBody>
              </Card>
            ) : (
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody className="pt-3">
                      <div>
                        <div className="float-right">
                          <select className="custom-select custom-select-sm bg-light">
                            <option defaultValue>All Appointment</option>
                            <option value="1">Accepted</option>
                            <option value="2">Accept</option>
                            <option value="3">Rejected</option>
                          </select>
                        </div>
                        <h2 className=" mb-4">Appointments</h2>
                      </div>
                      {this.props.appointment?.length !== 0 ? (
                        <MDBDataTable responsive data={data} className="mt-4" />
                      ) : (
                        <div className="text-center">
                          <img
                            src={emptyCan}
                            alt="empty"
                            className="rounded mb-2"
                          />
                          <h4> Table is Empty </h4>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { appointment, loading } = state.Appointment;
  return { appointment, loading };
};

export default withRouter(
  connect(mapStateToProps, { fetchAppointment })(Appointment)
);
