import React, { useEffect } from "react";

import { Row, Col, Button, Alert, Container, FormGroup } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import {
  apiError,
  activateAccount,
  clearRegistryMessage,
} from "../../../../store/actions";

// import images
import logodark from "../../../../assets/images/FairshipLogo.svg";

const Validation = ({
  activationMessage,
  activationError,
  activateAccount,
  history,
  clearRegistryMessage,
}) => {

  const handleSubmit = (event, values) => {
    const formData = {
      ...values,
      phoneNumber: values.phoneNumber.startsWith("+234")
        ? values.phoneNumber.replace(/\+234/, "234")
        : values.phoneNumber.startsWith("0")
        ? values.phoneNumber.replace(/0/, "234")
        : values.phoneNumber,
    };
  
    activateAccount(formData);
  };

  useEffect(() => {
    clearRegistryMessage();
  }, []);

  useEffect(() => {
    if (activationMessage) {
      setTimeout(() => {
        history.push("/login");
      }, [2000]);
    }
  }, [activationMessage]);
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0" style={{ overflowX: "hidden" }}>
          <Row className="no-gutters">
            <Col lg={6}>
              <div className="authentication-bg text-center">
                <div className="bg-overlay"></div>
                <div className="overlay-text">
                  <h1 style={{ left: "179px" }}>Welcome!</h1>
                  <p>Enter Token And phone No to Validate your Account</p>
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

                        {activationMessage && (
                          <Alert color="success">{activationMessage}</Alert>
                        )}

                        {activationError && activationError ? (
                          <Alert color="danger">
                            {activationError.message}
                          </Alert>
                        ) : null}

                        <div className="p-2 mt-1">
                          <AvForm
                            className="form-horizontal"
                            onValidSubmit={handleSubmit}
                          >
                            <FormGroup className="form-group-custom mb-3">
                              <AvField
                                name="otp"
                                type="text"
                                className="form-ctrl bg-light border border-0"
                                id="token"
                                placeholder="Enter Token"
                                required
                              />
                            </FormGroup>

                            <FormGroup className="form-group-custom mb-3">
                              <AvField
                                name="phoneNumber"
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
};

const mapStatetoProps = (state) => {
  const { loginError, activationMessage, activationError } = state.Account;
  return { loginError, activationMessage, activationError };
};

export default withRouter(
  connect(mapStatetoProps, { activateAccount, apiError, clearRegistryMessage })(
    Validation
  )
);
