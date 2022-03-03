import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Breadcrumb
import { MDBDataTable } from 'mdbreact';
import './dataTables.scss';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
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
    document
      .getElementsByClassName('pagination')[0]
      .classList.add('pagination-rounded');
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Time',
          field: 'time',
          sort: 'asc',
          width: 130,
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 120,
        },
        {
          label: 'Client',
          field: 'client',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Phone number',
          field: 'phone_no',
          // sort: 'asc',
          width: 80,
        },
        {
          label: 'Address',
          field: 'address',
          // sort: 'asc',
          width: 110,
        },
        {
          label: 'Actions',
          field: 'actions',
          // sort: 'asc',
          width: 135,
        },
        {
          label: '',
          field: 'status',
          // sort: 'asc',
          width: 135,
        },
      ],
      rows: [
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-success btn-sm text-capitalize">
              {' '}
              accepted{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-success btn-sm text-capitalize">
              {' '}
              accepted{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-danger btn-sm text-capitalize">
              {' '}
              Rejected{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-danger btn-sm text-capitalize">
              {' '}
              Rejected{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-success btn-sm text-capitalize">
              {' '}
              accepted{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
        {
          time: <span className="font-weight-bold">9:30AM</span>,
          date: '2021-01-19',
          client: (
            <>
              <span className="badge badge-soft-success font-size-12">
                {' '}
                New{' '}
              </span>
              <span className="font-weight-bold"> Jane Kris Doe </span>
            </>
          ),
          phone_no: '+234-801-2345-2567',
          address: 'No 4, Lorem ipsum close, ikeja, Lagos',
          status: (
            <Button className=" btn btn-secondary btn-sm text-capitalize">
              {' '}
              accept{' '}
            </Button>
          ),
          actions: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <span clas py-0sName="border border-1 p-1 rounded">
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
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
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
                      <h2 className=" mb-4">Tenants</h2>
                    </div>
                    <MDBDataTable responsive data={data} className="mt-4" />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Appointment;
