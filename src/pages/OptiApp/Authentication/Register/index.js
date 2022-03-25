import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../../../store/actions';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      country: '',
      address: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    this.props.checkLogin(values, this.props.history);
  }

  componentDidMount() {
    this.props.apiError('');
    document.body.classList.add('auth-body-bg');
  }

  componentWillUnmount() {
    document.body.classList.remove('auth-body-bg');
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-bg text-center">
                  <div className="bg-overlay"></div>
                  <div className="overlay-text">
                    <h1 style={{ left: '179px' }}>Welcome!</h1>
                    <p>Create an account with us</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-page-content  d-flex mt-4 min-vh-100">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to="/" className="logo">
                        <img src={logodark} height="100" alt="logo" />
                      </Link>
                      <div>
                        <Link to="/login">
                          <Button color="light" className="mr-2">
                            Log in
                          </Button>
                        </Link>
                        <Link to="/register">
                          <Button color="success" className="mr-4">
                            Sign up
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <Row className="justify-content-center">
                      <Col lg={9}>
                        <div>
                          <div className="text-center">
                            <h3 className="mt-2 font-weight-bold">
                              Create Account
                            </h3>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          {this.props.loginError && this.props.loginError ? (
                            <Alert color="danger">
                              {this.props.loginError}
                            </Alert>
                          ) : null}

                          <div className="p-2 mt-1">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="name"
                                  value={this.state.name}
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="name"
                                  placeholder="Company Name"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="phone"
                                  value={this.state.phone}
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="phone"
                                  placeholder="Contact Phone No"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  type="select"
                                  name="country"
                                  className="form-ctrl bg-light border border-0"
                                >
                                  <option>Country</option>
                                  <option>Nigeria</option>
                                  <option>Ghana</option>
                                  <option>Cameroun</option>
                                  <option>Tanzania</option>
                                  <option>South Africa</option>
                                </AvField>
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="address"
                                  value={this.state.address}
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="address"
                                  placeholder="Address"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="email"
                                  value={this.state.email}
                                  type="email"
                                  className="form-ctrl bg-light border border-0"
                                  id="email"
                                  validate={{ email: true, required: true }}
                                  placeholder="Email"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="password"
                                  value={this.state.password}
                                  type="password"
                                  className="form-ctrl bg-light border border-0"
                                  id="userpassword"
                                  placeholder="Password"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="companyName"
                                  value={this.state.address}
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="companyName"
                                  placeholder="Company Name"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="companyAddress"
                                  value={this.state.address}
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="companyAddress"
                                  placeholder="Company Address"
                                />
                              </FormGroup>

                              <div className="mt-4 text-center">
                                <Button
                                  color="success"
                                  className="w-100 waves-effect waves-light"
                                  type="submit"
                                >
                                  Sign up
                                </Button>
                              </div>
                            </AvForm>
                          </div>
                        </div>
                        <div className="terms">
                          <p>
                            By signing up, I agree to the{' '}
                            <Link to="#">Primary policy</Link> and{' '}
                            <Link to="#">Terms of Service</Link>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { loginError } = state.Account;
  return { loginError };
};

export default withRouter(
  connect(mapStatetoProps, { checkLogin, apiError })(Register)
);
