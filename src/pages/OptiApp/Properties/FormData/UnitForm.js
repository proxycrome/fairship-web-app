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
    console.log(formData);
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
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="unitNumber"
                    type="text"
                    className="form-ctrl"
                    id="unitNumber"
                    placeholder="Unit Number"
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="unitType"
                    helpMessage="Type of Room"
                  >
                    <option>Flat</option>
                    <option>Duplex</option>
                    <option>mansion</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="bedrooms"
                    helpMessage="Bedroom No"
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
                    name="bathrooms"
                    helpMessage="Bedrooms No"
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
                    name="packingLot"
                    helpMessage="Packing space"
                  >
                    <option>True</option>
                    <option>False</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isServiced"
                    helpMessage="Serviced Apartment"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField type="select" name="price" helpMessage="Rent Amount">
                    <option>300,000</option>
                    <option>400,000</option>
                  </AvField>
                </FormGroup>
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField type="select" name="periodInMonths" helpMessage="Years">
                    <option values={1}>1 Year</option>
                    <option values={2}>2 Years</option>
                    <option values={3}>3 Years</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isFurnished"
                    helpMessage="furnishing"
                  >
                    <option>True</option>
                    <option>False</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField type="select" name="isShared" helpMessage="shared">
                    <option>Shared</option>
                    <option>Not Shared</option>
                  </AvField>
                </FormGroup>
              </Col>

              {/* <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="zipcode"
                    // value={this.state.Title}
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="zipcode"
                  />
                </FormGroup>
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="address"
                    // value={this.state.Title}
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="address"
                  />
                </FormGroup>
              </Col> */}

              <Col xs={12}>
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

              <Col xs={12}>
                <DropZone
                  selectedFiles={this.state.selectedFiles}
                  setFile={(files) => this.setState({ selectedFiles: files })}
                />
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
