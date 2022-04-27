import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, Alert, Modal, ModalBody, ModalHeader } from 'reactstrap';

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import { getPropertySubcategory } from '../../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import plus from '../images/plus.svg'

import DropZone from '../../../../components/Common/imageUpload';

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      imageError: '',
      name: '',
      percentageAmount: '',
      pays: [],
      type: 'Agricultural',
      id: 1,
      formType: '',
      price: '',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.payment = this.payment.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };
  
 

   payment(event, values){
    const payee = {...values}

    payee.percentageAmount = Number(values.percentageAmount)
    this.state.pays.push(payee)
    console.log(payee)
    this.setState({
        pays: this.state.pays
      })
    
  }

  hideModal = () => {
    this.setState({ show: false });
  };


  handleSubmit(events, values) {
    this.setState({ ...this.state, imageError: '' });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }
    const formData = { ...values };
    formData.paymentItems = this.state.pays;
    formData.description = 'new spacious unit';
    formData.isServiced = values.isServiced === 'Yes' ? true : false;
    formData.isFurnished = values.isFurnished === 'Yes' ? true : false;
    formData.isShared = values.isShared === 'Yes' ? true : false;
    formData.parkingLot = values.parkingLot === 'Yes' ? true : false;
    formData.otherAmenities = values.otherAmenities.toString();
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price.split(',').join(''));
    formData.periodInMonths = Number(values.periodInMonths);
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
      this.props.getPropertySubcategory(types?.id);
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

  includeCommas(str) {
    const num = Number(str.split(',').join(''));
    const comma = num.toLocaleString();
    return String(comma);
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
                    placeholder="Title"
                    helpMessage="Title"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="unitNo"
                    type="text"
                    className="form-ctrl"
                    id="title"
                    placeholder="Unit No"
                    helpMessage="Unit No"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="type"
                    helpMessage="Property Type"
                    value={this.state.type}
                    onChange={(e) =>
                      this.setState({ formType: e.target.value })
                    }
                    required
                  >
                    {this.props.propertyTypes?.map((type) => (
                      <option key={type.id} value={type.name}>{type.name}</option>
                    ))}
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="subcategory"
                    helpMessage="Property Subcategory"
                  >
                    {this.props.propertySubcategories?.map((subcategory) => (
                      <option key={subcategory.id}>{subcategory.name}</option>
                    ))}
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
                    helpMessage="size of apartment (sqm)"
                    placeholder="size of apartment"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="bedrooms"
                    type="number"
                    className="form-ctrl"
                    id="bedrooms"
                    helpMessage="No of Bedrooms"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="bathrooms"
                    type="number"
                    className="form-ctrl"
                    id="bathrooms"
                    helpMessage="No of Bathrooms"
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="parkingLot"
                    helpMessage="Packing space"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="select"
                    name="isServiced"
                    helpMessage="Serviced Apartment"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </AvField>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    name="price"
                    type="text"
                    className="form-ctrl"
                    id="price"
                    helpMessage="Price of Apartment"
                    value={this.state.price}
                    onChange={(e) =>
                      this.setState({
                        price: this.includeCommas(e.target.value),
                      })
                    }
                  />
                </FormGroup>
              </Col>
              {/* <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                <AvRadio label="Payment Type" value="PaymentType" />
                </FormGroup>
              </Col> */}
              <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvField
                    type="number"
                    name="periodInMonths"
                    helpMessage="Months of Rent"
                    placeholder="Enter No. of Months"
                  />
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
                    name="agentIds"
                    label="Add Agent"
                    placeholder="Select an Agent"
                    // value={
                    //   this.props.landlordAgents &&
                    //   `${
                    //     this.props.landlordAgents?.data?.agents?.unshift()
                    //       .firstName
                    //   } ${
                    //     this.props.landlordAgents?.data?.agents?.unshift()
                    //       .lastName
                    //   }`
                    // }
                    required
                    // helpMessage="Location"
                  >
                    {this.props.landlordAgents?.data?.agents?.length !== 0 ? (
                      this.props.agents?.agents?.map((agent) => (
                        <option key={agent.id}>
                          {agent?.firstName} {agent?.lastName}
                        </option>
                      ))
                    ) : this.props.loadlordAgents === null ? (
                      <option>Loading ...</option>
                    ) : (
                      <option>No Agents yet...</option>
                    )}
                  </AvField>
                </FormGroup>
              </Col>
            
              <Col xs={6}>
                <>
                  <DropZone
                    selectedFiles={this.state.selectedFiles}
                    setFile={(files) => this.setState({ selectedFiles: files })}
                  />
                  {this.state.imageError && (
                    <Alert color="danger" className="text-danger">
                      {this.state.imageError}
                    </Alert>
                  )}
                </>
              </Col>  <Col xs={6}>
                <FormGroup className="form-group-custom mb-4">
                  <AvCheckboxGroup
                    name="otherAmenities"
                    label="Amenities!"
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
            </Row>
            <div className="text-center">
              <Button type="submit" color="success" className="px-2">
                {this.props.loading ? 'Sending ...' : ' Create Property'}
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { loading, propertySubcategories } = state.Properties;
  return { loading, propertySubcategories };
};

export default withRouter(
  connect(mapStatetoProps, { getPropertySubcategory })(CreateProperty)
);
