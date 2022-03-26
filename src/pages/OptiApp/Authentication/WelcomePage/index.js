import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container } from 'reactstrap';

import WelcomeLandlord from './WelcomeLandlord';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../../../store/actions';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';
import RealtorLogo from '../../../../assets/images/Realtor1.svg';
import LandlordLogo from '../../../../assets/images/Landlord.svg';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clickHandler = () => {
    this.setState({ isClicked: true });
  };

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
    if (this.state.isClicked) {
      return <WelcomeLandlord />;
    }

    console.log(this.props.login);

    return (
      <React.Fragment>
        <div>
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
                          <Button color="success" className="mx-2">
                            Log in
                          </Button>
                        </Link>
                        <Link to="register">
                          <Button color="light">Sign up</Button>
                        </Link>
                      </div>
                    </div>
                    <Row className="justify-content-center">
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

                          {/* {this.props.loginError && this.props.loginError ? (
                            <Alert color="danger">
                              {this.props.loginError}
                            </Alert>
                          ) : null} */}

                          <div className="p-2 mt-5">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
                              <div className="signupOptions d-flex justify-content-center">
                                <div className="agentLink d-flex flex-column mr-4">
                                  <Link to="/register">
                                    <img src={RealtorLogo} alt="Agent" />
                                  </Link>
                                  <h6 className="optionTag d-flex justify-content-center">
                                    Agent/PM
                                  </h6>
                                </div>
                                <div className="landlordLink d-flex flex-column">
                                  <Link to="#" onClick={this.clickHandler}>
                                    <img src={LandlordLogo} alt="Landlord" />
                                  </Link>
                                  <h6 className="optionTag d-flex justify-content-center">
                                    Landlord
                                  </h6>
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
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const login = state.Account;
  return { login };
};

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Welcome));
