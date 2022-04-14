import React, { useState, useEffect } from 'react';
import { Container, Card, CardBody, Row, Col, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createProperties } from '../../../store/actions';
import UnitForm from './FormData/UnitForm';

const CreateMoreUnit = ({ agents, message, property, createProperties, propertiesError }) => {
  const [showForm, setShowForm] = useState(false);

  const createUnitHandler = (formData) => {
    const payload = {
      type : "collective",
      id:  property?.parentProperty.id
    }
    createProperties(formData,payload);
  };

  useEffect(() => {
    if (message) {
      setShowForm(false);
    }
  }, [message]);

  return (
    <div>
      <Container fluid>
        <Card>
          <CardBody>
            {message && (
              <Alert color="success" className="text-center">
                {message}
              </Alert>
            )}

            {propertiesError && (
              <Alert color="danger" className="text-center">
                {propertiesError}
              </Alert>
            )}

            <Row className="align-items-center mb-3">
              <Col md={8} className="d-flex align-items-center">
                <img
                  src={property?.indexImage}
                  alt="property"
                  className="avatar-lg mr-2 rounded"
                />
                <div>
                  <h5 className="card-title"> {property?.unitNo} </h5>
                  <p className="text-muted">
                    {property?.address.houseNoAddress}
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-right">
                <Link to="#">
                  <span className="text-primary">Edit Property</span>
                </Link>
              </Col>
            </Row>
            {!showForm ? (
              <Link to="#" onClick={() => setShowForm(true)} className="my-2">
                <Button color="light" className="text-success" size="sm">
                  Add More
                </Button>
              </Link>
            ) : (
              <div className="border-top pt-5">
                <UnitForm agents={agents} updateProperty={createUnitHandler} />
              </div>
            )}

            {!showForm && (
              <div className="text-center mt-5">
                <Link to="/properties">
                  <button className="px-5 btn btn-success">Finish</button>
                </Link>
              </div>
            )}
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { message, property, propertiesError } = state.Properties;
  const { agents } = state.Agents;
  return { agents, message, property, propertiesError };
};

export default withRouter(
  connect(mapStatetoProps, { createProperties })(CreateMoreUnit)
);
