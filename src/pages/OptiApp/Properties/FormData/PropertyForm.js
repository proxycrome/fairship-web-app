import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Label,
  Alert,
  Collapse,
} from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getPropertySubcategory,
  fetchCountry,
  fetchState,
  fetchLga,
} from "../../../../store/actions";

import DropZone from "../../../../components/Common/imageUpload";
import DocsUpload from "../cardProperty/DocsUpload";
import plus from "../images/plus.svg";
import Check from "../../../../assets/images/checked.png";
import Trash from "../../../../assets/images/trash.png";
import File from "../../../../assets/images/File.png";

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
      otherDocs: [],
      description: "no description",
      LGA: "",
      country: "",
      state: "",
      type: "Agricultural",
      formType: "",
      imageError: "",
      id: 1,
      open: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({ ...this.state, imageError: "" });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }

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

    console.log("selected agent", selectAgent());

    const formData = { ...values };
    formData.description = this.state.description;
    formData.agentIds = selectAgent();
    formData.images = this.state.selectedFiles;
    formData.propertyDocumentImages =
      this.props.feature === "RENT" ? null : this.handleSaleDocuments();
    this.props.updateProperty(formData);
  }

  componentDidMount() {
    this.props.getPropertySubcategory(this.state.id);
    this.props.fetchCountry();
    // this.props.fetchState(1);
  }

  componentDidUpdate(PrevProps, PrevState) {
    const types = this.props.propertyTypes?.find(
      (type) => type.name === this.state.formType
    );
    if (PrevState.formType !== this.state.formType) {
      this.props.getPropertySubcategory(types?.id);
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

  handleDelete(id) {
    const remainingDocs = this.state.otherDocs?.filter(
      (data, index) => index !== id
    );
    this.setState({ otherDocs: remainingDocs });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit}>
            <Row>
              <Col sm={6}>
                <Row>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="title"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Title"
                        helpMessage="Property title"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="type"
                        value={this.state.type}
                        helpMessage="Property Type"
                        required
                        onChange={(e) =>
                          this.setState({ formType: e.target.value })
                        }
                      >
                        {this.props.propertyTypes?.map((type) => (
                          <option key={type.id} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="subcategory"
                        helpMessage="Property Subcategory"
                      >
                        {this.props.propertySubcategories?.map(
                          (subcategory) => (
                            <option key={subcategory.id}>
                              {subcategory.name}
                            </option>
                          )
                        )}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="size"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Enter Property Size"
                        helpMessage="Property size (sqm)"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="address.houseNoAddress"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="Address"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.country"
                        helpMessage="Country"
                        // value={this.props.countries?.unshift.name}
                        onChange={(e) =>
                          this.setState({ country: e.target.value })
                        }
                        required
                      >
                        <option value="" hidden disabled>
                          Select...
                        </option>
                        {this.props.countries?.map((country) => (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </AvField>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.state"
                        // value={this.props.states?.unshift.name}
                        // label="Option"
                        helpMessage="State"
                        onChange={(e) =>
                          this.setState({ state: e.target.value })
                        }
                        required
                      >
                        <option value="" hidden disabled>
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
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="address.lga"
                        // value={this.props.lgas?.unshift.name}
                        helpMessage="LGA"
                        onChange={(e) => this.setState({ LGA: e.target.value })}
                        required
                      >
                        <option value="" hidden disabled>
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
                  <Col sm={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        name="address.zipCode"
                        type="text"
                        className="form-ctrl"
                        id="text"
                        placeholder="zipcode"
                      />
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
                </Row>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col xs={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="agentIds"
                        helpMessage="Add Agent"
                        placeholder="Select an Agent"
                      >
                        <option value="" hidden disabled>
                          Select an Agent...
                        </option>
                        {this.props.landlordAgents?.data?.agents?.length !==
                        0 ? (
                          this.props.agents?.agents.map((agent, index) => (
                            <option
                              key={index}
                              value={`${agent?.firstName} ${agent?.lastName}`}
                            >
                              {agent?.firstName} {agent?.lastName}
                            </option>
                          ))
                        ) : this.props.landlordAgents === null ? (
                          <option value="">Loading ...</option>
                        ) : (
                          <option value="">No Agents yet...</option>
                        )}
                      </AvField>
                    </FormGroup>
                  </Col>

                  <Col xs={6}>
                    <FormGroup className="form-group-custom mb-4">
                      <AvField
                        type="select"
                        name="account"
                        // label="Add Account"
                        helpMessage="Add Account"
                      >
                        <option>Account 1</option>
                        <option>Account 2</option>
                        <option>Account 3</option>
                      </AvField>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
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
                          documentName="Family Agreement"
                          setBase64File={(data) =>
                            this.setState({ faImage: data })
                          }
                          base64File={this.state.faImage}
                        />
                      </Col>
                      <Col xs={12} className="mb-4">
                        <DocsUpload
                          name="CERTIFICATE_OF_OCCUPANCY"
                          documentName="Certificate of Occupancy"
                          setBase64File={(data) =>
                            this.setState({ cooImage: data })
                          }
                          base64File={this.state.cooImage}
                        />
                      </Col>
                      <Col xs={12} className="mb-4">
                        <DocsUpload
                          name="LETTER_OF_ALLOCATION"
                          documentName="Letter of Allocation"
                          setBase64File={(data) =>
                            this.setState({ loaImage: data })
                          }
                          base64File={this.state.loaImage}
                        />
                      </Col>
                      <Col xs={12} className="mb-4">
                        <DocsUpload
                          name="LAND_CERTIFICATE"
                          documentName="Land Certificate"
                          setBase64File={(data) =>
                            this.setState({ landCertImage: data })
                          }
                          base64File={this.state.landCertImage}
                        />
                      </Col>
                      <Col xs={12} className="mb-4">
                        <DocsUpload
                          name="CONVEYANCE_LETTER"
                          documentName="Conveyance"
                          setBase64File={(data) =>
                            this.setState({ conveyImage: data })
                          }
                          base64File={this.state.conveyImage}
                        />
                      </Col>
                      <Col xs={12} className="mb-4">
                        <DocsUpload
                          name="CONSENT_LETTER"
                          documentName="Concent"
                          setBase64File={(data) =>
                            this.setState({ concentImage: data })
                          }
                          base64File={this.state.concentImage}
                        />
                      </Col>
                      {this.state.otherDocs?.map((item, index) => (
                        <Col xs={12} key={index} className="mb-4">
                          <div className="grey-box-background d-flex justify-content-between p-3">
                            <div className="d-flex align-items-center">
                              <img src={File} alt="file" />
                              <h6 className="ml-2 pt-2">{item.title}</h6>
                            </div>
                            <div>
                              <img
                                src={Trash}
                                alt="trash"
                                width="20"
                                height="20"
                                className="mr-2"
                                onClick={() => this.handleDelete(index)}
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
                      <Col xs={12} className="mb-4">
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
                        <Col xs={12} className="mb-4">
                          <DocsUpload
                            name="OTHERS"
                            documentName="Others"
                            setBase64File={(data) =>
                              this.setState({ othersImage: data })
                            }
                            base64File={this.state.othersImage}
                          />
                        </Col>
                      </Collapse>
                    </>
                  )}
                </Row>
              </Col>
            </Row>
            <div className="text-center">
              <Button color="success" className="px-4">
                Next
              </Button>
            </div>
          </AvForm>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { propertySubcategories } = state.Properties;
  const { countries, states, lgas } = state.Location;
  return { propertySubcategories, countries, states, lgas };
};

export default withRouter(
  connect(mapStatetoProps, {
    getPropertySubcategory,
    fetchCountry,
    fetchState,
    fetchLga,
  })(CreateProperty)
);
