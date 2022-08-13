import React, { useEffect } from "react";
import { Container, Card, CardBody, Alert } from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  createProperties,
  getLandlordAgents,
  getPropertyTypes,
} from "../../../store/actions";
import UnitForm from "./FormData/UnitForm";

const CreateMoreUnit = ({
  landlordAgents,
  message,
  createProperties,
  propertiesError,
  propertyTypes,
  match,
  history,
  getLandlordAgents,
  user,
  getPropertyTypes,
}) => {
  const backward = () => {
    history.goBack()
  }

  const createUnitHandler = (formData) => {
    const payload = {
      type: "collective",
      id: match.params.id,
    };
    createProperties(formData, payload);
  };

  useEffect(() => {
    getLandlordAgents(user?.id);
    getPropertyTypes();
  }, [user, getLandlordAgents, getPropertyTypes]);


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="mb-2 text-right">
            <Link to="/#" onClick={backward}>
              <button className="btn btn-success btn-sm">
                <i className="fas fa-arrow-left mr-2" /> Back
              </button>
            </Link>
          </div>
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

              <div className="border-top pt-5">
                <UnitForm
                  agents={landlordAgents?.data}
                  updateProperty={createUnitHandler}
                  propertyTypes={propertyTypes}
                  landlordAgents={landlordAgents}
                />
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { loading, user } = state.Account;
  const { message, propertiesError, propertyTypes } = state.Properties;
  const { agents, landlordAgents } = state.Agents;
  return {
    agents,
    message,
    propertiesError,
    landlordAgents,
    loading,
    user,
    propertyTypes,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    createProperties,
    getLandlordAgents,
    getPropertyTypes,
  })(CreateMoreUnit)
);
