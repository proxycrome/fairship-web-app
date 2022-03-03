import React, { useState } from 'react';
import { Row, Col, Button, FormGroup, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import MaintenanceRequest from '.';

const Maintenance = ({ GoHome }) => {

  return (
    <div className="page-content">
      <Row className="mb-4">
        <Col xl={10} className="header-box">
          <Button color="link" outline onClick={GoHome}>
            <i className="ri-arrow-left-line"></i>
          </Button>
          <span className="ml-2">New Maintenance Request</span>
          <AvForm className="form-horizontal">
            <Row>
              <Col xl={6}>
                <FormGroup className="form-group-custom m-4">
                  <AvField type="select" name="property" className="form-ctrl">
                    <option>Property</option>
                    <option>Cosy Studio in the heart of lagos</option>
                    <option>Cosy Studio in the heart of lagos</option>
                    <option>Cosy Studio in the heart of lagos</option>
                    <option>Cosy Studio in the heart of lagos</option>
                    <option>Cosy Studio in the heart of lagos</option>
                  </AvField>
                </FormGroup>

                <FormGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="problemType"
                    className="form-ctrl"
                  >
                    <option>Problem Type</option>
                    <option>Door Repair</option>
                    <option>Fix Drainage</option>
                  </AvField>
                </FormGroup>
                <FormGroup className="form-group-custom m-4">
                  <Input
                    type="textarea"
                    id="comments"
                    placeholder="Description"
                    rows="3"
                  />
                </FormGroup>
              </Col>
              <Col xl={6}>
                <FormGroup className="form-group-custom m-4">
                  <AvField type="select" name="unit" className="form-ctrl">
                    <option>Unit</option>
                    <option>0001</option>
                    <option>0002</option>
                    <option>0003</option>
                    <option>0004</option>
                    <option>0005</option>
                  </AvField>
                </FormGroup>

                <FormGroup className="form-group-custom m-4">
                  <AvField type="select" name="unit" className="form-ctrl">
                    <option>Date</option>
                    <option>3rd Jul 2020</option>
                    <option>4th Jul 2020</option>
                    <option>5th Jul 2020</option>
                    <option>6th Jul 2020</option>
                    <option>7th Jul 2020</option>
                  </AvField>
                </FormGroup>

                <FormGroup className="form-group-custom m-4">
                  <Input type="text" name="ammount" placeholder="Amount" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xl={11} className="mx-auto mb-4 mt-4">
                <div>
                  <small className="d-block">
                    Add at least 1 photo for this category
                  </small>
                  <small className="d-block">
                    First picture - is the title picture. You can change the
                    order of photos: Just grab your photo and drag
                  </small>
                </div>
                <div className="d-flex">
                  <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                    <i className="ri-camera-line font-size-24"></i>
                  </div>
                  <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                    <i className="ri-camera-line font-size-24"></i>
                  </div>
                  <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                    <i className="ri-camera-line font-size-24"></i>
                  </div>
                  <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                    <i className="ri-camera-line font-size-24"></i>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={3} className="mx-auto my-4">
                <Button color="success" className="waves-effect pr-5 pl-5 w-lg">
                  Send
                </Button>
              </Col>
            </Row>
          </AvForm>
        </Col>
      </Row>
    </div>
  );
};

export default Maintenance;
