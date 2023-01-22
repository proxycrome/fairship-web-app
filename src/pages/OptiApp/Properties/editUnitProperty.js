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
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Collapse,
} from "reactstrap";

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";

import {
  getPropertySubcategory,
  fetchEachProperties,
  getPropertyTypes,
  getLandlordAgents,
  updateUnitProperty,
  clearUnitMessage,
} from "../../../store/actions";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import plus from "./images/plus.svg";
// import DropZone from "../../../components/Common/imageUpload";
import DocsUpload from "./cardProperty/DocsUpload";
import Check from "../../../assets/images/checked.png";
import Trash from "../../../assets/images/trash.png";
import File from "../../../assets/images/File.png";
// import Loading from "../../../components/Common/Loading";

class EditUnitProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      // imageError: '',
      type: "Agricultural",
      id: 1,
      pays: [],
      cooImage: {},
      faImage: {},
      loaImage: {},
      landCertImage: {},
      conveyImage: {},
      concentImage: {},
      othersImage: {},
      otherDocs: [],
      formType: "",
      price: "",
      name: "",
      percentageAmount: "",
      show: false,
      open: false,
      others: "",
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.payment = this.payment.bind(this);
    this.handleSaleDocuments = this.handleSaleDocuments.bind(this);
    this.combineOtherDocs = this.combineOtherDocs.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  combineOtherDocs() {
    this.state.otherDocs.push(this.state.othersImage);
    this.setState({
      otherDocs: this.state.otherDocs,
      open: false,
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  payment(event) {
    event.preventDefault();
    const payee = {};

    payee.percentageAmount = parseFloat(this.state.percentageAmount);
    payee.name = this.state.name;
    this.state.pays.push(payee);
    this.setState({
      pays: this.state.pays,
      show: false,
      name: "",
      percentageAmount: "",
    });
  }

  deleteItem(index) {
    let paymentItem = [...this.state.pays];
    paymentItem.splice(index, 1);
    this.setState({ pays: paymentItem });
  }

  handleSaleDocuments() {
    let combineDocs = [];
    if (Object.keys(this.state.faImage).length > 0) {
      combineDocs.push(this.state.faImage);
    }
    if (Object.keys(this.state.cooImage).length > 0) {
      combineDocs.push(this.state.cooImage);
    }
    if (Object.keys(this.state.loaImage).length > 0) {
      combineDocs.push(this.state.loaImage);
    }
    if (Object.keys(this.state.landCertImage).length > 0) {
      combineDocs.push(this.state.landCertImage);
    }
    if (Object.keys(this.state.conveyImage).length > 0) {
      combineDocs.push(this.state.conveyImage);
    }
    if (Object.keys(this.state.concentImage).length > 0) {
      combineDocs.push(this.state.concentImage);
    }
    if (this.state.otherDocs?.length > 0) {
      combineDocs.push(...this.state.otherDocs);
    }
    return combineDocs;
  }

  handleSubmit(events, values) {
    const selectAgent = () => {
      if (values?.agentIds !== "") {
        const agentObj = this.props.agents?.agents?.find(
          (agent) =>
            `${agent?.firstName} ${agent?.lastName}` === values?.agentIds
        );
        return [+agentObj.id];
      }
      if (values?.agentIds === "") {
        return [];
      }
    };

    const formData = { ...values };
    formData.paymentItems = this.state.pays;
    formData.description = this.props.property?.description;
    formData.isServiced = values?.isServiced === "Yes" ? true : false;
    formData.isFurnished = values?.isFurnished === "Yes" ? true : false;
    formData.isShared = values?.isShared === "Yes" ? true : false;
    formData.parkingLot = values?.parkingLot === "Yes" ? true : false;
    formData.otherAmenities = values?.otherAmenities?.toString();
    formData.bathrooms = Number(values?.bathrooms);
    formData.bedrooms = Number(values?.bedrooms);
    formData.price = Number(values?.price);
    formData.periodInMonths = Number(values?.periodInMonths);
    formData.agentIds = selectAgent();
    formData.propertyDocumentImages =
      this.props.property?.feature === "RENT"
        ? null
        : this.handleSaleDocuments();

    this.props.updateUnitProperty(formData, this.props.match?.params?.id);
  }

  componentDidMount() {
    this.props.fetchEachProperties(this.props.match.params.id);
    this.props.getPropertySubcategory(this.state.id);
    this.props.getPropertyTypes();
    if(this.props.user?.id){
      this.props.getLandlordAgents(this.props.user?.id);
    } 
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
    if (
      PrevProps.editMessage !== this.props.editMessage ||
      PrevProps.propertiesError !== this.props.propertiesError
    ) {
      setTimeout(() => {
        this.props.clearUnitMessage();
        window.location.reload(true);
      }, 4000);
    }
    if (PrevState.othersImage !== this.state.othersImage) {
      this.combineOtherDocs();
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
    const num = Number(str.split(",").join(""));
    const comma = num.toLocaleString();
    return String(comma);
  }

  handleDelete(id) {
    const remainingDocs = this.state.otherDocs?.filter(
      (data, index) => index !== id
    );
    this.setState({ otherDocs: remainingDocs });
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

                {this.props.property && (
                  <AvForm
                    className="form-horizontal"
                    onValidSubmit={this.handleSubmit}
                    model={this.props.property}
                  >
                    <Row>
                      <Col md={4}>
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
                      {/* <Col md={4}>
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
                      </Col> */}
                      <Col md={4}>
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
                              <option key={type.id} value={type.name}>
                                {type.name}
                              </option>
                            ))}
                          </AvField>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
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
                      <Col md={4}>
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
                      <Col md={4}>
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
                      <Col md={4}>
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
                      <Col md={4}>
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
                      <Col md={4}>
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
                      <Col md={6}>
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
                      {this.props.property?.feature === "RENT" && (
                        <Col md={6}>
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
                      )}
                      <Col md={6}>
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
                      <Col md={6}>
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
                          <Col md={6}>
                            <Col md={12}>
                              <FormGroup className="form-group-custom mb-4">
                                <AvField
                                  type="select"
                                  name="agentIds"
                                  label="Add Agent"
                                  placeholder="Select an Agent"
                                  value=""
                                >
                                  <option value="" hidden disabled>
                                    Select Agent...
                                  </option>
                                  {this.props.landlordAgents?.data?.agents
                                    ?.length !== 0 ? (
                                    this.props.landlordAgents?.data?.agents?.map(
                                      (agent, i) => (
                                        <option
                                          key={i}
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
                            <Col md={12}>
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
                                    label="Boys Quarter"
                                    value="Boys Quarter"
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
                          <Col md={6}>
                            {/* <Col md={12}>
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
                            {this.state.property?.feature === "RENT" ? (
                              <></>
                            ) : (
                              <>
                                <label
                                  style={{ fontSize: "12px" }}
                                  className="ml-3 text-danger"
                                >
                                  Documents must be in pdf format and less than
                                  250mb
                                </label>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="FAMILY_AGREEMENT"
                                    documentName="Family Agreement"
                                    setBase64File={(data) =>
                                      this.setState({ faImage: data })
                                    }
                                    base64File={this.state.faImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="CERTIFICATE_OF_OCCUPANCY"
                                    documentName="Certificate of Occupancy"
                                    setBase64File={(data) =>
                                      this.setState({ cooImage: data })
                                    }
                                    base64File={this.state.cooImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="LETTER_OF_ALLOCATION"
                                    documentName="Letter of Allocation"
                                    setBase64File={(data) =>
                                      this.setState({ loaImage: data })
                                    }
                                    base64File={this.state.loaImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="LAND_CERTIFICATE"
                                    documentName="Land Certificate"
                                    setBase64File={(data) =>
                                      this.setState({ landCertImage: data })
                                    }
                                    base64File={this.state.landCertImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="CONVEYANCE_LETTER"
                                    documentName="Conveyance"
                                    setBase64File={(data) =>
                                      this.setState({ conveyImage: data })
                                    }
                                    base64File={this.state.conveyImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                <Col md={12} className="mb-4">
                                  <DocsUpload
                                    name="CONSENT_LETTER"
                                    documentName="Concent"
                                    setBase64File={(data) =>
                                      this.setState({ concentImage: data })
                                    }
                                    base64File={this.state.concentImage}
                                    propertyDocs={
                                      this.props.property?.documents
                                    }
                                  />
                                </Col>
                                {this.props.property?.documents
                                  ?.filter((item) => item.name === "OTHERS")
                                  .map((item, index) => (
                                    <Col md={12} key={index} className="mb-4">
                                      <div className="grey-box-background d-flex justify-content-between p-3">
                                        <div className="d-flex align-items-center">
                                          <img src={File} alt="file" />
                                          <h6 className="ml-2 pt-2">
                                            {item.title}
                                          </h6>
                                        </div>
                                        <div>
                                          <img
                                            src={Check}
                                            alt="check"
                                            width="20"
                                            height="20"
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                  ))}
                                {this.state.otherDocs?.map((item, index) => (
                                  <Col md={12} key={index} className="mb-4">
                                    <div className="grey-box-background d-flex justify-content-between p-3">
                                      <div className="d-flex align-items-center">
                                        <img src={File} alt="file" />
                                        <h6 className="ml-2 pt-2">
                                          {item.title}
                                        </h6>
                                      </div>
                                      <div>
                                        <img
                                          src={Trash}
                                          alt="trash"
                                          width="20"
                                          height="20"
                                          className="mr-2"
                                          onClick={() =>
                                            this.handleDelete(index)
                                          }
                                          style={{ cursor: "pointer" }}
                                        />
                                        <img
                                          src={Check}
                                          alt="check"
                                          width="20"
                                          height="20"
                                        />
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                                <Col md={12} className="mb-4">
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      this.setState({ open: !this.state.open })
                                    }
                                  >
                                    <img src={plus} alt="plus" />
                                    <span
                                      className="text-success ml-3"
                                      style={{ fontWeight: "600" }}
                                    >
                                      Add other Document
                                    </span>
                                  </div>
                                </Col>
                                <Collapse isOpen={this.state.open}>
                                  <Col md={12} className="mb-4">
                                    {this.props.property?.documents
                                      ?.filter((item) => item.name === "OTHERS")
                                      ?.map((item, index) => (
                                        <DocsUpload
                                          key={index}
                                          name="OTHERS"
                                          documentName="Others"
                                          setBase64File={(data) =>
                                            this.setState({ othersImage: data })
                                          }
                                          base64File={this.state.othersImage}
                                          propertyDocs={
                                            this.props.property?.documents
                                          }
                                        />
                                      ))}
                                  </Col>
                                </Collapse>
                              </>
                            )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button type="submit" color="success" className="px-2">
                        {this.props.loading
                          ? "Sending ..."
                          : " Update Property"}
                      </Button>
                    </div>
                  </AvForm>
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
