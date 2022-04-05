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
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import Loader from '../../../components/Common/Loading/index';
import {fetchTenant, loadUser} from '../../../store/actions'

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
    this.props.fetchTenant(this.props.user?.id);
    // document
    //   .getElementsByClassName('pagination')[0]
    //   .classList.add('pagination-rounded');
  }

  render() {
    console.log(this.props.tenant)
    console.log(this.props?.user)
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
      rows: 
      this?.props?.tenant?.entities?.map(tents =>
        (
        {
          tenants: (
            <>
              <img
                className="rounded-circle header-profile-user mr-1"
                src={tents?.profilePhoto}
                alt="Header Avatar"
              />
              <span> {tents?.firstName} {tents?.lastName}</span>
            </>
          ),
          unitNumber: "001",
          property: '', //`${tents?.property?.description}`
          address: `${tents?.address?.houseNoAddress}`,
          out_payment:'' ,
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">
              
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
        }
      ))
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
          { this.props.loading ? (
              <Card>
                <CardBody>
                  <Loader loading={this.props.loading} />
                </CardBody>
              </Card>
          ) : (
            <>
            <Breadcrumbs
            title="Tenants"
            breadcrumbItems={this.state.breadcrumbItems}
          />

           { this.props.tenant?.entities?.length !== 0 ?
               
               (                
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody className="pt-0">
                      <MDBDataTable responsive data={data} className="mt-4" />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
                ) : (
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody >
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
          </>
          )}  
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { tenant, loading } = state.Tenant
  const { user } = state.Account
  return { tenant, loading,  user }
};





export default withRouter(
  connect(mapStateToProps,  {fetchTenant})(Tenants)
);
