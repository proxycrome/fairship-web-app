import React from 'react';
import { Container, Card, CardBody, Alert } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';

const ListUnitPreview = ({ match }) => {
  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 text-right">
          <Link to="/unit_properties">
            <button className="btn btn-success btn-sm">
              <i className="fas fa-arrow-left mr-2" /> Back
            </button>
          </Link>
        </div>
        <Card>
          <CardBody>
            Preview Unit Property Item here
            <Alert className="text-center mt-4" color="danger">
              The Unit with ID:{' '}
              <span className="font-weight-bolder"> {match.params.id}</span>{' '}
              Page is under Construction
            </Alert>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default withRouter(ListUnitPreview);
