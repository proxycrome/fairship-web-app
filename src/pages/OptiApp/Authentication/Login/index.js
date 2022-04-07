import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

import Switch from 'react-switch';

// actions
import { checkLogin, apiError } from '../../../../../src/store/actions';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLogin: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    const formData = { ...values };
    formData.platformType = 'WEB';
    this.props.checkLogin(formData, this.props.history);
  }

  componentDidMount() {
    this.props.apiError('');
    document.body.classList.add('auth-body-bg');
  }

  componentWillUnmount() {
    document.body.classList.remove('auth-body-bg');
  }

  render() {
    console.log(this.props.user);
    return (
      <React.Fragment>
        <div>
          <Container fluid className="p-0">
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-bg text-center">
                  <div className="bg-overlay"></div>
                  <div className="overlay-text">
                    <h1>Welcome Back</h1>
                    <p>Log into your account</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-start min-vh-100">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to="/" className="logo">
                        <img src={logodark} height="100" alt="logo" />
                      </Link>
                      <div>
                        <Link to="/login">
                          <Button color="success" className="mr-2">
                            Log in
                          </Button>
                        </Link>
                        <Link to="/welcome_page">
                          <Button color="light">Sign up</Button>
                        </Link>
                      </div>
                    </div>
                    <Row className="justify-content-center">
                      <Col lg={9}>
                        <div>
                          <div className="text-center">
                            <h3 className=" mt-4 font-weight-bold">Log in</h3>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <div className="p-2 mt-5">
                            {this.props.loginError && this.props.loginError ? (
                              <Alert color="danger">
                                {this.props.loginError}
                              </Alert>
                            ) : null}
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  name="email"
                                  value={this.state.email}
                                  type="email"
                                  className="form-ctrl"
                                  id="email"
                                  validate={{ email: true, required: true }}
                                  placeholder="Email"
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  name="password"
                                  value={this.state.password}
                                  type="password"
                                  className="form-ctrl"
                                  id="userpassword"
                                  placeholder="Password"
                                />
                              </FormGroup>

                              <div className="d-flex align-items-center justify-content-between">
                                <div className="customCtrl">
                                  <label className="d-flex align-items-center">
                                    <Switch
                                      className="mr-2 mt-1"
                                      onColor="#4db783"
                                      onChange={() =>
                                        this.setState({
                                          checkLogin: !this.state.checkLogin,
                                        })
                                      }
                                      checked={this.state.checkLogin}
                                      uncheckedIcon={false}
                                      width={40}
                                      height={18}
                                    />
                                    <span>Keep me logged in</span>
                                  </label>
                                </div>
                                <Link to="/forget_password">
                                  Forgot password?
                                </Link>
                              </div>

                              <div className="mt-4 text-center">
                                <Button
                                  color="success"
                                  className="w-100 waves-effect waves-light"
                                  type="submit"
                                  disable={this.props.loading}
                                >
                                  {this.props.loading ? 'Loading...' : 'Log in'}
                                </Button>
                              </div>

                              <div className="mt-4 text-center"></div>
                            </AvForm>
                          </div>
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
  const { loginError, user, loading } = state.Account;
  return { loginError, user, loading };
};

export default withRouter(
  connect(mapStatetoProps, { checkLogin, apiError })(Login)
);
