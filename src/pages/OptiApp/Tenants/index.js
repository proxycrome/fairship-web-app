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

// user
import avatar2 from '../../../assets/images/users/avatar-2.jpg';

import { MDBDataTable } from 'mdbreact';
import './dataTables.scss';

class Tenants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        // { title: 'Rental tenantss', link: '#' },
        // { title: 'Orders', link: '#' },
      ],
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
          label: 'Tenants',
          field: 'tenants',
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
          label: 'Outstanding Payment',
          field: 'out_payment',
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
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: "001",
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Active
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
          tenants: (
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
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Active
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
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: "001",
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Active
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
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: "001",
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-danger font-size-12">Inactive</div>
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
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: "001",
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-danger font-size-12">Inactive</div>
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
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar2}
                alt="Header Avatar"
              />
              <span> Robert Willians </span>
            </>
          ),
          unitNumber: "001",
          property: 'Casy studio in the heart of Lagos',
          address: '808 Mandillas Mall, Marina, Lagos Nigeria',
          out_payment: '04 Apr, 2020',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              Active
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
          <Container fluid>
            <Breadcrumbs
              title="Tenants"
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
        </div>
      </React.Fragment>
    );
  }
}

export default Tenants;
