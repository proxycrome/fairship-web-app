import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Alert,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  Input,
  Label,
} from "reactstrap";

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { getPropertySubcategory } from "../../../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import plus from "../images/plus.svg";
import DocsUpload from "../cardProperty/DocsUpload";
import DropZone from "../../../../components/Common/imageUpload";

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      cooImage: {},
      faImage: {},
      loaImage: {},
      landCertImage: {},
      conveyImage: {},
      concentImage: {},
      othersImage: {},
      imageError: "",
      name: "",
      percentageAmount: "",
      pays: [],
      type: "Agricultural",
      id: 1,
      formType: "",
      price: "",
      show: false,
      others: "",
      description: "no description",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.payment = this.payment.bind(this);
    this.handleSaleDocuments = this.handleSaleDocuments.bind(this);
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
    if (Object.keys(this.state.othersImage).length > 0) {
      combineDocs.push(this.state.othersImage);
    }
    return combineDocs;
  }

  handleSubmit(events, values) {
    this.setState({ ...this.state, imageError: "" });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }

    const selectAgent = () => {
      if (values?.agentIds !== "") {
        return [
          +this.props.agents?.agents?.find((agent) => {
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

    formData.description = this.state.description;
    formData.isServiced = values.isServiced === "Yes" ? true : false;
    formData.isFurnished = values.isFurnished === "Yes" ? true : false;
    formData.isShared = values.isShared === "Yes" ? true : false;
    formData.parkingLot = values.parkingLot === "Yes" ? true : false;
    formData.otherAmenities = values.otherAmenities.toString();
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price.split(",").join(""));
    formData.periodInMonths = Number(values.periodInMonths);
    formData.agentIds = selectAgent();
    formData.propertyDocumentImages =
      this.props.feature === "RENT" ? null : this.handleSaleDocuments();
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
    const num = Number(str.split(",").join(""));
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
              {/* <Col xs={4}>
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
              </Col> */}
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
              {this.props.feature === "RENT" ? (
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
              ) : null}
              
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
              <Modal size="lg" isOpen={this.state.show} toggle={this.hideModal}>
                <ModalHeader toggle={this.hideModal}>Payment Item</ModalHeader>
                <ModalBody>
                  <Form>
                    <p>Name</p>
                    <Input
                      placeholder="Write name"
                      name="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
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
                          placeholder="Select an Agent"
                          required
                        >
                          <option value="" hidden disabled>
                            Select an Agent...
                          </option>
                          {this.props.landlordAgents?.data?.agents?.length !==
                          0 ? (
                            this.props.agents?.agents?.map((agent) => (
                              <option
                                key={agent.id}
                                value={`${agent?.firstName} ${agent?.lastName}`}
                              >
                                {agent?.firstName} {agent?.lastName}
                              </option>
                            ))
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
                    <Col xs={12}>
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
                                this.setState({ others: e.target.value })
                              }
                              placeholder="Enter other amenities seperated by commas then check the box"
                            />
                          </div>
                        </AvCheckboxGroup>
                      </FormGroup>
                    </Col>
                  </Col>
                  <Col xs={6}>
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
                    {this.props.feature === "RENT" ? (
                      <></>
                    ) : (
                      <>
                        <label
                          style={{ fontSize: "12px" }}
                          className="ml-3 text-danger"
                        >
                          Documents must be in pdf format and less than 250mb
                        </label>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="FAMILY_AGREEMENT"
                            documentName="Family agreement"
                            setFile={(files) =>
                              this.setState({ faImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="CERTIFICATE_OF_OCCUPANCY"
                            documentName="Certificate of Occupancy"
                            setFile={(files) =>
                              this.setState({ cooImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="LETTER_OF_ALLOCATION"
                            documentName="Letter of Allocation"
                            setFile={(files) =>
                              this.setState({ loaImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="LAND_CERTIFICATE"
                            documentName="Land Certificate"
                            setFile={(files) =>
                              this.setState({ landCertImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="CONVEYANCE_LETTER"
                            documentName="Conveyance"
                            setFile={(files) =>
                              this.setState({ conveyImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="CONSENT_LETTER"
                            documentName="Concent"
                            setFile={(files) =>
                              this.setState({ concentImage: files })
                            }
                          />
                        </Col>
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="OTHERS"
                            documentName="Others"
                            setFile={(files) =>
                              this.setState({ othersImage: files })
                            }
                          />
                        </Col>
                      </>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="text-center">
              <Button type="submit" color="success" className="px-2">
                {this.props.loading ? "Sending ..." : " Create Property"}
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
