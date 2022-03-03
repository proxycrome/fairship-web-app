import React, { useState } from 'react';
import { Row, Col, Button, FormGroup, Input, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import MaintenanceRequest from '.';

const DueDiligenceForm = ({ GoHome }) => {
  return (
    <div className="page-content">
      <AvForm className="form-horizontal">
        <Card>
          <CardBody>
            <Row className="mb-4">
              <Col xl={12} className="header-box">
                <span className="ml-2">New DueDiligenceForm Request</span>
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
                        name="address"
                        className="form-control bg-light"
                        placeholder="address"
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
                    <Col xl={3} className="text-center">
                      <Button
                        color="success"
                        className="waves-effect pr-5 pl-5 w-lg"
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

export default DueDiligenceForm;
