import React, { Component } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../../../../src/store/actions';

// import images
import logodark from '../../../../assets/images/FairshipLogo.svg';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'admin@themesdesign.in', password: '123456' };
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
          <Container fluid className="p-0">
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-bg">
                  <div className="bg-overlay"></div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-start min-vh-100">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link to="/" className="logo">
                        <img src={logodark} height="100" alt="logo" />
                      </Link>
                    </div>
                    <Row className="justify-content-center  mt-5">
                      <Col lg={9}>
                        <div>
                          <div className="text-center">
                            <h3 className=" mt-4 font-weight-bold">
                              Forgot Password?
                            </h3>
                            <p className="text-muted">
                              Don't worry we can help you out! if you still remember your mail address you caan quickly reset your password. just input that information inn the fields below and click on the button. This will send you to a new email that will link you to the password change website.
                            </p>
                          </div>

                          <div className="p-2 mt-5">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  name="confirm_password"
                                  // value={this.state.password}
                                  type="email"
                                  className="form-ctrl bg-light border-0"
                                  id="email"
                                  placeholder="Email Address"
                                />
                              </FormGroup>

                              <div className="mt-4 text-center">
                                <Button
                                  color="success"
                                  className="w-100 waves-effect waves-light"
                                  type="submit"
                                >
                                  Request Password Change
                                </Button>
                              </div>

                              <div className="mt-4 text-center">
                                <p className="text-muted">
                                  Do you need you help?
                                </p>
                                <Link to="#"> Customer Support </Link>
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
  const { loginError } = state.Login;
  return { loginError };
};

export default withRouter(
  connect(mapStatetoProps, { checkLogin, apiError })(ChangePassword)
);
