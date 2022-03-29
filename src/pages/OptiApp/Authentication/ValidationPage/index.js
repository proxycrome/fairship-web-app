import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import {
  checkLogin,
  apiError,
  activateAccount,
} from '../../../../store/actions';
import queryString from 'query-string';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    console.log(values);
    this.props.activateAccount(values, this.props.history);
  }

  componentDidMount() {
    const params = this.props.match.params.id;
    this.props.apiError('');
    this.setState({ ...this.state, token: params });
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
                    <p>
                      Enter Token {this.state.token} And phone No to Validate
                      your Account
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-page-content  d-flex p-3 mt-4 min-vh-100">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between  mb-5">
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
                    <Row className="justify-content-center mt-4 align-items-center">
                      <Col lg={9}>
                        <div>
                          <div className="text-center">
                            <h3 className="mt-2 font-weight-bold">
                              Welcome Back!
                            </h3>
                            <p className="text-muted">
                              Enter Token And phone No to Validate your Account
                            </p>
                          </div>

                          {this.props.message && (
                            <Alert color="success">{this.props.message}</Alert>
                          )}

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
                                  name="token"
                                  type="text"
                                  value={this.state.token}
                                  className="form-ctrl bg-light border border-0"
                                  id="token"
                                  placeholder="Enter Token"
                                  required
                                />
                              </FormGroup>

                              <FormGroup className="form-group-custom mb-3">
                                <AvField
                                  name="phone"
                                  type="text"
                                  className="form-ctrl bg-light border border-0"
                                  id="phone"
                                  placeholder="Enter Phone No"
                                  required
                                />
                              </FormGroup>
                              <div className="mt-4 text-center">
                                <Button
                                  color="success"
                                  className="w-100 waves-effect waves-light"
                                  type="submit"
                                >
                                  Activate account
                                </Button>
                              </div>
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
  const { loginError, message } = state.Account;
  return { loginError, message };
};

export default withRouter(
  connect(mapStatetoProps, { activateAccount, apiError })(Validation)
);
