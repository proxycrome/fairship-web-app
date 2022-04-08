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
  fetchRental,
  fetchRental2,
  fetchRental3,
} from '../../../store/actions';

import emptyCan from '../../../assets/images/EmptyCan.png';

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import Preview from './Preview/index';

import Loader from '../../../components/Common/Loading/index';

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
      showPreview: true,
    });
  }

  componentDidMount() {
    this.props.fetchRental();
    this.props.fetchRental2();
    this.props.fetchRental3();
  }
  render() {
    const processingRental = this?.props?.rental?.entities?.map((rents) => ({
      application: (
        /*map data from api here for each Tenant */
        <>
          <Link
            to={`/preview/${rents?.id}`}
            onClick={this.SetShowPreview}
            className="mr-3"
            id="edit1"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={rents?.tenant?.profilePhoto}
              // src={avatar2}
              alt="Header Avatar"
            />
            <span> {rents.rentApplicationForm.name} </span>
          </Link>
        </>
      ),
      unitNumber: '001',
      property: `${rents?.property?.description}`,
      address: `${rents?.property?.address?.houseNoAddress}`,
      date: `${rents?.createdAt}`,
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">
          {rents?.status}
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

    const currentRental = this?.props?.rental2?.entities?.map((rents2) => ({
      application: (
        /*map data from api here for each Tenant */
        <>
          <Link
            to={`/preview/${rents2?.id}`}
            onClick={this.SetShowPreview}
            className="mr-3"
            id="edit1"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={rents2?.tenant?.profilePhoto}
              // src={avatar2}
              alt="Header Avatar"
            />
            <span> {rents2.rentApplicationForm.name} </span>
          </Link>
        </>
      ),
      unitNumber: '001',
      property: `${rents2?.property?.description}`,
      address: `${rents2?.property?.address?.houseNoAddress}`,
      date: `${rents2?.createdAt}`,
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">
          {rents2?.status}
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

    const exitedRental = this?.props?.rental3?.entities?.map((rents3) => ({
      application: (
        /*map data from api here for each Tenant */
        <>
          <Link
            to={`/preview/${rents3?.id}`}
            onClick={this.SetShowPreview}
            className="mr-3"
            id="edit1"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={rents3?.tenant?.profilePhoto}
              // src={avatar2}
              alt="Header Avatar"
            />
            <span> {rents3.rentApplicationForm.name} </span>
          </Link>
        </>
      ),
      unitNumber: '001',
      property: `${rents3?.property?.description}`,
      address: `${rents3?.property?.address?.houseNoAddress}`,
      date: `${rents3?.createdAt}`,
      total: '$172',
      status: (
        <div className="badge badge-soft-success font-size-12">
          {rents3?.status}
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
      rows: processingRental
        ?.concat(currentRental, exitedRental)
        .flatMap((el) => {
          return el?.length <= 0 ? [] : el;
        }),
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
          <Container fluid>
            {this.props.loading ? (
              <Card>
                <CardBody>
                  <Loader loading={this.props.loading} />
                </CardBody>
              </Card>
            ) : (
              <>
                <Breadcrumbs
                  title="Rental Applications"
                  breadcrumbItems={this.state.breadcrumbItems}
                />
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
  const { rental, rental2, rental3, loading } = state.Rental;
  return { rental, rental2, rental3, loading };
};

export default withRouter(
  connect(mapStateToProps, { fetchRental, fetchRental2, fetchRental3 })(
    RentalApplication
  )
);

// export default RentalApplication
