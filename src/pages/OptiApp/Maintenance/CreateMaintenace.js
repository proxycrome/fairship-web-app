import React, { useEffect, useState } from "react";
import { Row, Col, Button, FormGroup, Label, Alert, Input } from "reactstrap";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";
import DropZone from "../../../components/Common/otherImageUpload";
import { Link } from "react-router-dom";
import {
  fetchProperties,
  getServiceTypes,
  postMaintenanceReq,
  getServiceProviders,
} from "../../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearMessages } from "../../../store/Maintenance/actions";
import moment from "moment";

const Maintenance = ({
  fetchProperties,
  properties,
  maintenance,
  getServiceTypes,
  serviceTypes,
  postMaintenanceReq,
  error,
  clearMessages,
  loading,
  getServiceProviders,
  serviceProviders,
}) => {
  // const [defaultDate, setDefaultDate] = useState(new Date());
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageError, setImageError] = useState("");
  const [value, onChange] = useState(
    new Date(moment().format("YYYY-MM-DD HH:mm"))
  );
  const [serviceName, setServiceName] = useState("");
  // const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = {
      type: "all_user_properties",
    };
    fetchProperties(isAuth);
    getServiceTypes();
  }, [fetchProperties, getServiceTypes]);

  useEffect(() => {
    clearMessages();
  }, [clearMessages]);

  useEffect(() => {
    if (serviceName) {
      getServiceProviders(String(serviceName));
    }
  }, [serviceName, getServiceProviders]);

  // const handleDefault = (date) => {
  //   setDefaultDate(date);
  // };

  const handleSubmit = (event, values) => {
    setImageError("");
    if (selectedFiles.length === 0) {
      setImageError("image can't be empty");
      return;
    }

    function serviceProvidersId() {
      const serviveProviderAccountIds = [];
      if (values.serviceProvider1) {
        serviveProviderAccountIds.push(+values.serviceProvider1);
      }
      if (values.serviceProvider2) {
        serviveProviderAccountIds.push(+values.serviceProvider2);
      }
      if (values.serviceProvider3) {
        serviveProviderAccountIds.push(+values.serviceProvider3);
      }
      return serviveProviderAccountIds;
    }

    const formData = {
      ...values,
      propertyId: +values.propertyId,
      serviceTypeId: +serviceTypes?.find(
        (service) => service.name === values.serviceTypeId
      ).id,
      images: selectedFiles,
      serviceProviderAccountIds: serviceProvidersId(),
      appointedDateTime: String(moment(value).format("DD-MM-YYYY HH:mm")),
    };
    const { serviceProvider1, serviceProvider2, serviceProvider3, ...others } =
      formData;
    postMaintenanceReq(others);
  };

  const sortedServiceTypes = serviceTypes?.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  return (
    <div className="page-content">
      <Row className="mb-4">
        <Col xl={10} className="header-box">
          <Link to="/maintenance">
            <Button color="link">
              <i className="ri-arrow-left-line"></i>
            </Button>
          </Link>
          <span className="ml-2">New Maintenance Request</span>
          {maintenance && (
            <Alert color="success" className="text-center">
              {maintenance?.message}
            </Alert>
          )}
          {error && (
            <Alert color="danger" className="text-center">
              {error?.message}
            </Alert>
          )}
          <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
            <Row>
              <Col xl={12}>
                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="propertyId"
                    label="Property"
                    className="form-ctrl"
                    required
                  >
                    <option value="" hidden>
                      Select Property
                    </option>
                    {properties?.entities?.map((property, index) => (
                      <option key={index} value={property.id}>
                        {property.parentProperty?.title} {property.title}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>

                <FormGroup className="form-group-custom m-4">
                  <Label htmlFor="date">Appointment Date</Label>
                  <Input
                    type="datetime-local"
                    className="form-ctrl d-block"
                    id="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    format="dd-MM-yyyy HH:mm"
                    min={moment().format("YYYY-MM-DD HH:mm")}
                  />
                </FormGroup>

                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="serviceTypeId"
                    className="form-ctrl"
                    label="Service Type"
                    required
                    onChange={(e) => setServiceName(e.target.value)}
                  >
                    <option value="" hidden>
                      Select Service type
                    </option>
                    {sortedServiceTypes?.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>

                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="serviceProvider1"
                    className="form-ctrl"
                    label="Service Provider 1"
                    required
                  >
                    <option value="" hidden>
                      Select Service Provider 1
                    </option>
                    {serviceProviders?.entities?.map((provider, idx) => (
                      <option key={idx} value={provider.id}>
                        {provider.firstName} {provider.lastName}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>

                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="serviceProvider2"
                    className="form-ctrl"
                    label="Service Provider 2"
                  >
                    <option value="" hidden>
                      Select Service Provider 2
                    </option>
                    {serviceProviders?.entities?.map((provider, idx) => (
                      <option key={idx} value={provider.id}>
                        {provider.firstName} {provider.lastName}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>

                <AvGroup className="form-group-custom m-4">
                  <AvField
                    type="select"
                    name="serviceProvider3"
                    className="form-ctrl"
                    label="Service Provider 3"
                  >
                    <option value="" hidden>
                      Select Service Provider 3
                    </option>
                    {serviceProviders?.entities?.map((provider, idx) => (
                      <option key={idx} value={provider.id}>
                        {provider.firstName} {provider.lastName}
                      </option>
                    ))}
                  </AvField>
                </AvGroup>
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
              <Col xs={3} className="mx-auto my-4">
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
  const { serviceTypes, maintenance, error, loading, serviceProviders } =
    state.Maintenance;
  return {
    properties,
    loading,
    serviceTypes,
    maintenance,
    error,
    serviceProviders,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    fetchProperties,
    getServiceTypes,
    postMaintenanceReq,
    clearMessages,
    getServiceProviders,
  })(Maintenance)
);
