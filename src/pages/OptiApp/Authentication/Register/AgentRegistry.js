import React, { useEffect } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import {
  apiError,
  registerUser,
  registerUserFailed,
} from '../../../../store/actions';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

const Register = ({
  registerUser,
  registrationError,
  agentType,
  message,
  history,
  loading,
}) => {
  const handleSubmit = (event, values) => {
    const formData = { ...values };
    const agentDetails = {
      type: agentType,
      companyName: values.serviceProviderDetails?.companyName,
    };
    formData.agentDetails = agentDetails;
    formData.role = 'AGENT';
    registerUser(formData, history);
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        registerUserFailed('');
        history.push('/activation');
      }, [2000]);
    }
  }, [message]);

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
                        <Button color="success" className="mr-4">
                          Log in
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

                        {registrationError && registrationError ? (
                          <Alert color="danger" className="text-center">
                            {registrationError}
                          </Alert>
                        ) : null}

                        {message && (
                          <Alert color="success" className="text-center">
                            {message}
                          </Alert>
                        )}

                        <div className="p-2 mt-1">
                          <AvForm
                            className="form-horizontal"
                            onValidSubmit={handleSubmit}
                          >
                            <Row>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="serviceProviderDetails.companyName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="companyName"
                                    placeholder="Company Name"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="firstName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="name"
                                    placeholder="Enter FirstName"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="lastName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="name"
                                    placeholder="Enter Last Name"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="phone"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="phone"
                                    placeholder="Contact Phone No"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="address.houseNoAddress"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="houseNoAddress"
                                    placeholder="Address"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="address.state"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="state"
                                    placeholder="State"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    type="select"
                                    name="address.country"
                                    required
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
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="email"
                                    type="email"
                                    className="form-ctrl bg-light border border-0"
                                    id="email"
                                    required
                                    placeholder="Email"
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="password"
                                    type="password"
                                    className="form-ctrl bg-light border border-0"
                                    id="password"
                                    placeholder="Password"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <div className="mt-4 text-center">
                              <Button
                                color="success"
                                className="w-100 waves-effect waves-light"
                                type="submit"
                              >
                                {loading ? 'Loading...' : 'Sign Up'}
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
};

const mapStatetoProps = (state) => {
  const { registrationError, message, loading } = state.Account;
  return { registrationError, message, loading };
};

export default withRouter(
  connect(mapStatetoProps, { registerUser, apiError, registerUserFailed })(
    Register
  )
);
