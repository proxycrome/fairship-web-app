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

const CreateAgent = ({ BackToHome }) => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <span onClick={BackToHome} className="mx-2 font-size-14 mb-2">
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
                <b>Add Agent</b>
              </h5>
              <Form className="mx-4 mt-2">
                <FormGroup row>
                  <Col md={12}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Enter Email"
                    />
                  </Col>
                </FormGroup>

                <div className="text-center">
                  <button className="btn btn-success px-5" onClick={BackToHome}>
                    Add
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateAgent;
