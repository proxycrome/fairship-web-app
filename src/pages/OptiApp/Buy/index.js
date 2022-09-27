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

import {
  getBuyApplications
} from '../../../store/actions';

import emptyCan from '../../../assets/images/EmptyCan.png';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import Preview from './Preview/Preview';

import Loader from '../../../components/Common/Loading/index';

import { MDBDataTable } from 'mdbreact';
import './datatables.scss';

class BuyApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [],
      activeTab: '1',
      showPreview: false,
      filter: 'CURRENT'
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
      showPreview: true,
    });
  }

  fair = (e) => {
    this.setState({
      filter: e.target[e.target.selectedIndex].value
    })
  }

  componentDidMount() {
   this.props.getBuyApplications()
  }


  // componentDidUpdate(Pp,Ps, Ss){
  //   if(Ps.filter !== this.state.filter){ 
  //     this.props.fetchRental(this.state.filter)
  //   } 
  // }

  render() {
    // console.log(this.props.buyApplications)
  const buyApplications = this.props?.buyApplications?.purchase?.map((data) => ({
      application: (
        /*map data from api here for each Tenant */
        <>
          <Link
            to={`/buy_preview/${data?.id}`}
            onClick={this.SetShowPreview}
            className="mr-3"
            id="edit1"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={data?.tenant?.profilePhoto}
              // src={avatar2}
              alt="Header Avatar"
            />
            <span> {data.tenant.firstName} {data.tenant.lastName}</span>
          </Link>
        </>
      ),
      // unitNumber: '001',
      property: `${data?.property?.parentProperty?.title ? data?.property?.parentProperty?.title : ''} ${data?.property?.title}`,
      address: `${data?.property?.address?.houseNoAddress}`,
      date: `${data?.createdAt}`,
      status: (
        <div className="badge badge-soft-success font-size-12">
          {data?.status}
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
    }));
    
      

    const data = {
      columns: [
        {
          label: 'Application',
          field: 'application',
          sort: 'asc',
          width: 130,
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
      rows: buyApplications
    };

    if (this.state.showPreview) {
      return (
        <Preview
          GoHome={() => this.setState({ ...this.state, showPreview: false })}
        />
      );
    }

    return (
      <React.Fragment>
        <div className="page-content">
          {/* <div className="float-right mr-3">
            <select className="custom-select custom-select-sm bg-light" onChange={(e)=> this.fair(e)}>
              <option value="CURRENT">Current</option>
              <option value="PROCESSING">Processing</option>
              <option value="EXITED">Exited</option>
            </select>
          </div> */}
          <Container fluid>
            <Breadcrumbs
              title="Buy Applications"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            {this.props.loading ? (
              <Card>
                <CardBody>
                  <Loader loading={this.props.loading} />
                </CardBody>
              </Card>
            ) : (
              <>
                {this.props.rental?.entities?.length !== 0 ? (
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
                  //  <Preview SetShowPreview={this.SetShowPreview}/>
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
                            <h5> No Rent Request! </h5>
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
  const { buyApplications, loading } = state.Buy;
  return { buyApplications, loading };
};

export default withRouter(
  connect(mapStateToProps, { getBuyApplications })(
    BuyApplication
  )
);