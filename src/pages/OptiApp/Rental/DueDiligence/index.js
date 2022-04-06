import React, { useState } from 'react';
import {
  Col,
  Button,
  Card,
  CardBody,
  Row,
  Alert,
  Form,
  Input,
  FormGroup,
  Label, } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DiligenceRecommendation } from '../../../../store/actions';

const DueDiligenceForm = ({tenantId}) => {

const dispatch = useDispatch();

console.log(tenantId)
const handleSubmit = (e, values) => {
    e.preventDefault();
    const formData = {
      ...values,
        "annualIncome": values.annualIncome,
        "companyName": values.companyName,
        "employmentStatus": values.employmentStatus,
        "jobTitle": values.jobTitle,
        "workAddress": values.workAddress 
    }

    console.log(values)

    dispatch(DiligenceRecommendation(tenantId, formData)) 
}

const {diligence} = useSelector((state) => state.PreviewReducer)

  return (
    <div className="page-content">
      <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
        <Card>
          <CardBody>
            <Row className="mb-4">
              <Col xl={12} className="header-box">
                <Row>
                  <Col xl={12}>
                    <h4>Company Name</h4>
                    <AvField
                      name="companyName"
                      // value="admin@themesbrand.com"
                      className="form-control bg-light"
                      placeholder="Company name"
                      type="text"
                      required
                    />
                  </Col>
               </Row>
               <Row>
                  <Col xl={12}>
                  <h4>Work Address</h4>
                    <AvField
                      name="workAddress"
                      // value="admin@themesbrand.com"
                      className="form-control bg-light"
                      placeholder="work address"
                      type="text"
                      required
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            {diligence && diligence?.message && (
                <Alert color='success' className='text-center'>
                  {diligence?.message}
                </Alert>
              )}
            <Row className="my-4">
              <Col xl={12} className="header-box">
                
                  <Row>
                    <Col xl={12}>
                    <h4>Employment Status</h4>
                      <AvField
                        name="employmentStatus"
                        className="form-control bg-light"
                        placeholder="Employment Status"
                        type="select"
                        required>
                          <option value='unemployed'>unemployed</option>
                          <option value='employed'>employed</option>
                        </AvField>
                      
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                    <h4>Job Title</h4>
                      <AvField
                        name="jobTitle"
                        className="form-control bg-light"
                        placeholder="JOB Title"
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                    <h4>Annual Income</h4>
                      <AvField
                        name="annualIncome"
                        className="form-control bg-light"
                        placeholder="Annual Income"
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
                        type="submit"
                      >
                        Done
                      </Button>
                    </Col>
                  </Row>
                
              </Col>
            </Row>
          </CardBody>
        </Card>
      </AvForm>
    </div>
  );
};

export default withRouter(DueDiligenceForm);
