import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  CardText,
  Row,
  Container,
  CardImg,
  Table,
  Button,
} from "reactstrap";
import img2 from "../../../assets/images/small/img-3.jpg";


export default function PropertyCard() {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Col lg={12}>
            <Card className="p-5">
              <div className="d-flex  justify-content-between">
                <div className="d-flex mr-2 align-items-center">
                  <i className=" mr-2 text-muted ri-arrow-left-line"></i>
                  <small>Back</small>
                </div>
                <div className="ms-auto">
                  <Button className="btn-success w-100 mb-5">Task</Button>
                  <p>
                    From <span className="text-primary">N450,000</span>
                  </p>
                </div>
              </div>
              <Row className="no-gutters align-items-center">
                <Col md={4}>
                  <CardImg className="img-fluid" src={img2} alt="Skote" />
                </Col>
                <Col md={8}>
                  <CardBody>
                    <CardTitle>
                      <b>Property</b>
                    </CardTitle>
                    <CardText>
                      Cosy studio in the heart of lagos <br />
                      No 4, lorem road Lagos
                    </CardText>
                    <i className=" mr-2 text-muted ri-building-2-line"></i>2
                    Bedrooms, 2 Bathrooms
                    <CardText>
                      <p>
                        <b>Status</b> <br /> Listed
                      </p>
                    </CardText>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
          <div>
            <Card>
              <CardBody>
                <h4 className="card-title">Selling Information</h4>

                <div className="table-responsive">
                  <Table borderless className="mb-0">
                    <thead>
                      <tr>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>N1,000,000</td>
                        <td>Not Sold</td>
                        <td>Not Sold</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <h6>Documents</h6>
            <div className='d-flex justify-content-sm-between'>
              <div className="w-25">
                <Card className="p-2 ">
                  <div className="d-flex mr-2 align-items-center">
                    <i className=" mr-2 ri-sim-card-2-fill"></i>
                    <small>Buying Application</small>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="p-2 ">
                  <div className="d-flex mr-2 align-items-center">
                    <i className=" mr-2 ri-sim-card-2-fill"></i>
                    <small>Certificate of occupancy</small>
                  </div>
                </Card>
              </div>
              <div className="w-25">
                <Card className="p-2 ">
                  <div className="d-flex mr-2 align-items-center">
                    <i className=" mr-2 ri-sim-card-2-fill"></i>
                    <small>Letter of allocation</small>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}



