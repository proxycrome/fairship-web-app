import React, { Component } from "react";
import { Row, Col, Button, FormGroup, Input, Label, Alert } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getPropertySubcategory,
  fetchCountry,
  fetchState,
  fetchLga,
} from "../../../../store/actions";

import DropZone from "../../../../components/Common/imageUpload";

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      description: "no description",
      LGA: "",
      country: "",
      state: "",
      type: "Agricultural",
      formType: "",
      imageError: "",
      id: 1,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(events, values) {
    this.setState({ ...this.state, imageError: "" });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }
    const formData = { ...values };
    formData.description = this.state.description;
    formData.agentIds = [
      this.props.agents?.agents.find((agent) => {
        if (`${agent.firstName} ${agent.lastName}` === values.agentIds) {
          return agent.id;
        }
      }).id,
    ];
    formData.images = this.state.selectedFiles;
    this.props.updateProperty(formData);
  }

  componentDidMount() {
    this.props.getPropertySubcategory(this.state.id);
    this.props.fetchCountry();
    this.props.fetchState(1);
  }

  componentDidUpdate(PrevProps, PrevState) {
    const types = this.props.propertyTypes?.find(
      (type) => type.name === this.state.formType
    );
    if (PrevState.formType !== this.state.formType) {
      this.props.getPropertySubcategory(types?.id);
    }

    const country = this.props.countries?.find(
      (country) => country.name === this.state.country
    );
    if (PrevState.country !== this.state.country) {
      this.props.fetchState(country?.id);
    }

    const state = this.props.states?.find(
      (state) => state.name === this.state.state
    );
    if(PrevState.state !== this.state.state) {
      this.props.fetchLga(state?.id)
    }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        this.setState({
          activeTab: tab,
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit}>
            <Row>
              <Col sm={6}>
                <Row>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="title"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Title"
                        helpMessage="Property title"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="type"
                        value={this.state.type}
                        helpMessage="Property Type"
                        required
                        onChange={(e) =>
                          this.setState({ formType: e.target.value })
                        }
                      >
                        {this.props.propertyTypes?.map((type) => (
                          <option key={type.id} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="subcategory"
                        helpMessage="Property Subcategory"
                      >
                        {this.props.propertySubcategories?.map(
                          (subcategory) => (
                            <option key={subcategory.id}>
                              {subcategory.name}
                            </option>
                          )
                        )}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="size"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Enter Property Size"
                        helpMessage="Property size (sqm)"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="address.houseNoAddress"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Address"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.country"
                        helpMessage="Country"
                        value={this.props.countries?.unshift.name}
                        onChange={(e) =>
                          this.setState({ country: e.target.value })
                        }
                      >
                        {this.props.countries?.map((country) => (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.state"
                        value={this.props.states?.unshift.name}
                        // label="Option"
                        helpMessage="State"
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                      >
                        {this.props.states?.map((state) => (
                          <option key={state.id} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.lga"
                        value={this.props.lgas?.unshift.name}
                        helpMessage="LGA"
                        onChange={(e) => this.setState({ LGA: e.target.value })}
                      >
                        {this.props.lgas?.map((lga) => (
                          <option key={lga.id} value={lga.name}>
                            {lga.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="address.zipCode"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="zipcode"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs={12}>
                    <FormGroup className="form-group-custom mb-4">
                      <Label for="description">Description</Label>
                      <Input
                        name="description"
                        type="textarea"
                        rows={8}
                        className="form-ctrl"
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                        id="description"
                        placeholder="Description"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col xs={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="agentIds"
                        helpMessage="Add Agent"
                        value={
                          this.props.landlordAgents &&
                          `${
                            this.props.landlordAgents?.data?.agents?.unshift()
                              .firstName
                          } ${
                            this.props.landlordAgents?.data?.agents?.unshift()
                              .lastName
                          }`
                        }
                        required
                      >
                        {this.props.landlordAgents?.data?.agents?.length !==
                        0 ? (
                          this.props.agents?.agents.map((agent) => (
                            <option key={agent.id}>
                              {agent?.firstName} {agent?.lastName}
                            </option>
                          ))
                        ) : this.props.landlordAgents === null ? (
                          <option>Loading ...</option>
                        ) : (
                          <option>No Agents yet...</option>
                        )}
                      </AvField>
                    </FormGroup>
                  </Col>

                  <Col xs={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="account"
                        // label="Add Account"
                        helpMessage="Add Account"
                      >
                        <option>Account 1</option>
                        <option>Account 2</option>
                        <option>Account 3</option>
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col xs={12}>
                    <>
                      <DropZone
                        selectedFiles={this.state.selectedFiles}
                        setFile={(files) =>
                          this.setState({ selectedFiles: files })
                        }
                      />
                      {this.state.imageError && (
                        <Alert color="danger" className="text-danger">
                          {this.state.imageError}
                        </Alert>
                      )}
                    </>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="text-center">
              <Button color="success" className="px-4">
                Next
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { propertySubcategories } = state.Properties;
  const { countries, states, lgas } = state.Location;
  return { propertySubcategories, countries, states, lgas };
};

export default withRouter(
  connect(mapStatetoProps, {
    getPropertySubcategory,
    fetchCountry,
    fetchState,
    fetchLga,
  })(CreateProperty)
);
