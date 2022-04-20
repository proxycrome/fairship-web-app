import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, Input, Label, Alert } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

import DropZone from '../../../../components/Common/imageUpload';

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      description: 'no description',
      city: 'Lagos',
      country: 'Nigeria',
      state: 'Lagos',
      type: 'Flats/apartments',
      imageError: '',
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(events, values) {
    this.setState({ ...this.state, imageError: '' });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }
    const formData = { ...values };
    formData.description = this.state.description;
    formData.agentIds = [
      this.props.agents.entities.find((agent) => {
        if (agent.firstName === values.agentIds) {
          return agent.id;
        }
      }).id,
    ];
    formData.images = this.state.selectedFiles;
    this.props.updateProperty(formData);
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
                      >
                        {this.props.propertyTypes?.map(type => (
                          <option key={type.id}>{type.name}</option>
                        ))}
                        {/* <option>Flat</option>
                        <option>Duplex</option>
                        <option>mansion</option> */}
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
                        required
                      >
                        {this.props.agents !== null ? (
                          this.props.agents?.entities.map((agent) => (
                            <option key={agent.id}>{agent?.firstName}</option>
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

export default CreateProperty;
