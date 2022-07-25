import React, { useEffect, useState } from 'react';

import { Row, Col, Button, Alert, Container, FormGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { postNewPassword, clearMessages } from '../../../store/actions';

// import images
// import logodark from '../../../assets/images/FairshipLogo.svg';

const ChangePassword = ({successMessage, postNewPassword, clearMessages}) => {
  const [message, setMessage] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event, values) => {
    if(values.newPassword !== values.confirmPassword){
      setMessage("Passwords do not match");
      setTimeout(() => {
        setMessage(null)
      }, 3000)  
      return;
    }
    const data = {...values, newPassword, confirmPassword: cPassword}
    const { confirmPassword, ...rest } = data;
    const formData = { ...rest };

    postNewPassword(formData);
    setNewPassword('');
    setCPassword('');
  }

  useEffect(() => {
    if(successMessage){
      setTimeout(() => {
        history.push("/dashboard");
      }, 3000)
    }
  }, [history, successMessage])

  useEffect(() => {
    clearMessages();
  }, [clearMessages])

  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="no-gutters">
            <Col lg={12}>
              
              <div className="authentication-page-content p-4 d-flex align-items-start min-vh-100">
                <div className="w-100">
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
                        {message && (
                          <Alert color="danger" className="text-center">
                            {message}
                          </Alert>
                        )}
                        {successMessage && (
                          <Alert color="success" className="text-center">
                            {successMessage.message}
                          </Alert>
                        )}
                        <div className="p-2 mt-5">
                          <AvForm
                            className="form-horizontal"
                            onValidSubmit={handleSubmit}
                          >
                            <FormGroup className="form-group-custom mb-4">
                              <AvField
                                name="newPassword"
                                value={newPassword}
                                type="text"
                                className="form-ctrl bg-light border-0"
                                id="new_password"
                                placeholder="New password"
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                            </FormGroup>
                            <FormGroup className="form-group-custom mb-4">
                              <AvField
                                name="confirmPassword"
                                value={cPassword}
                                type="text"
                                className="form-ctrl bg-light border-0"
                                id="confirm_password"
                                placeholder="Confirm password"
                                onChange={(e) => setCPassword(e.target.value)}
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

const mapStatetoProps = (state) => {
  const { successMessage } = state.Settings;
  return { successMessage };
};

export default withRouter(
  connect(mapStatetoProps, { postNewPassword, clearMessages })(ChangePassword)
);
