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
  getLeaseTerminations
} from '../../../store/actions';
import emptyCan from '../../../assets/images/EmptyCan.png';
import Breadcrumbs from '../../../components/Common/Breadcrumb';
import Loader from '../../../components/Common/Loading/index';
import { MDBDataTable } from 'mdbreact';

class LeaseTermination extends Component {
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
   this.props.getLeaseTerminations()
  }


  // componentDidUpdate(Pp,Ps, Ss){
  //   if(Ps.filter !== this.state.filter){ 
  //     this.props.fetchRental(this.state.filter)
  //   } 
  // }

  render() {
  const LeaseTerminations = this.props?.terminationRequests?.entities?.map((data) => ({
      property: (
        /*map data from api here for each Tenant */
        <>
          <Link
            to={`/previewLeaseTermination/${data?.id}`}
            onClick={this.SetShowPreview}
            className="mr-3"
            id="edit1"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={data?.rent.property?.indexImage}
              // src={avatar2}
              alt="Header Avatar"
            />
            <span> {data?.rent?.property?.parentProperty?.title} {data?.rent?.property?.title}</span>
          </Link>
        </>
      ),
      // unitNumber: '001',
      
      address: `${data?.rent?.property?.address?.houseNoAddress}`,
      description: `${data?.reasonForLeaving}`,
      date: `${data?.expectedDate}`,
      status: (
        <div className="badge badge-soft-success font-size-12">
          {data?.status}
        </div>
      ),
      requestedBy: `Requested by ${data?.requestedBy?.toLowerCase()}`,
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
            label: 'Description',
            field: 'description',
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
        {
            label: '',
            field: 'requestedBy',
            sort: 'asc',
            width: 135,
          },
      ],
      rows: LeaseTerminations
    };

    // if (this.state.showPreview) {
    //   return (
    //     <Preview
    //       GoHome={() => this.setState({ ...this.state, showPreview: false })}
    //     />
    //   );
    // }

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
              title="Lease Termination Requests"
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
  const { terminationRequests, loading } = state.terminationReducer;
  return { terminationRequests, loading };
};

export default withRouter(
  connect(mapStateToProps, { getLeaseTerminations })(
    LeaseTermination
  )
);