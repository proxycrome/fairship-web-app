import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container } from 'reactstrap';

import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm } from 'availity-reactstrap-validation';
import LandLordRegistry from '../Register/index';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

class WelcomeLandlord extends Component {
  constructor(props) {
    super(props);
    this.state = { landlordType: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.landlordHandler = this.landlordHandler.bind(this);
  }

  landlordHandler(value) {
    this.setState({
      ...this.state,
      landlordType: value,
    });
  }

  handleSubmit(event, values) {
    console.log(this.props.landlordType)
    console.log(values)
    // this.props.checkLogin(values, this.props.history);
  }

  componentDidMount() {
    document.body.classList.add('auth-body-bg');
  }

  componentWillUnmount() {
    document.body.classList.remove('auth-body-bg');
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.landlordType === null ? (
            <Container fluid className="p-0">
              <Row className="no-gutters">
                <Col lg={6}>
                  <div className="authentication-bg">
                    <div className="bg-overlay"></div>
                    <div className="overlay-text">
                      <h1 style={{ left: '179px' }}>Welcome!</h1>
                      <p>Create an account with us</p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="authentication-page-content p-4 d-flex align-items-start vh-100">
                    <div className="w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <Link to="/" className="logo">
                          <img src={logodark} height="100" alt="logo" />
                        </Link>
                        <div>
                          <Link to="/login">
                            <Button color="success" className="mx-1">
                              Log in
                            </Button>
                          </Link>
                          <Link to="register">
                            <Button color="light">Sign up</Button>
                          </Link>
                        </div>
                      </div>
                      <Row className="justify-content-center mt-5">
                        <Col lg={9}>
                          <div>
                            <div className="text-center">
                              <h4 className="font-size-18 mt-4 font-weight-bold">
                                Sign Up
                              </h4>
                              <p className="text-muted">
                                I am creating an Account as...
                              </p>
                            </div>

                            {this.props.loginError && this.props.loginError ? (
                              <Alert color="danger">
                                {this.props.loginError}
                              </Alert>
                            ) : null}

                            <div className="p-2 mt-5">
                              <AvForm className="form-horizontal">
                                <div className="signupOptions d-flex flex-column justify-content-center align-items-center">
                                  <div className="mb-4">
                                    <Button
                                      onClick={() =>
                                        this.landlordHandler('INDIVIDUAL')
                                      }
                                      className="Individual border border-0"
                                      outline
                                      color="success"
                                    >
                                      <h5>Individual</h5>
                                    </Button>
                                  </div>
                                  <div>
                                    <Button
                                      onClick={() =>
                                        this.landlordHandler('PROPERTY_OWNER')
                                      }
                                      className="Company  border border-0"
                                      outline
                                      color="success"
                                    >
                                      <h5>Company</h5>
                                    </Button>
                                  </div>
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
          ) : (
            <LandLordRegistry handleSubmit={this.props.handleSubmit} landlordType={this.state.landlordType} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(WelcomeLandlord);
