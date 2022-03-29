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
      city: 'Lagos',
      country: 'Nigeria',
      state: 'Lagos',
      type: 'Flat',
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(events, values) {
    const formData = { ...values };
    console.log(this.state.selectedFiles)
    formData.agentIds = [
      this.props.agents.entities.find((agent) => {
        if (agent.firstName === values.agentId) {
          return agent.id;
        }
      }).id,
    ];
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
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="type"
                    value={this.state.type}
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
                    name="square_meter"
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
                    name="address.houseNoAddress"
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="address"
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="address.state"
                    value={this.state.state}
                    // label="Option"
                    helpMessage="state here"
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
                    type="select"
                    name="address.country"
                    helpMessage="state here"
                    value={this.state.country}
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="address.zipcode"
                    type="text"
                    className="form-ctrl"
                    id="text"
                    placeholder="zipcode"
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
                    name="agentId"
                    label="Add Agent"
                    required
                    // helpMessage="Location"
                  >
                    {this.props.agents !== null ? (
                      this.props.agents.entities.map((agent) => (
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
                    label="Add Account"
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
              <Button color="success" className="px-4">
                {' '}
                Next{' '}
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProperty;
