import React, { useEffect } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  CardImg,
  Table,
  Alert,
} from 'reactstrap';
import Loading from '../../../components/Common/Loading';

import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEachProperties } from '../../../store/actions';

const PropertyCard = ({
  fetchEachProperties,
  match,
  property,
  loading,
  propertiesError,
}) => {
  useEffect(() => {
    if (match.params.id) {
      fetchEachProperties(match.params.id);
    }
  }, []);
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <div className="mb-2 text-right">
            <Link to="/properties">
              <button className="btn btn-success btn-sm">
                <i className="fas fa-arrow-left mr-2" /> Back
              </button>
            </Link>
          </div>
          {propertiesError && (
            <Alert color="danger" className="text-center">
              {propertiesError}
            </Alert>
          )}
          {loading ? (
            <Loading />
          ) : (
            property !== null && (
              <>
                <Card>
                  <CardBody>
                    <Row>
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={property.indexImage}
                          alt={property.title}
                        />
                      </Col>
                      <Col md={8}>
                        <div className="ml-2">
                          <h4 className="card-title text-capitalize">
                            {' '}
                            {property.title}{' '}
                          </h4>
                          <p className="text-muted">
                            {' '}
                            {property.address.houseNoAddress}
                          </p>
                          <p>
                            <i className=" mr-2 text-success ri-building-2-line"></i>
                            Bus-stop:
                          </p>
                          <p>
                            <i className=" mr-2 text-success ri-building-2-line"></i>
                            Parking:
                          </p>
                          <p>
                            <i className=" mr-2 text-success ri-building-2-line"></i>
                            Transit:
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-4">
                      <h4>Description</h4>
                      <p>Property Description here</p>
                    </div>
                  </CardBody>
                </Card>

                <div>
                  <Card>
                    <CardBody>
                      <h4 className="card-title">Agent</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img src="#" alt="agent" className="avatar-sm mr-4" />
                          <h5 className="card-title"> Agent Name</h5>
                        </div>
                        <div>
                          <span> Call </span>
                          <span> Email </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardBody>
                      <h4 className="card-title">Unit(Total)</h4>

                      <div className="table-responsive">
                        <Table borderless className="mb-0">
                          <thead>
                            <tr>
                              <th>Unit No</th>
                              <th>Description</th>
                              <th>Tenant</th>
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
              </>
            )
          )}
        </Container>
      </div>
    </>
  );
};

const mapStatetoProps = (state) => {
  const { property, loading, propertiesError } = state.Properties;
  return { property, loading, propertiesError };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties })(PropertyCard)
);
