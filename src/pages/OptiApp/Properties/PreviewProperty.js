import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  Table,
  Button,
} from 'reactstrap';
import img2 from '../../../assets/images/small/img-3.jpg';

export default function PropertyCard({ BackToHome }) {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Card>
            <CardBody>
              <div className="mb-2">
                <div className="float-right">
                  <Button className="btn-success px-5">Task</Button>
                </div>
                <span
                  className="mt-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => BackToHome(false)}
                >
                  <span>
                    <i className="mr-2 mt-2 text-muted ri-arrow-left-line"></i>
                  </span>
                  <small>Back</small>
                </span>
              </div>
              <p className="auto">
                From <span className="text-primary">N450,000</span>
              </p>
              <Row>
                <Col md="auto">
                  <img className="avatar-lg rounded" src={img2} alt="Skote" />
                </Col>
                <Col>
                  <div>
                    <h4>
                      <b>Property</b>
                    </h4>
                    <p>
                      Cosy studio in the heart of lagos <br />
                      No 4, lorem road Lagos
                    </p>
                    <i className=" mr-2 text-muted ri-building-2-line"></i>2
                    Bedrooms, 2 Bathrooms
                    <div>
                      <p>
                        <b>Status</b> <br /> Listed
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>{' '}
          </Card>
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
            <div className="d-flex justify-content-sm-between">
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
