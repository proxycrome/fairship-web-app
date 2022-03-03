import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import Preview from './Preview';

// user
import avatar2 from '../../../assets/images/users/avatar-2.jpg';

import { MDBDataTable } from 'mdbreact';
import './datatables.scss';

class RentalApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        // { title: 'Rental Applications', link: '#' },
        // { title: 'Orders', link: '#' },
      ],
      activeTab: '1',
      showPreview: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.SetShowPreview = this.SetShowPreview.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  SetShowPreview() {
    this.setState({
      ...this.state,
      showPreview: !this.state.showPreview,
    });
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
          label: 'Application',
          field: 'application',
          sort: 'asc',
          width: 130,
        },
        {
          label: 'Unit Number',
          field: 'unitNumber',
          sort: 'asc',
          width: 120,
        },
        {
          label: 'Property',
          field: 'property',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Address',
          field: 'address',
          sort: 'asc',
          width: 80,
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 110,
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 135,
        },
      ],
      rows: [
        {
          application: (
            <>
              <Link
                to="#"
                onClick={this.SetShowPreview}
                className="mr-3"
                id="edit1"
              >
                <img
                  className="rounded-circle header-profile-user mr-1"
                  src={avatar2}
                  alt="Header Avatar"
                />
                <span> Robert Willians </span>
              </Link>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Approved
            </div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
        {
          application: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-secondary font-size-12">
              Pending
            </div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
        {
          application: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Approved
            </div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
        {
          application: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-danger font-size-12">Rejected</div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
        {
          application: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-danger font-size-12">Rejected</div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
        {
          application: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: '001',
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          date: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Approved
            </div>
          ),
          action: (
            <>
              <Link to="#" className="mr-3 text-primary" id="edit1">
                <i className="mdi mdi-pencil font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit1">
                Edit
              </UncontrolledTooltip>
              <Link to="#" className="text-danger" id="delete1">
                <i className="mdi mdi-trash-can font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="delete1">
                Delete
              </UncontrolledTooltip>
            </>
          ),
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="page-content">
          {!this.state.showPreview ? (
            <Container fluid>
              <Breadcrumbs
                title="Rental Applications"
                breadcrumbItems={this.state.breadcrumbItems}
              />

              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody className="pt-0">
                      <MDBDataTable responsive data={data} className="mt-4" />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          ) : (
            <Preview SetShowPreview={this.SetShowPreview}/>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default RentalApplication;
