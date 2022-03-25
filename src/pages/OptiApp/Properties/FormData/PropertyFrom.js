import React, { Component } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

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
              <Col xs={12}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="title"
                    // value={this.state.Title}
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="title"
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="type"
                    // label="Option"
                    helpMessage="type of building"
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
                    name="location"
                    // label="Option"
                    helpMessage="Location"
                  >
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Lekki</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="square_meter"
                    // value={this.state.Title}
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="square Meter"
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="area"
                    // value={this.state.Title}
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="area"
                  />
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
                <DropZone
                  selectedFiles={this.state.selectedFiles}
                  setFile={(files) => this.setState({ selectedFiles: files })}
                />
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="agent"
                    label="Add Agent"
                    // helpMessage="Location"
                  >
                    <option>Agent 1</option>
                    <option>Agent 2</option>
                    <option>agent 3</option>
                  </AvField>
                </FormGroup>
              </Col>

              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="account"
                    label="Option"
                    // helpMessage="Location"
                  >
                    <option>Account 1</option>
                    <option>Account 2</option>
                    <option>Account 3</option>
                  </AvField>
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center">
              <Button color="success" className="px-4"> Next </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProperty;
