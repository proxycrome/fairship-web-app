import React, { useState, useEffect } from 'react';
import { Container, Card, CardBody, Row, Col, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createProperties, duplicateUnitProperty } from '../../../store/actions';
import UnitForm from './FormData/UnitForm';

const CreateMoreUnit = ({
  landlordAgents,
  message,
  createdProperty,
  createProperties,
  duplicateUnitProperty,
  propertiesError,
  propertyTypes,
  feature
}) => {
  const [showForm, setShowForm] = useState(false);

  const createUnitHandler = (formData) => {
    const payload = {
      type: 'collective',
      id: createdProperty[0]?.parentProperty.id,
    };
    createProperties(formData, payload);
  };

  useEffect(() => {
    if (message) {
      setShowForm(false);
    }
  }, [message]);

  console.log(createdProperty);

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
            <h4 className="card-title text-capitalize"> {createdProperty[0].parentProperty.title} </h4>
            {createdProperty &&
              createdProperty.map((property) => (
                <Row
                  className="align-items-center mb-3 border-bottom pb-2"
                  key={property.id}
                >
                  <Col md={8} className="d-flex align-items-center">
                    <img
                      src={property?.indexImage}
                      alt="property"
                      className="avatar-lg mr-2 rounded"
                    />
                    <div>
                      <h5 className="card-title text-capitalize">Unit No: {property?.unitNo}</h5>
                      <p>Title: {property.title} </p>
                      <p className="text-muted text-capitalize">
                        {property?.address.houseNoAddress}
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="text-right">
                    <Link to={`/update_unit/${property.id}`}>
                      <Button color="primary">
                        Edit Property
                      </Button>
                    </Link>
                  </Col>
                </Row>
              ))}
            {!showForm ? (
              <div to="#" className="my-2">
                <Button  onClick={() => setShowForm(true)}
                color="light" className="text-success mr-2" size="sm">
                  Add More
                </Button>
                <Button  onClick={() => duplicateUnitProperty(createdProperty[0].id)}
                color="light" className="text-success " size="sm">
                  Duplicate First Unit
                </Button>
              </div>
            ) : (
              <div className="border-top pt-5">
                <UnitForm
                  agents={landlordAgents?.data}
                  updateProperty={createUnitHandler}
                  propertyTypes={propertyTypes}
                  landlordAgents={landlordAgents}
                  feature={createdProperty[0].feature}
                />
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
  const { message, createdProperty, propertiesError } = state.Properties;
  const { agents, landlordAgents } = state.Agents;
  return { agents, message, createdProperty, propertiesError, landlordAgents };
};

export default withRouter(
  connect(mapStatetoProps, { createProperties, duplicateUnitProperty })(CreateMoreUnit)
);
