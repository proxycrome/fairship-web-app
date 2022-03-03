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
                            <h3 className="mt-4 font-weight-bold">
                              Change Password
                            </h3>
                            <p className="text-muted">
                              Input Your new desired password in the input
                              fields below to create a new password. We strongly
                              advice you to store it safely
                            </p>
                          </div>

                          <div className="p-2 mt-5">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  name="new_password"
                                  // value={this.state.password}
                                  type="text"
                                  className="form-ctrl bg-light border-0"
                                  id="new_password"
                                  placeholder="New Password"
                                />
                              </FormGroup>
                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  name="confirm_password"
                                  // value={this.state.password}
                                  type="text"
                                  className="form-ctrl bg-light border-0"
                                  id="confirm_password"
                                  placeholder="confirm_password"
                                />
                              </FormGroup>

                              <div className="mt-4 text-center">
                                <Button
                                  color="success"
                                  className="w-100 waves-effect waves-light"
                                  type="submit"
                                >
                                  Change Password
                                </Button>
                              </div>

                              <div className="mt-4 text-center">
                                <p className="text-muted">Do you need you help?</p>
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
