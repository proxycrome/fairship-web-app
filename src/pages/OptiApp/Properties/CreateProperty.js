import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Col,
  Button,
} from 'reactstrap';
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import PropertyForm from './FormData/PropertyFrom';
import UnitForm from './FormData/UnitForm';

import classnames from 'classnames';

// actions
import { createProperties, fetchAgent } from '../../../store/actions';

const data = {
  address: {
    city: 'Lagos',
    country: 'Nigeria',
    houseNoAddress: 'No 22 Mandilass',
    id: 23,
    latitude: 'string',
    lga: 'string',
    longitude: 'string',
    postCode: 'string',
    state: 'string',
    zipCode: 'string',
  },
  agentIds: [127],
  bathrooms: 2,
  bedrooms: 2,
  description: 'string',
  feature: 'SALE',
  images: [
    {
      encodedString:
        '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',
    },
  ],
  isFurnished: true,
  isServiced: true,
  isShared: true,
  otherAmenities: 'string',
  parkingLot: true,
  paymentItems: [
    {
      name: 'string',
      percentageAmount: 0,
    },
  ],
  periodInMonths: 2,
  price: 0,
  size: '200',
  title: 'string',
  type: 'string',
};

const imgEncoded = [
  {
    encodedString:
      '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',
  },
];

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      propertyData: null,
      unitData: null,
      feature: 'RENT',
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.createProperty = this.createProperty.bind(this);
  }

  updateProperty(values, id = 1) {
    console.log(values);
    this.setState({ propertyData: values });
    this.toggleTab(id);
  }

  createProperty(values, id = 1) {
    console.log(values);
    const formData = {
      ...values,
      ...this.state.propertyData,
      description: 'new description',
      size: 200,
      feature: this.state.feature,
      images: imgEncoded
    };
    console.log(formData);
    this.props.createProperties(formData);

    this.setState({ unitData: values });
    // this.toggleTab(id);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        this.setState({
          activeTab: tab,
        });
      }
    }
  }

  componentDidMount() {
    this.props.fetchAgent();
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div
                      id="addproduct-nav-pills-wizard"
                      className="twitter-bs-wizard"
                    >
                      <Nav pills justified className="twitter-bs-wizard-nav">
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleTab(1);
                            }}
                            className={classnames({
                              active: this.state.activeTab === 1,
                            })}
                          >
                            <span className="step-number">01</span>
                            <span className="step-title">Property Details</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            // onClick={() => {
                            //   this.toggleTab(2);
                            // }}
                            className={classnames({
                              active: this.state.activeTab === 2,
                            })}
                          >
                            <span className="step-number">02</span>
                            <span className="step-title">Unit Details</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        activeTab={this.state.activeTab}
                        className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <h4 className="card-title">Choose Type</h4>
                          <div className="mb-4">
                            <Button
                              color={
                                this.state.feature === 'SALE'
                                  ? 'primary'
                                  : 'light'
                              }
                              onClick={() =>
                                this.setState({
                                  feature: 'SALE',
                                })
                              }
                              className="mr-2 px-4"
                            >
                              Sale
                            </Button>
                            <Button
                              color={
                                this.state.feature === 'RENT'
                                  ? 'primary'
                                  : 'light'
                              }
                              onClick={() =>
                                this.setState({
                                  feature: 'RENT',
                                })
                              }
                              className="px-4"
                            >
                              Rent
                            </Button>
                          </div>
                          <PropertyForm
                            updateProperty={(values) =>
                              this.updateProperty(values, 2)
                            }
                            agents={this.props.agents}
                          />
                        </TabPane>
                        <TabPane tabId={2}>
                          <UnitForm
                            updateProperty={(values) =>
                              this.createProperty(values, 2)
                            }
                          />
                        </TabPane>
                      </TabContent>
                    </div>
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
const mapStatetoProps = (state) => {
  const { dashboard, loading } = state.Account;
  const { agents } = state.Agent;
  return { dashboard, loading, agents };
};

export default withRouter(
  connect(mapStatetoProps, { createProperties, fetchAgent })(CreateProperty)
);
