import React from 'react';
import {
  Container,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Form,
} from 'reactstrap';

const RecordTransaction = ({ closePage }) => {
  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <span onClick={closePage} className="mx-2 font-size-14 mb-2">
            <span>
              <i
                className="fas fa-arrow-left
 font-size-14 mr-2"
              />
            </span>
            Back
          </span>
          <Card className="mt-2">
            <CardBody>
              <h5>
                <b>Add Account</b>
              </h5>
              <Form className="mx-4 mt-2">
                <FormGroup row>
                  <Col md={6}>
                    <select className="form-control bg-light border border-0">
                      <option>Account</option>
                      <option>Large select</option>
                      <option>Small select</option>
                    </select>
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="date"
                      placeholder="payment Date"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Amount Paid"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Balance"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Properties"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="number"
                      placeholder="Tenant"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Unit"
                    />
                  </Col>
                  <Col md={6}>
                    <select className="form-control bg-light border border-0">
                      <option>Payment Type</option>
                      <option>Large select</option>
                      <option>Small select</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={6}>
                    <select className="form-control bg-light border border-0">
                      <option>Payment Category</option>
                      <option>Large select</option>
                      <option>Small select</option>
                    </select>
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="number"
                      placeholder="Debit/Credit"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={6}>
                    <textarea
                      className="form-control bg-light"
                      id="description"
                      rows="5"
                    ></textarea>
                  </Col>
                  <Col md={6}>
                    <textarea
                      className="form-control bg-light"
                      id="comment"
                      rows="5"
                    ></textarea>
                  </Col>
                </FormGroup>

                <div className="text-center">
                  <button className="btn btn-success px-5" onClick={closePage}>Save</button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default RecordTransaction;
