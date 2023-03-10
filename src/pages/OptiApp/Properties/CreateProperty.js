import React, { Component } from "react";
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
  Alert,
} from "reactstrap";
// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import PropertyForm from "./FormData/PropertyForm";
import UnitForm from "./FormData/UnitForm";

import classnames from "classnames";
import CreateMoreUnit from "./CreateMoreUnit";
// actions
import {
  createProperties,
  getLandlordAgents,
  getPropertyTypes,
  loadUser,
} from "../../../store/actions";

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      propertyData: null,
      unitData: null,
      feature: "RENT",
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.createProperty = this.createProperty.bind(this);
  }

  updateProperty(values, id = 1) {
    this.setState({ propertyData: values });
    this.toggleTab(id);
  }

  createProperty(values, id = 1) {
    const formData = {
      feature: this.state.feature,
      propertyUnit: { ...values },
      ...this.state.propertyData,
    };
    const payload = {
      type: null,
    };

    this.props.createProperties(formData, payload);

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
    if (this.props.user) {
      this.props.getLandlordAgents(this.props.user?.id);
      this.props.getPropertyTypes();
    }
  }

  componentDidUpdate(prevProps, PrevState, snapshot) {
    if (prevProps.user !== this.props.user) {
      this.props.getLandlordAgents(this.props.user?.id);
      this.props.getPropertyTypes();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {!this.props.createUnit ? (
              <Row>
                <Col lg={12}>
                  <div className="mb-2 text-right">
                    <Link to="/properties">
                      <button className="btn btn-success btn-sm">
                        <i className="fas fa-arrow-left mr-2" /> Back
                      </button>
                    </Link>
                  </div>
                  <Card>
                    <CardBody>
                      <div
                        id="addproduct-nav-pills-wizard"
                        className="twitter-bs-wizard"
                      >
                        {this.props.propertiesError && (
                          <Alert color="danger" className="text-center">
                            {this.props.propertiesError}
                          </Alert>
                        )}
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
                              <span className="step-title">
                                Property Details
                              </span>
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
                                  this.state.feature === "SALE"
                                    ? "primary"
                                    : "light"
                                }
                                onClick={() =>
                                  this.setState({
                                    feature: "SALE",
                                  })
                                }
                                className="mr-2 px-4"
                              >
                                Sale
                              </Button>
                              <Button
                                color={
                                  this.state.feature === "RENT"
                                    ? "primary"
                                    : "light"
                                }
                                onClick={() =>
                                  this.setState({
                                    feature: "RENT",
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
                              agents={this.props.landlordAgents?.data}
                              propertyTypes={this.props.propertyTypes}
                              landlordAgents={this.props.landlordAgents}
                              feature={this.state.feature}
                            />
                          </TabPane>
                          <TabPane tabId={2}>
                            <UnitForm
                              updateProperty={(values) =>
                                this.createProperty(values, 2)
                              }
                              agents={this.props.landlordAgents?.data}
                              propertyTypes={this.props.propertyTypes}
                              landlordAgents={this.props.landlordAgents}
                              feature={this.state.feature}
                            />
                          </TabPane>
                        </TabContent>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : (
              <CreateMoreUnit
                agents={this.props.agents}
                propertyTypes={this.props.propertyTypes}
              />
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = (state) => {
  const { loading, user } = state.Account;
  const { message, property, createUnit, propertyTypes, propertiesError } =
    state.Properties;
  const { agents, landlordAgents } = state.Agents;
  return {
    loading,
    agents,
    message,
    property,
    createUnit,
    user,
    propertyTypes,
    landlordAgents,
    propertiesError,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    createProperties,
    getLandlordAgents,
    getPropertyTypes,
    loadUser,
  })(CreateProperty)
);
