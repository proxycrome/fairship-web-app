import React, { useEffect, useState } from "react";
import { Row, Col, Button, FormGroup, Label, Alert } from "reactstrap";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";
import DropZone from "../../../components/Common/otherImageUpload";
import {
  fetchProperties,
  getServiceTypes,
  postMaintenanceReq,
} from "../../../store/actions";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearMessages } from "../../../store/Maintenance/actions";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const Maintenance = ({
  GoHome,
  fetchProperties,
  properties,
  maintenance,
  getServiceTypes,
  serviceTypes,
  postMaintenanceReq,
  error,
  clearMessages,
  loading,
}) => {
  // const [defaultDate, setDefaultDate] = useState(new Date());
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageError, setImageError] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = {
      type: "all_user_properties"
    };
    fetchProperties(isAuth);
    getServiceTypes();
  }, [fetchProperties, getServiceTypes]);

  useEffect(() => {
    clearMessages();
  }, [clearMessages])

  // useEffect(() => {
  //   if (maintenance) {
  //     setTimeout(() => {
  //       clearMessages();  
  //     }, 3000)
  //   }
  // }, [maintenance, clearMessages])

  // const handleDefault = (date) => {
  //   setDefaultDate(date);
  // };

  const handleSubmit = (event, values) => {
    setImageError("");
    if (selectedFiles.length === 0) {
      setImageError("image can't be empty");
      return;
    }

    const formData = {
      ...values,
      propertyId: +values.propertyId,
      serviceTypeId: +values.serviceTypeId,
      image: selectedFiles
    };
    // console.log(formData);
    dispatch(postMaintenanceReq(formData));
  };

  // console.log(maintenance);

  return (
    <div className="page-content">
      <Row className="mb-4">
        <Col xl={10} className="header-box">
          <Button color="link" outline onClick={GoHome}>
            <i className="ri-arrow-left-line"></i>
          </Button>
          <span className="ml-2">New Maintenance Request</span>
          {maintenance && maintenance?.message && (
            <Alert color="success" className="text-center">
              {maintenance?.message}
            </Alert>
          )}
          {error && error?.message && (
            <Alert color="danger" className="text-center">
              {error?.message}
            </Alert>
          )}
          <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
            <Row>
              <Col xl={6}>
                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="propertyId"
                    label="Property"
                    className="form-ctrl"
                    required
                  >
                    <option value="">Select Property</option>
                    {properties?.entities?.map((property) => (
                      <option key={property.id} value={property.id}>
                        {property.parentProperty?.title} {property.title}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>

                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="serviceTypeId"
                    className="form-ctrl"
                    label="Service Type"
                    required
                  >
                    <option value="">Select Service type</option>
                    {serviceTypes?.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>
              </Col>
              <Col xl={6}>
                {/* <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="unit"
                    label="Unit"
                    className="form-ctrl"
                  >

                    <option value="">unit</option>
                    <option>0001</option>
                    <option>0002</option>
                    {properties?.entities?.map((property) => (
                      <option key={property.id}>{property.unitNo}</option>
                    ))}
                  </AvField>
                </AvGroup> */}

                {/* <FormGroup className="form-group-custom m-4">
                  <Label htmlFor="date">Date</Label>
                  <DatePicker
                    id="date"
                    className="form-control"
                    selected={defaultDate}
                    onChange={handleDefault}
                  />
                </FormGroup> */}

                <AvGroup className="form-group-custom m-4">
                  <AvField 
                    type="number"
                    name="fee" 
                    label="Amount" 
                    required 
                  />
                </AvGroup>
                <AvGroup className="form-group-custom m-4">
                  <Label htmlFor="comments">Description</Label>
                  <AvField
                    type="textarea"
                    name="description"
                    id="comments"
                    placeholder="Description..."
                    rows="3"
                  />
                </AvGroup>
              </Col>
            </Row>
            <Row>
              <Col xl={11} className="mx-auto mb-4 mt-4">
                <DropZone
                  selectedFiles={selectedFiles}
                  setFile={(files) => setSelectedFiles(files)}
                />
                {selectedFiles?.length === 0 && imageError && (
                  <Alert color="danger" className="text-danger">
                    {imageError}
                  </Alert>
                )}
              </Col>
            </Row>
            <Row>
              <Col xl={3} className="mx-auto my-4">
                <FormGroup>
                  <Button
                    type="submit"
                    color="success"
                    className="waves-effect pr-5 pl-5 w-lg"
                  >
                    {loading ? "Sending ..." : " Send"}
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </AvForm>
        </Col>
      </Row>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { properties } = state.Properties;
  const { serviceTypes, maintenance, error, loading } = state.Maintenance;
  return { properties, loading, serviceTypes, maintenance, error };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchProperties,
    getServiceTypes,
    postMaintenanceReq,
    clearMessages,
  })(Maintenance)
);
