import React, { Component } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap';

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
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
  }

  handleSubmit(events, values) {
    const formData = { ...values };
    console.log(values)
    formData.propertyImg = this.state.selectedFiles;
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
                    <option>1 bedroom</option>
                    <option>2 bedrooms</option>
                    <option>3 bedrooms</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="bedrooms_2"
                    helpMessage="Bedrooms No"
                  >
                    <option>1 bedroom</option>
                    <option>2 bedrooms</option>
                    <option>3 bedrooms</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="packingSpace"
                    helpMessage="Packing space"
                  >
                    <option>1 packing Space</option>
                    <option>2 packing Space</option>
                    <option>3 packing Space</option>
                    <option>4 packing Space</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="serviced"
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
                    type="select"
                    name="rentAmount"
                    helpMessage="Rent Amount"
                  >
                    <option>300,000</option>
                    <option>400,000</option>
                  </AvField>
                </FormGroup>
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField type="select" name="period" helpMessage="Years">
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="furnishing"
                    helpMessage="furnishing"
                  >
                    <option>Furnished</option>
                    <option>Not Furnished</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField type="select" name="shared" helpMessage="shared">
                    <option>Shared</option>
                    <option>Not Shared</option>
                  </AvField>
                </FormGroup>
              </Col>

              <Col xs={6}>
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
              </Col>

              <Col xs={12}>
                <FormGroup className="form-group-custom mb-4">
                  <AvCheckboxGroup
                    name="Ammenities"
                    label="Ammenities!"
                    required
                  >
                    <AvCheckbox
                      className="mb-2"
                      label="Air Condition"
                      value="AC"
                    />
                    <AvCheckbox
                      className="mb-2"
                      label="water Heaters"
                      value="heater"
                    />
                    <AvCheckbox
                      className="mb-2"
                      label="Microwave"
                      value="microwave"
                    />
                    <AvCheckbox
                      className="mb-2"
                      label="Gas Cooker"
                      value="Cooker"
                    />
                    <AvCheckbox
                      className="mb-2"
                      label="Clean Water"
                      value="water"
                    />
                    <AvCheckbox className="mb-2" label="Gym" value="Gym" />
                  </AvCheckboxGroup>
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
                {' '}
                Create Property{' '}
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProperty;
