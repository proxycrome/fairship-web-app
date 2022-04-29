import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  FormGroup,
  Alert,
  Container,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';

import {
  getPropertySubcategory,
  fetchEachProperties,
  getPropertyTypes,
  getLandlordAgents,
  updateUnitProperty,
  clearUnitMessage,
} from '../../../store/actions';

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import plus from "./images/plus.svg";
import DropZone from "../../../components/Common/imageUpload";
import Loading from "../../../components/Common/Loading";

class EditUnitProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      imageError: '',
      type: 'Agricultural',
      id: 1,
      pays: [],
      formType: "",
      price: "",
      name: "",
      percentageAmount: "",
      show: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.payment = this.payment.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  payment(event, values) {
    const payee = { ...values };

    payee.percentageAmount = Number(values.percentageAmount);
    this.state.pays.push(payee);
    console.log(payee);
    this.setState({
      pays: this.state.pays,
      show: false,
    });
  }


  handleSubmit(events, values) {
    const formData = { ...values };
    formData.paymentItems = this.state.pays;
    formData.description = "new spacious unit";
    formData.isServiced = values.isServiced === "Yes" ? true : false;
    formData.isFurnished = values.isFurnished === "Yes" ? true : false;
    formData.isShared = values.isShared === "Yes" ? true : false;
    formData.parkingLot = values.parkingLot === "Yes" ? true : false;
    formData.otherAmenities = values.otherAmenities.toString();
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price);
    formData.periodInMonths = Number(values.periodInMonths);
    formData.agentIds = [
      this.props.landlordAgents?.data?.agents.find((agent) => {
        if (`${agent.firstName} ${agent.lastName}` === values.agentIds) {
          return agent.id;
        }
      }).id,
    ];
    
    this.props.updateUnitProperty(formData, this.props.match.params.id);
  }

  componentDidMount() {
    this.props.fetchEachProperties(this.props.match.params.id);
    this.props.getPropertySubcategory(this.state.id);
    this.props.getPropertyTypes();
    this.props.getLandlordAgents(this.props.user?.id);
    this.props.clearUnitMessage();
  }

  componentDidUpdate(PrevProps, PrevState) {
    const types = this.props.propertyTypes?.find(
      (type) => type.name === this.state.formType
    );

    if (PrevState.formType !== this.state.formType) {
      this.props.getPropertySubcategory(types?.id);
    }

    if (PrevProps.user !== this.props.user) {
      this.props.getLandlordAgents(this.props.user?.id);
      this.props.getPropertyTypes();
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
        <div className="page-content">
          <Container fluid>
            <div className="d-flex justify-content-between mb-2">
              <h5 className="ml-2"> Edit Unit </h5>

              <div>
                <Link to="#" onClick={() => this.props.history.goBack()}>
                  <Button color="success">Back</Button>
                </Link>
              </div>
            </div>
            <Card>
              <CardBody>
                {this.props.propertiesError && (
                  <Alert color="danger" className="text-center">
                    {this.props.propertiesError}
                  </Alert>
                )}
                {this.props.editMessage && (
                  <Alert color="success" className="text-center">
                    {this.props.editMessage}
                  </Alert>
                )}
                
                {!this.props.loading && this.props.property ? (
                  <AvForm
                    className="form-horizontal"
                    onValidSubmit={this.handleSubmit}
                    model={this.props.property}
                  >
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
                            id="unitNo"
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
                            id="type"
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
                            {this.props.propertySubcategories?.map(
                              (subcategory) => (
                                <option key={subcategory.id} value={subcategory.name}>
                                  {subcategory.name}
                                </option>
                              )
                            )}
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
                            value="Yes"
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
                            value="Yes"
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
                            onChange={(e) =>
                              this.setState({
                                price: this.includeCommas(e.target.value),
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                        <FormGroup className="form-group-custom mb-4">
                          <AvField
                            type="number"
                            name="periodInMonths"
                            id="periodInMonths"
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
                          <img src={plus} alt="plus" onClick={this.showModal} />
                          <span> Payment Item</span>
                          {this.state.pays?.map((pay, index) => (
                            <span
                              style={{ margin: "0 10px", display: "block" }}
                              key={index}
                            >
                              <span>{pay.name}: </span>
                              <span>{pay.percentageAmount}%</span>
                            </span>
                          ))}
                        </FormGroup>
                      </Col>
                      <Modal
                        size="lg"
                        isOpen={this.state.show}
                        toggle={this.hideModal}
                      >
                        <ModalHeader toggle={this.hideModal}>
                          Payment Item
                        </ModalHeader>
                        <ModalBody>
                          <AvForm onValidSubmit={this.payment}>
                            <p>Name</p>
                            <AvField
                              placeholder="Write name"
                              name="name"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }

                            />
                            <p className="mt-3">Percentage Amount %</p>
                            <AvField
                              placeholder="Write payment percentage"
                              name="percentageAmount"
                              value={this.state.percentageAmount}
                              onChange={(e) =>
                                this.setState({
                                  percentageAmount: e.target.value,
                                })
                              }
                            />
                            <Button
                              className=" mt-3 btn btn-success btn-lg"
                              type="submit"
                            >
                              Add
                            </Button>
                          </AvForm>
                        </ModalBody>
                      </Modal>
                      <Col md={12}>
                        <Row>
                          <Col xs={6}>
                            <Col xs={12}>
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
                                  {this.props.landlordAgents?.data?.agents
                                    ?.length !== 0 ? (
                                    this.props.landlordAgents?.data?.agents?.map((agent) => (
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
                            <Col xs={12}>
                              <FormGroup className="form-group-custom mb-4">
                                <AvCheckboxGroup
                                  name="otherAmenities"
                                  label="Amenities!"
                                  // required
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
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Gym"
                                    value="Gym"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Boys Quater"
                                    value=" Boys Quater"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="CCTV cameras"
                                    value="CCTV cameras"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="All rooms ensuite"
                                    value="All rooms ensuite"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Wireless Internet access"
                                    value="Wireless Internet access"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="24 hours electricity"
                                    value="24 hours electricity"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Alarm system"
                                    value="Alarm system"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Energy efficiency"
                                    value="Energy efficiency"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Kitchen hood"
                                    value="Kitchen hood"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Spacious rooms/Balcony"
                                    value="Spacious rooms/Balcony"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Parking space"
                                    value="Parking space"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label=" Swimming pool"
                                    value=" Swimming pool"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Uninterrupted Water supply"
                                    value="Uninterrupted Water supply"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Reception/Concierge service"
                                    value="Reception/Concierge service"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label=" Clubhouse/Lounges"
                                    value=" Clubhouse/Lounge"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Restaurants"
                                    value="Restaurants"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Pets allowed"
                                    value="Pets allowed"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Dishwasherr"
                                    value="Dishwasher"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Laundry facility"
                                    value="Laundry facility"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Access to public transportation"
                                    value="Access to public transportation"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label="Furnished Kitchens"
                                    value="Furnished Kitchens"
                                  />
                                  <AvCheckbox
                                    className="mb-2"
                                    label=" Communication system"
                                    value=" Communication system"
                                  />
                                </AvCheckboxGroup>
                              </FormGroup>
                            </Col>
                          </Col>
                          <Col xs={6}>
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
                      <Button type="submit" color="success" className="px-2">
                        {this.props.loading
                          ? 'Sending ...'
                          : ' Update Property'}
                      </Button>
                    </div>
                  </AvForm>
                ) : (
                  <Loading />
                )}
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const {
    loading,
    editMessage,
    propertySubcategories,
    property,
    propertiesError,
    propertyTypes,
  } = state.Properties;

  const { user } = state.Account;
  const { landlordAgents } = state.Agents;

  return {
    loading,
    propertySubcategories,
    property,
    propertiesError,
    propertyTypes,
    landlordAgents,
    user,
    editMessage,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    getPropertySubcategory,
    fetchEachProperties,
    getPropertyTypes,
    getLandlordAgents,
    updateUnitProperty,
    clearUnitMessage,
  })(EditUnitProperty)
);
