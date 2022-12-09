import React, { Component } from "react";
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
  ModalBody,
  ModalHeader,
  Input,
  Form,
} from "reactstrap";

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Link, withRouter } from "react-router-dom";

import {
  putUnitProperty,
  fetchEachProperties,
  getLandlordAgents,
  getPropertyTypes,
  getPropertySubcategory,
  fetchCountry,
  fetchState,
  fetchLga,
  clearUnitMessage,
} from "../../../store/actions";

import { connect } from "react-redux";
import plus from "./images/plus.svg";
import Loading from "../../../components/Common/Loading";

import DropZone from "../../../components/Common/imageUpload";

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      name: "",
      percentageAmount: "",
      pays: [],
      show: false,
      imageError: "",
      feature: "RENT",
      type: "",
      price: "",
      id: 1,
      formType: "",
      state: "",
      LGA: "",
      country: "",
      others: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.payment = this.payment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  payment(event) {
    event.preventDefault();
    const payee = {};

    payee.percentageAmount = Number(this.state.percentageAmount);
    payee.name = this.state.name;
    this.state.pays.push(payee);
    // console.log(payee);
    this.setState({
      pays: this.state.pays,
      show: false,
    });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  deleteItem(index) {
    let paymentItem = [...this.state.pays];
    paymentItem.splice(index, 1);
    this.setState({ pays: paymentItem });
  }

  handleSubmit(events, values) {
    // this.setState({ ...this.state, imageError: "" });
    // if (this.state.selectedFiles.length === 0) {
    //   this.setState({ ...this.state, imageError: "image can't be empty" });
    //   return;
    // }

    const selectAgent = () => {
      if (values?.agentIds !== "") {
        return [
          +this.props.landlordAgents?.data?.agents?.find((agent) => {
            if (`${agent?.firstName} ${agent?.lastName}` === values?.agentIds) {
              return agent?.id;
            }
          })?.id,
        ];
      }
      if (values?.agentIds === "") {
        return [];
      }
    };

    const formData = { ...values };
    formData.paymentItems = this.state.pays;
    formData.feature = this.state.feature;
    formData.description = this.props.property?.description;
    formData.isServiced = values.isServiced === "Yes" ? true : false;
    formData.isFurnished = values.isFurnished === "Yes" ? true : false;
    formData.isShared = values.isShared === "Yes" ? true : false;
    formData.otherAmenities = values.otherAmenities.toString();
    formData.parkingLot = values.parkingLot === "Yes" ? true : false;
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price);
    formData.periodInMonths = Number(values.periodInMonths);
    formData.agentIds = selectAgent();
    // const payload = {
    //   type: "singleUnit",
    // };

    formData.images = this.state.selectedFiles;
    this.props.putUnitProperty(formData, this.props.match.params.id);
    // console.log(formData);

    // setTimeout(() => {
    //   this.props.history.push("/unit_properties");
    // }, 5000);
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

  componentDidMount() {
    this.props.fetchEachProperties(this.props.match.params.id);
    if (this.props.user) {
      this.props.getLandlordAgents(this.props.user?.id);
    }
    this.props.getPropertyTypes();
    this.props.getPropertySubcategory(this.state.id);
    this.props.fetchCountry();
    this.props.clearUnitMessage();
    this.props.fetchState(1);
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
      // this.props.getPropertyTypes();
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
    if (PrevState.state !== this.state.state) {
      this.props.fetchLga(state?.id);
    }

    if (
      PrevProps.message !== this.props.message ||
      PrevProps.propertiesError !== this.props.propertiesError
    ) {
      setTimeout(() => {
        this.props.clearUnitMessage();
        window.location.reload(true);
      }, 4000);
    }
  }

  includeCommas(str) {
    const num = Number(str.split(",").join(""));
    const comma = num.toLocaleString();
    return String(comma);
  }

  render() {
    console.log(this.props.property);
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <div className="d-flex justify-content-between mb-2">
              <h5 className="ml-2"> Edit Single Unit </h5>
              <div className="mb-2 text-right">
                <Link to="/unit_properties">
                  <button className="btn btn-success btn-sm">
                    <i className="fas fa-arrow-left mr-2" /> Back
                  </button>
                </Link>
              </div>
            </div>
            <Card>
              <CardBody>
                {this.props.message && (
                  <Alert color="success" className="text-center">
                    {this.props.message}
                  </Alert>
                )}

                {this.props.propertiesError && (
                  <Alert color="danger" className="text-center">
                    {this.props.propertiesError}
                  </Alert>
                )}

                {this.props.property && (
                  <>
                    <div className="mb-4">
                      <Button
                        color={
                          this.state.feature === "SALE" ? "primary" : "light"
                        }
                        onClick={() =>
                          this.setState({
                            feature: "SALE",
                          })
                        }
                        className="mr-2 px-4"
                      >
                        Sale
                      </Button>
                      <Button
                        color={
                          this.state.feature === "RENT" ? "primary" : "light"
                        }
                        onClick={() =>
                          this.setState({
                            feature: "RENT",
                          })
                        }
                        className="px-4"
                      >
                        Rent
                      </Button>
                    </div>
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
                              placeholder="Unit Title"
                              helpMessage="Unit Title"
                            />
                          </FormGroup>
                        </Col>
                        {/* <Col xs={4}>
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
                            </Col> */}
                        <Col xs={4}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="select"
                              name="type"
                              helpMessage="Property Type"
                              onChange={(e) =>
                                this.setState({ type: e.target.value })
                              }
                              required
                            >
                              <option value="" hidden>
                                Select Type...
                              </option>
                              {this.props.propertyTypes?.map((type) => (
                                <option key={type.id} value={type.name}>
                                  {type.name}
                                </option>
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
                                  <option
                                    key={subcategory.id}
                                    value={subcategory.name}
                                  >
                                    {subcategory.name}
                                  </option>
                                )
                              )}
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col sm={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              name="address.houseNoAddress"
                              type="text"
                              className="form-ctrl"
                              id="text"
                              placeholder="address"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col sm={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="select"
                              name="address.country"
                              helpMessage="Country"
                              onChange={(e) =>
                                this.setState({ country: e.target.value })
                              }
                              required
                            >
                              <option value="" hidden>
                                Select Country...
                              </option>
                              {this.props.countries?.map((country) => (
                                <option key={country.id} value={country.name}>
                                  {country.name}
                                </option>
                              ))}
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col sm={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="select"
                              name="address.state"
                              helpMessage="State"
                              onChange={(e) =>
                                this.setState({ state: e.target.value })
                              }
                              required
                            >
                              <option value="" hidden>
                                Select...
                              </option>
                              {this.props.states?.map((state) => (
                                <option key={state.id} value={state.name}>
                                  {state.name}
                                </option>
                              ))}
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col sm={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="select"
                              name="address.lga"
                              helpMessage="LGA"
                              onChange={(e) =>
                                this.setState({ LGA: e.target.value })
                              }
                              required
                            >
                              <option value="" hidden>
                                Select...
                              </option>
                              {this.props.lgas?.map((lga) => (
                                <option key={lga.id} value={lga.name}>
                                  {lga.name}
                                </option>
                              ))}
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col sm={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              name="address.zipcode"
                              type="text"
                              className="form-ctrl"
                              id="address.zipcode"
                              placeholder="zipcode"
                              helpMessage="zipcode"
                            />
                          </FormGroup>
                        </Col>
                        <Col xs={3}>
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
                        <Col xs={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              name="bedrooms"
                              type="number"
                              className="form-ctrl"
                              id="bedrooms"
                              helpMessage="Number of Bedrooms"
                            />
                          </FormGroup>
                        </Col>
                        <Col xs={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              name="bathrooms"
                              type="number"
                              className="form-ctrl"
                              id="bathrooms"
                              helpMessage="Number of Bathrooms"
                            />
                          </FormGroup>
                        </Col>
                        <Col xs={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="select"
                              name="parkingLot"
                              helpMessage="Packing space"
                              value="Yes"
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col xs={3}>
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
                        <Col xs={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              name="price"
                              type="text"
                              // min={10000}
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
                        <Col xs={3}>
                          <FormGroup className="form-group-custom mb-4">
                            <AvField
                              type="Number"
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
                            <img
                              src={plus}
                              alt="plus"
                              onClick={this.showModal}
                            />
                            <span> Payment Item</span>
                            {this.state.pays?.map((pay, index) => (
                              <span
                                style={{ margin: "0 10px", display: "block" }}
                                key={index}
                              >
                                <span>{pay.name}: </span>
                                <span>{pay.percentageAmount}%</span>
                                <span
                                  className="ml-4 text-danger"
                                  onClick={() => this.deleteItem(index)}
                                >
                                  <i className="fas fa-trash font-size-12 "></i>
                                </span>
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
                            <Form>
                              <p>Name</p>
                              <Input
                                placeholder="Write name"
                                name="name"
                                value={this.state.name}
                                onChange={(e) =>
                                  this.setState({ name: e.target.value })
                                }
                              />
                              <p className="mt-3">Percentage Amount %</p>
                              <Input
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
                                onClick={this.payment}
                              >
                                Add
                              </Button>
                            </Form>
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
                                    // helpMessage="Location"
                                  >
                                    <option value="" hidden disabled>
                                      Select Agent...
                                    </option>
                                    {this.props.landlordAgents?.data?.agents
                                      ?.length !== 0 ? (
                                      this.props.landlordAgents?.data?.agents?.map(
                                        (agent) => (
                                          <option
                                            key={agent.id}
                                            value={`${agent?.firstName} ${agent?.lastName}`}
                                          >
                                            {agent?.firstName} {agent?.lastName}
                                          </option>
                                        )
                                      )
                                    ) : this.props.loadlordAgents === null ? (
                                      <option value="">Loading ...</option>
                                    ) : (
                                      <option value="">No Agents yet...</option>
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
                                      value="Boys Quater"
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
                                      label="Swimming pool"
                                      value="Swimming pool"
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
                                      label="Clubhouse/Lounges"
                                      value="Clubhouse/Lounge"
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
                                      label="Dishwasher"
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
                                      label="Communication system"
                                      value="Communication system"
                                    />
                                    <div className="d-flex align-items-center">
                                      <AvCheckbox
                                        className="mb-2"
                                        label="others"
                                        value={this.state.others}
                                        disabled={!this.state.others}
                                      />
                                      <Input
                                        className="form-control ml-2"
                                        value={this.state.others}
                                        style={{ fontSize: "12px" }}
                                        onChange={(e) =>
                                          this.setState({
                                            others: e.target.value,
                                          })
                                        }
                                        placeholder="Enter other amenities seperated by commas then check the box"
                                      />
                                    </div>
                                  </AvCheckboxGroup>
                                </FormGroup>
                              </Col>
                            </Col>
                            {/* <Col xs={6}>
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
                            </Col> */}
                          </Row>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button color="success" className="px-2" type="submit">
                          {this.props.loading
                            ? "Sending ..."
                            : " Create Property"}
                        </Button>
                      </div>
                    </AvForm>
                  </>
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
  const { user } = state.Account;
  const {
    loading,
    message,
    property,
    propertiesError,
    propertyTypes,
    propertySubcategories,
  } = state.Properties;

  const { agents, landlordAgents } = state.Agents;
  const { countries, states, lgas } = state.Location;

  return {
    loading,
    agents,
    message,
    property,
    propertiesError,
    propertyTypes,
    propertySubcategories,
    user,
    landlordAgents,
    countries,
    states,
    lgas,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    putUnitProperty,
    getLandlordAgents,
    getPropertyTypes,
    getPropertySubcategory,
    fetchCountry,
    fetchState,
    fetchLga,
    fetchEachProperties,
    clearUnitMessage,
  })(CreateProperty)
);
