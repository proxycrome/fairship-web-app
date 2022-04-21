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
  Input,
} from 'reactstrap';

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

import { createProperties, getAgents, getPropertyTypes, getPropertySubcategory } from '../../../../../store/actions';

import { connect } from 'react-redux';

import DropZone from '../../../../../components/Common/imageUpload';

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      selectedFiles: [],
      imageError: '',
      feature: 'RENT',
      type: "Agricultural",
      // price: "", 
      id: 1,
      formType: ""
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(events, values) {
    this.setState({ ...this.state, imageError: '' });
    if (this.state.selectedFiles.length === 0) {
      this.setState({ ...this.state, imageError: "image can't be empty" });
      return;
    }
    const formData = { ...values };
    formData.feature = this.state.feature;
    formData.description = 'new spacious unit';
    formData.isServiced = values.isServiced === 'Yes' ? true : false;
    formData.isFurnished = values.isFurnished === 'Yes' ? true : false;
    formData.isShared = values.isShared === 'Yes' ? true : false;
    formData.otherAmenities = values.otherAmenities.toString();
    formData.parkingLot = values.parkingLot === 'Yes' ? true : false;
    formData.bathrooms = Number(values.bathrooms);
    formData.bedrooms = Number(values.bedrooms);
    formData.price = Number(values.price.split(",").join(""));
    formData.periodInMonths = Number(values.periodInMonths);
    formData.agentIds = [
      this.props.agents.entities.find((agent) => {
        if (agent.firstName === values.agentIds) {
          return agent.id;
        }
      }).id,
    ];
    const payload = {
      type: 'unitEntity',
    };
    formData.images = this.state.selectedFiles;
    this.props.createProperties(formData, payload);
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
    this.props.getAgents();
    this.props.getPropertyTypes();
    this.props.getPropertySubcategory(this.state.id)
  }

  componentDidUpdate(PrevProps, PrevState) {
    const types = this.props.propertyTypes?.find(
      (type) => type.name === this.state.formType
    );
    if (PrevState.formType !== this.state.formType) {
      this.props.getPropertySubcategory(types.id);
    }
  }

  // numberWithCommas(x) {
  //   x = x.toString();
  //   var pattern = /\B(?=(\d{3})+(?!\d))/g;
  //   while (pattern.test(x))
  //       x = x.replace(pattern, ",");
  //   return x;
  // }

  // includeCommas(bar) {
  //   let num = bar.toString();
  //   // SPLIT WHOLE AND DECIMAL NUMBERS
  //   let cWhole = "";
  //   let cDec = "";

  //   let cDot = num.indexOf(".");

  //   if(cDot !== -1){
  //     cWhole = num.substring(0, cDot);
  //     cDec = num.substring(cDot);
  //   }

  //   // MANUALLY ADD COMMA PER THOUSAND
  //   if(cWhole.length > 3) {
  //     let temp = "";
  //     let j = 0;
  //     for(let i = cWhole.length - 1; i >= 0; i--){
  //       temp = cWhole[i] + temp;
  //       j++;

  //       if(j%3 === 0 && i !== 0){
  //         temp = "," + temp
  //       }
  //     }
  //     return temp;
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <div className="mb-2 text-right">
              <Link to="/unit_properties">
                <button className="btn btn-success btn-sm">
                  <i className="fas fa-arrow-left mr-2" /> Back
                </button>
              </Link>
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
                <div className="mb-4">
                  <Button
                    color={this.state.feature === 'SALE' ? 'primary' : 'light'}
                    onClick={() =>
                      this.setState({
                        feature: 'SALE',
                      })
                    }
                    className="mr-2 px-4"
                  >
                    Sale
                  </Button>
                  <Button
                    color={this.state.feature === 'RENT' ? 'primary' : 'light'}
                    onClick={() =>
                      this.setState({
                        feature: 'RENT',
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
                          value={this.state.type}
                          onChange={(e) => this.setState({formType: e.target.value})}
                          required
                        >
                          {this.props.propertyTypes?.map(type => (
                            <option key={type.id}>{type.name}</option>
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
                          name="address.city"
                          value={this.state.state}
                          helpMessage="City"
                        >
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Lekki</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col sm={3}>
                      <FormGroup className="form-group-custom mb-4">
                        <AvField
                          type="select"
                          name="address.state"
                          value={this.state.state}
                          // label="Option"
                          helpMessage="State"
                        >
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Lekki</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col sm={3}>
                      <FormGroup className="form-group-custom mb-4">
                        <AvField
                          type="select"
                          name="address.country"
                          helpMessage="Country"
                          value={this.state.country}
                        >
                          <option>Nigeria</option>
                          <option>Ghana</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col sm={3}>
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
                          type="select"
                          name="bedrooms"
                          helpMessage="No. of Bedrooms"
                          value="1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col xs={3}>
                      <FormGroup className="form-group-custom mb-4">
                        <AvField
                          type="select"
                          name="bathrooms"
                          helpMessage="No. of Bathrooms"
                          value="1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col xs={3}>
                      <FormGroup className="form-group-custom mb-4">
                        <AvField
                          type="select"
                          name="parkingLot"
                          helpMessage="Packing space"
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
                          // value={this.state.price}
                          // onChange={(e) => this.setState({price: this.numberWithCommas(e.target.value)})}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs={3}>
                      <FormGroup className="form-group-custom mb-4">
                        <AvField
                          type="Number"
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
                          name="isShared"
                          helpMessage="isShared"
                          value="Yes"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </AvField>
                      </FormGroup>
                    </Col>
                    <Col xm={12}>
                      <Row>
                        <Col xs={6}>
                          <Col xs={12}>
                            <FormGroup className="form-group-custom mb-4">
                              <AvField
                                type="select"
                                name="agentIds"
                                label="Add Agent"
                                value={this.props.agents?.entities[0].firstName}
                                required
                                // helpMessage="Location"
                              >
                                {this.props.agents !== null ? (
                                  this.props.agents?.entities?.map((agent) => (
                                    <option key={agent.id}>
                                      {agent?.firstName} 
                                    </option>
                                  ))
                                ) : (
                                  <option>Loading ...</option>
                                )}
                              </AvField>
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
                    <Button color="success" className="px-2">
                      {this.props.loading ? 'Sending ...' : ' Create Property'}
                    </Button>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { loading, message, property, propertiesError, propertyTypes, propertySubcategories } = state.Properties;
  const { agents } = state.Agents;
  return { loading, agents, message, property, propertiesError, propertyTypes, propertySubcategories };
};

export default connect(mapStatetoProps, { createProperties, getAgents, getPropertyTypes, getPropertySubcategory })(
  CreateProperty
);
