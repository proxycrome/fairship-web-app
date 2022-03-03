import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  CardText,
  Row,
  Container,
  CardSubtitle,
  Label,
  Input,
  Button,
} from 'reactstrap';

export default function Listing({BackHome}) {
  const dropzoneStyle = {
    margin: '10px',
    width: '50px',
    height: '50px',
    border: '1px  dashed black',
    backgroundColor: 'lighBlue',
    //  textAlign:"center"
  };
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Card>
            <CardBody className="mx-4">
              <div className="">
                <h6>Upload a walkthrough video</h6>
                <div>
                  <div
                    style={dropzoneStyle}
                    className=" d-flex align-items-center justify-content-center opacity-50"
                  >
                    <i className=" text-muted ri-upload-cloud-2-line"></i>
                  </div>
                  <small>MP$ format only not more than 5mb</small>
                </div>
              </div>
              <div className="form-check mb-3">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <Label className="form-check-label" htmlFor="defaultCheck1">
                  Do you want a 3D walk around photography and video service by
                  Fairship
                </Label>
              </div>
              <div>
                <Button
                  type="button"
                  color="success"
                  className="w-lg waves-effect waves-light"
                >
                  Make Payment
                </Button>
              </div>

              <div className="mt-5 ">
                <CardTitle>Rant Package</CardTitle>
                <CardSubtitle className="mb-2">
                  {' '}
                  Purchase Higher Listing Rant and Sell Faster
                </CardSubtitle>
                <Row
                >
                  <Col sm={6} md="3">
                    <Card className="d-flex align-items-center justify-content-center p-5 shadow-md ">
                      <CardBody>
                        <CardTitle className="mt-0">N50,000</CardTitle>
                        <CardText>
                          <h6>0 Days</h6>
                        </CardText>
                        <h6 className="text-primary">Regular</h6>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md="3">
                    <Card className="d-flex align-items-center justify-content-center p-5 shadow-md">
                      <CardBody>
                        <CardTitle className="mt-0">N50,000</CardTitle>
                        <CardText>
                          <h6>120 days</h6>
                        </CardText>
                        <h6 className="text-danger">Premium</h6>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6} md="3">
                    <Card className="d-flex align-items-center justify-content-center p-5 shadow-md ">
                      <CardBody>
                        <CardTitle className="mt-0">N50,000</CardTitle>
                        <CardText>
                          <h6>60 Days</h6>
                        </CardText>
                        <h6 className="text-success">Featured</h6>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="btn-success m-5 w-25" onClick={BackHome}>List</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
}
