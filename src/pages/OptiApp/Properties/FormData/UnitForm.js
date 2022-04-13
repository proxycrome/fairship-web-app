import React, { Component } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap';

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';

import DropZone from '../../../../components/Common/imageUpload';

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(events, values) {
    const formData = { ...values };
    formData.description = 'new spacious unit';
    formData.isServiced = values.isServiced === 'Yes' ? true : false;
    formData.isFurnished = values.isFurnished === 'Yes' ? true : false;
    formData.isShared = values.isShared === 'Yes' ? true : false;
    formData.parkingLot = values.parkingLot === 'Yes' ? true : false;
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price);
    formData.periodInMonths = Number(values.periodInMonths);
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
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="title"
                    type="text"
                    className="form-ctrl"
                    id="title"
                    placeholder="Unit Title"
                    helpMessage="Unit Title"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="unitNo"
                    type="text"
                    className="form-ctrl"
                    id="unitNo"
                    placeholder="Unit Number"
                    helpMessage="Unit Number"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="type"
                    helpMessage="Type of Room"
                    value="flat"
                  >
                    <option>Flat</option>
                    <option>Duplex</option>
                    <option>mansion</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="size"
                    type="text"
                    className="form-ctrl"
                    id="size"
                    helpMessage="size of apartment"
                    placeholder="size of apartment"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="bedrooms"
                    helpMessage="Bedroom No"
                    value="1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="bathrooms"
                    helpMessage="Bedrooms No"
                    value="1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="parkingLot"
                    helpMessage="Packing space"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isServiced"
                    value="Yes"
                    helpMessage="Serviced Apartment"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="price"
                    type="number"
                    min={10000}
                    className="form-ctrl"
                    id="price"
                    placeholder="Price of the apartment"
                  />
                </FormGroup>
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="periodInMonths"
                    helpMessage="Years of Rent"
                    value="12"
                  >
                    <option values={1}>12 </option>
                    <option values={2}>18 </option>
                    <option values={3}>24 </option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isFurnished"
                    helpMessage="furnishing"
                    value="Yes"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isShared"
                    helpMessage="isShared"
                    value="Yes"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="agentIds"
                    label="Add Agent"
                    value={this.props.agents?.entities[0].firstName}
                    required
                    // helpMessage="Location"
                  >
                    {this.props.agents !== null ? (
                      this.props.agents?.entities?.map((agent) => (
                        <option key={agent.id}>{agent?.firstName}</option>
                      ))
                    ) : (
                      <option>Loading ...</option>
                    )}
                  </AvField>
                </FormGroup>
              </Col>

              <Col xs={6}>
                <DropZone
                  selectedFiles={this.state.selectedFiles}
                  setFile={(files) => this.setState({ selectedFiles: files })}
                />
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvRadioGroup
                    name="otherAmenities"
                    label="Amenities!"
                    required
                  >
                    <AvRadio
                      className="mb-2"
                      label="Air Condition"
                      value="AC"
                    />
                    <AvRadio
                      className="mb-2"
                      label="water Heaters"
                      value="heater"
                    />
                    <AvRadio
                      className="mb-2"
                      label="Microwave"
                      value="microwave"
                    />
                    <AvRadio
                      className="mb-2"
                      label="Gas Cooker"
                      value="Cooker"
                    />
                    <AvRadio
                      className="mb-2"
                      label="Clean Water"
                      value="water"
                    />
                    <AvRadio className="mb-2" label="Gym" value="Gym" />
                  </AvRadioGroup>
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center">
              <Button color="success" className="px-2">
                Create Property
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProperty;
