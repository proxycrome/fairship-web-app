import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import emptyCan from '../../../assets/images/EmptyCan.png';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

// user
import Loader from '../../../components/Common/Loading/index';
import { fetchRental } from '../../../store/actions';

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

  getDifferenceInDays = (date1, date2) => {
    if (date2 >= date1) {
      const diffInMs = date2 - date1;
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    }
  };

  componentDidMount() {
    if (this.props.user?.id) {
      this.props.fetchRental('CURRENT');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user && this.props.user?.id) {
      this.props.fetchRental('CURRENT');
    }
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
        // {
        //   label: 'Unit Number',
        //   field: 'unitNumber',
        //   sort: 'asc',
        //   width: 120,
        // },
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
          label: 'Payment Date',
          field: 'out_payment',
          sort: 'asc',
          width: 110,
        },
        {
          label: 'Rent Amount (₦)',
          field: 'rent_price',
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
      rows: this?.props?.rental?.entities?.map((tents) => ({
        tenants: (
          <>
            <img
              className="rounded-circle header-profile-user mr-1"
              src={tents?.tenant?.profilePhoto}
              alt="Header Avatar"
            />
            <span>
              {' '}
              {tents?.tenant?.firstName} {tents?.tenant?.lastName}
            </span>
          </>
        ),
        // unitNumber: "001",
        property: `${
          tents?.property?.parentProperty?.title
            ? tents?.property?.parentProperty?.title
            : ''
        } ${tents?.property?.title}`,
        address: `${tents?.property?.address?.houseNoAddress}`,
        out_payment: `${tents.dueDate}`,
        rent_price: `${tents.property.price.toLocaleString()}`,
        status: (
          <div className="badge badge-soft-success font-size-12">
            {tents?.status}
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
      })),
    };
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>  
            <Breadcrumbs
              title="Tenants"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            {this.props.loading ? (
              <Card>
                <CardBody>
                  <Loader loading={this.props.loading} />
                </CardBody>
              </Card>
            ) : this.props.tenant?.entities?.length !== 0 ? (
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody className="pt-0">
                      <MDBDataTable
                        responsive
                        data={data}
                        className="mt-4"
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody>
                      <div className="text-center">
                        <img
                          src={emptyCan}
                          alt="empty"
                          className="rounded mb-2"
                        />
                        <h4> Table is Empty </h4>
                      </div>
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
  const { tenant } = state.Tenant;
  const { rental, loading } = state.Rental;
  const { user } = state.Account;
  return { tenant, loading, user, rental };
};

export default withRouter(connect(mapStateToProps, { fetchRental })(Tenants));
