import React, { Component } from "react";
import { Row, Col, Button, FormGroup, Input, Label, Alert } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getPropertySubcategory } from "../../../../store/actions";

import DropZone from "../../../../components/Common/imageUpload";

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      description: "no description",
      city: "Lagos",
      country: "Nigeria",
      state: "Lagos",
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
  }

  componentDidUpdate(PrevProps, PrevState) {
    const types = this.props.propertyTypes?.find(
      (type) => type.name === this.state.formType
    );
    if (PrevState.formType !== this.state.formType) {
      this.props.getPropertySubcategory(types.id);
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
                        name="address.city"
                        value={this.state.state}
                        helpMessage="City"
                      >
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Lekki</option>
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.state"
                        value={this.state.state}
                        // label="Option"
                        helpMessage="State"
                      >
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Lekki</option>
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.country"
                        helpMessage="Country"
                        value={this.state.country}
                      >
                        <option>Nigeria</option>
                        <option>Ghana</option>
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
                        value={`${this.props.agents?.agents[0].firstName} ${this.props.agents?.agents[0].lastName}`}
                        required
                      >
                        {this.props.agents !== null ? (
                          this.props.agents?.agents.map((agent) => (
                            <option key={agent.id}>
                              {agent?.firstName} {agent?.lastName}
                            </option>
                          ))
                        ) : (
                          <option>Loading ...</option>
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
  return { propertySubcategories };
};

export default withRouter(
  connect(mapStatetoProps, { getPropertySubcategory })(CreateProperty)
);
