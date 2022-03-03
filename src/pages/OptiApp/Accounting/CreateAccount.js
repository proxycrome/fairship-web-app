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

const CreateAccount = ({ closePage }) => {
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
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Account Name"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="number"
                      placeholder="Account Number"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Bank"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Location"
                    />
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

export default CreateAccount;
