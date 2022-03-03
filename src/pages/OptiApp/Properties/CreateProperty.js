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
  Form,
  CardTitle,
  Media,
  Input,
  CardSubtitle,
} from 'reactstrap';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';
import classnames from 'classnames';
const dropzoneStyle = {
  margin: '10px',
  width: '50px',
  height: '50px',
  border: '1px  dashed black',
  backgroundColor: 'lighBlue',
};

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
    this.toggleTab = this.toggleTab.bind(this);
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
                            onClick={() => {
                              this.toggleTab(2);
                            }}
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
                          <h4 className="card-title">Basic Information</h4>
                          <p className="card-title-desc">
                            Fill all information below
                          </p>

                          <Form>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>Type</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>Square Meter</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>State</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Area"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Zipcode"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Address"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Bedrooms</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Bathrooms</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Parking Space</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Address"
                                  id="example-text-input"
                                />
                              </div>
                            </div>

                            <div className="form-group col-md-6">
                              <label>Upload Property Documents</label>
                              <select className="form-control">
                                <option>Letter of Allocation</option>
                                <option>Large select</option>
                                <option>Small select</option>
                              </select>
                              <div className="d-flex">
                                <div
                                  style={dropzoneStyle}
                                  className=" d-flex align-items-center justify-content-center"
                                >
                                  <i className=" text-muted ri-upload-cloud-2-line"></i>
                                </div>
                                <div
                                  className=" d-flex align-items-center justify-content-center"
                                  style={dropzoneStyle}
                                >
                                  <i className="  text-muted ri-add-circle-fill"></i>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Row>
                                <Col xs={12}>
                                  <Card>
                                    <CardBody>
                                      <CardTitle>
                                        Add at least 1 photo for this category
                                      </CardTitle>
                                      <CardSubtitle className="mb-1">
                                        {' '}
                                        First picture - is the title picture.
                                        You can change the order of photos just
                                        grab your photo and drag
                                      </CardSubtitle>
                                      <Form className="d-flex ml-2">
                                        <div
                                          style={dropzoneStyle}
                                          className="border border-info d-flex align-items-center justify-content-center "
                                        >
                                          <i className=" text-muted ri-camera-switch-line"></i>
                                        </div>
                                        <div
                                          className="border border-info d-flex align-items-center justify-content-center"
                                          style={dropzoneStyle}
                                        >
                                          <i className="  text-muted ri-camera-switch-line"></i>
                                        </div>
                                        <div
                                          className="border border-info d-flex align-items-center justify-content-center"
                                          style={dropzoneStyle}
                                        >
                                          <i className="  text-muted ri-camera-switch-line"></i>
                                        </div>
                                        <div
                                          className="border border-info d-flex align-items-center justify-content-center"
                                          style={dropzoneStyle}
                                        >
                                          <i className="  text-muted ri-camera-switch-line"></i>
                                        </div>
                                      </Form>
                                    </CardBody>
                                  </Card>
                                </Col>
                              </Row>

                              <div>
                                <p className="d-flex ">
                                  <span className="text-success">
                                    <i className="  display-6 text-muted ri-add-circle-fill m-1"></i>
                                  </span>
                                  <span className="text-success">
                                    Add Agent
                                  </span>
                                </p>
                                <div className="form-group col-md-6">
                                  <select className="custom-select">
                                    <option defaultValue>Select Agent</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>

                                <Card>
                                  <Media className=" ml-5 mb-4">
                                    <img
                                      className="avatar-sm mr-3 rounded-circle"
                                      src={avatar6}
                                      alt="Nazox"
                                    />
                                    <Media body>
                                      <h5 className="mt-0 font-size-14">
                                        Robert Williams
                                      </h5>
                                      robert@gmail.com
                                    </Media>
                                  </Media>
                                  <Media className="ml-5 mb-4">
                                    <img
                                      className="avatar-sm mr-3 rounded-circle"
                                      src={avatar6}
                                      alt="Nazox"
                                    />
                                    <Media body>
                                      <h5 className="mt-0 font-size-14">
                                        Robert Williams
                                      </h5>
                                      robert@gmail.com
                                    </Media>
                                  </Media>
                                </Card>
                              </div>
                              <p className="d-flex ">
                                <span className="text-success">
                                  <i className="  display-6 text-muted ri-add-circle-fill m-1"></i>
                                </span>
                                <span className="text-success">
                                  Add Account to receive payment
                                </span>
                              </p>
                              <div className="form-group col-md-6 mb-5">
                                <select className="custom-select">
                                  <option defaultValue>Select Account</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="mx-auto" style={{ width: 200 }}>
                                <button
                                  type="button"
                                  className="btn btn-success w-lg "
                                  onClick={() => {
                                    this.toggleTab(this.state.activeTab + 1);
                                  }}
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <h4 className="card-title">Product Images</h4>
                          <Form>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>Type</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>Square Meter</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="form-control">
                                  <option>State</option>
                                  <option>Large select</option>
                                  <option>Small select</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Area"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Zipcode"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Address"
                                  id="example-text-input"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Bedrooms</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Bathrooms</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <select className="custom-select">
                                  <option defaultValue>Parking Space</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <Input
                                  className="form-control"
                                  type="text"
                                  defaultValue="Address"
                                  id="example-text-input"
                                />
                              </div>

                              <div className="mx-auto" style={{ width: 200 }}>
                                <button
                                  type="button"
                                  className="btn btn-success w-lg "
                                  onClick={() => {
                                    this.props.SetCreateProperty(false);
                                  }}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </Form>
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

export default CreateProperty;
