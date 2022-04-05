import React, { useState } from 'react';
import {
  Col,
  Button,
  Card,
  CardBody,
  Row,
  Form,
  Input,
  FormGroup,
  Label, } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const DueDiligenceForm = ({id}) => {

const dispatch = useDispatch();

console.log(id)
const due = (e) => {
    e.preventDefault();

}

  return (
    <div className="page-content">
      <AvForm className="form-horizontal">
        <Card>
          <CardBody>
            <Row className="mb-4">
              <Col xl={12} className="header-box">
                <h4> Reference Details </h4>
                <Row>
                  <Col xl={12}>
                    <AvField
                      name="name"
                      // value="admin@themesbrand.com"
                      className="form-control bg-light"
                      placeholder="name"
                      type="text"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <AvField
                      name="address"
                      // value="admin@themesbrand.com"
                      className="form-control bg-light"
                      placeholder="address"
                      type="text"
                      required
                    />
                  </Col>
                  <Col xl={6}>
                    <AvField
                      name="phoneNo"
                      // value="admin@themesbrand.com"
                      className="form-control bg-light"
                      placeholder="Phone number"
                      type="text"
                      required
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="my-4">
              <Col xl={12} className="header-box">
                <AvForm className="form-horizontal">
                  <h4> Next of Kin </h4>
                  <Row>
                    <Col xl={12}>
                      <AvField
                        name="name"
                        className="form-control bg-light"
                        placeholder="name"
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <AvField
                        name="email"
                        className="form-control bg-light"
                        placeholder="Email"
                        type="text"
                        required
                      />
                    </Col>
                    <Col xl={6}>
                      <AvField
                        name="phoneNo"
                        className="form-control bg-light"
                        placeholder="Phone number"
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <AvField
                        name="address"
                        className="form-control bg-light"
                        placeholder="Address"
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} className="text-center">
                      <Button
                        color="success"
                        className="waves-effect pr-5 pl-5 w-lg"
                        onClick={due}
                      >
                        Done
                      </Button>
                    </Col>
                  </Row>
                </AvForm>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </AvForm>
    </div>
  );
};

export default withRouter(DueDiligenceForm);
