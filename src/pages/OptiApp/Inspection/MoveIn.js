import React, { useState, useRef, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  CardHeader,
  Button,
  Label,
  Alert,
  Container,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import {
  AvForm,
  AvRadio,
  AvField,
  AvRadioGroup,
  AvGroup,
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { postInspection } from '../../../store/inspection/actions';
import AddInspectionForm from './createFieldForm';

import { fetchEachInspection } from '../../../store/inspection/actions';

import DropZone from '../../../components/Common/inspectUpload';

const MoveIn = ({
  inspection,
  rental,
  loading,
  message,
  inspectionsError,
  fetchEachInspection,
  match,
  history,
}) => {
  const [selectedFiles, SetSelectedFiles] = useState([]);
  const [type, setType] = useState('MOVE_IN');
  const [newInspection, setNewInspection] = useState('');
  const [addColumn, SetAddColumn] = useState(false);
  const [inspectionField, SetInspectionField] = useState([]);
  const [rentId, setRentId] = useState('');

  const [inspectionData, setInspectionData] = useState({});
  const [startInspection, setStartInspection] = useState(false);
  const dispatch = useDispatch();

  const headerNameRef = useRef(null);

  const uploadFIle = (file, id, data, item) => {
    SetSelectedFiles(file);
    // const cloneValue = [...inspectionField];
    // const index = cloneValue.findIndex((data) => data.id === id);
    // cloneValue[index].selectedFiles = [...file];
    // SetInspectionField(cloneValue);
  };

  const formatData = (data, field, imageUrl) => {
    const inspectionAreas = {
      name: field,
    };
    inspectionAreas.inspectionItems = [];
    inspectionAreas.inventoryItems = [];

    for (const [key, value] of Object.entries(data[field].inspectionItems)) {
      const newData = { ...value };
      newData.itemName = key;
      newData.images = imageUrl;
      inspectionAreas.inspectionItems.push(newData);
    }

    for (const [key, value] of Object.entries(data[field].inventoryItems)) {
      const newData = { ...value, quantity: Number(value.quantity) };
      newData.itemName = key;
      inspectionAreas.inventoryItems.push(newData);
    }
    return inspectionAreas;
  };

  const handleSubmit = (event, values) => {
    console.log(values);
    const formData = {};
    formData.type = type;
    formData.rentId = inspection.rent.id;
    formData.inspectionAreas = [];
    for (const [key, value] of Object.entries(values)) {
      if (key === 'generalComment') {
        formData.generalComment = key;
      } else {
        let inspectionArea = {};
        inspectionArea.name = key;
        inspectionArea.inspectionItems = [];
        inspectionArea.inventoryItems = [];
        for (const [key1, value1] of Object.entries(value.inspectionItems)) {
          let inspectionItem = {
            itemName: key1,
            ...value1,
          };
          inspectionArea.inspectionItems.push(inspectionItem);
        }

        for (const [key1, value1] of Object.entries(value.inventoryItems)) {
          let inventoryItem = {
            itemName: key1,
            ...value1,
          };
          inspectionArea.inventoryItems.push(inventoryItem);
        }
        formData.inspectionAreas.push(inspectionArea);
      }
    }

    console.log(formData);
    let res = formData.inspectionAreas.forEach((val) =>
      val.inspectionItems.forEach((val2) => (val2.images = selectedFiles))
    );
    dispatch(postInspection(formData));
  };

  const [col1, setCol1] = useState('');

  const t_col1 = (val) => {
    if (col1 === val) {
      setCol1('');
    } else {
      setCol1(val);
    }
  };

  const handleSubmitEntering = (event) => {
    setStartInspection(true);
  };

  const updateInspection = (values) => {
    const newInspection = {
      id: inspectionField.length + 1,
      title: values.title,
      items: values.Inspection,
      inventories: values.Inventory,
      selectedFiles: [],
    };
    SetAddColumn(false);
    SetInspectionField([...inspectionField, newInspection]);
  };

  const removeInspectionArea = (id) => {
    let result = inspectionField.filter((data) => data.id !== id);
    SetInspectionField(result);
  };

  const createInspectionHandler = () => {
    if (newInspection.length !== 0) {
      SetInspectionField([
        ...inspectionField,
        {
          title: newInspection,
          items: [],
          inventories: [],
          selectedFiles: [],
        },
      ]);
    }
  };

  useEffect(() => {
    if (match.params.id) {
      fetchEachInspection(match.params.id);
    }
  }, [match.params.id]);

  useEffect(() => {
    if (rental) {
      setRentId(rental?.entities[0].id);
    }

    if (message) {
      setTimeout(() => {
        history.push('/inspection');
      }, 3000);
    }
  }, [rental, message]);

  console.log(inspection);

  return (
    <div className="page-content">
      <Container fluid>
        <Link to="/inspection">
          <button className="btn btn-success btn-sm px-3 mb-2"> Back </button>
        </Link>
        {!startInspection ? (
          <Card>
            <CardBody>
              {inspectionsError ? (
                <Alert color="danger" className="text-center">
                  {inspectionsError.message}
                </Alert>
              ) : (
                <>
                  <div className="d-flex">
                    <div>
                      <img
                        src={inspection?.rent?.property?.indexImage}
                        alt="property"
                        width="100"
                        height="100"
                        style={{ borderRadius: '20px' }}
                      />
                    </div>
                    <div className="my-2">
                      <Col ls={5}>
                        <div className="mb-3">
                          <h6>Property</h6>
                          <span style={{ display: 'block' }}>
                            {inspection?.rent?.property?.title}
                          </span>
                          <span>
                            (ID: {inspection?.rent?.property?.propertyRef})
                          </span>
                        </div>
                        <div className="mb-3">
                          <span>
                            {
                              inspection?.rent?.property?.address
                                ?.houseNoAddress
                            }
                            , {inspection?.rent?.property?.address?.state},{' '}
                            {inspection?.rent?.property?.address?.country}
                          </span>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmitEntering}>
                    <Row>
                      <Col md={12}>
                        <select
                          type="select"
                          name="type"
                          className="form-control"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          required
                        >
                          <option value="MOVE_IN">Move In</option>
                          <option value="MOVE_OUT">Move Out</option>
                          <option value="BI_ANNUAL">Bi Annual</option>
                          <option value="ROUTINE">Routing</option>
                        </select>
                      </Col>
                    </Row>
                    <div className="text-center mt-3">
                      <Button type="submit" color="primary">
                        Start Inspection
                      </Button>
                    </div>
                  </Form>
                </>
              )}
            </CardBody>
          </Card>
        ) : (
          <>
            <Card>
              <CardBody>
                <Link
                  to="#"
                  onClick={() => SetAddColumn(!addColumn)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-header text-center text-success shadow-md font-size-14 font-weight-bold">
                    Create Inspection
                  </div>
                </Link>
              </CardBody>
            </Card>
            <Collapse isOpen={addColumn}>
              <Card>
                <CardBody>
                  <AddInspectionForm updateInspection={updateInspection} />
                </CardBody>
              </Card>
            </Collapse>

            <AvForm onValidSubmit={handleSubmit}>
              {message && <Alert color="success">{message}</Alert>}
              {inspectionsError && (
                <Alert color="danger">{inspectionsError.message}</Alert>
              )}

              <div className="d-flex justify-content-between mb-2">
                <h5>{inspectionData?.type}</h5>
              </div>
              <Row>
                <Col xl={12} className="mx-auto">
                  <div id="accordion">
                    {inspectionField.length > 0 &&
                      inspectionField.map((data) => (
                        <Card key={data.id}>
                          <CardBody>
                            <Card className="mb-2">
                              <CardHeader
                                id="headingOne"
                                className="d-flex justify-content-between"
                              >
                                <Link
                                  to="#"
                                  onClick={() => t_col1(data.title)}
                                  style={{ cursor: 'pointer' }}
                                  className="text-dark"
                                >
                                  <div className="m-0 font-14 d-flex justify-content-between">
                                    <div className="d-flex">
                                      <i
                                        className={
                                          col1
                                            ? 'fas fa-caret-down mr-4'
                                            : 'fas fa-caret-right mr-4'
                                        }
                                      ></i>
                                      <h6
                                        ref={headerNameRef}
                                        className="text-capitalize"
                                      >
                                        {data.title}
                                      </h6>
                                    </div>
                                  </div>
                                </Link>
                                <span>
                                  <span>
                                    <i className="fas fa-pen float-right  "></i>
                                  </span>
                                  <span
                                    onClick={() =>
                                      removeInspectionArea(data.id)
                                    }
                                  >
                                    <i className="ri-indeterminate-circle-line  mr-4 text-danger" />
                                  </span>
                                </span>
                              </CardHeader>
                              <Collapse isOpen={col1 === data.title}>
                                <CardBody>
                                  <Row>
                                    <Col ls={4}>
                                      <h6>Inspection items</h6>
                                    </Col>
                                    <Col ls={4}>
                                      <div className="d-flex justify-content-around">
                                        <label htmlFor="Good" className="mr-1">
                                          Good
                                        </label>
                                        <label
                                          htmlFor="Average"
                                          className="mr-1"
                                        >
                                          Average
                                        </label>
                                        <label htmlFor="Poor" className="mr-1">
                                          Poor
                                        </label>
                                      </div>
                                    </Col>
                                    <Col ls={4}>
                                      <h6>Comment</h6>
                                    </Col>
                                  </Row>
                                  {data.items.length > 0 &&
                                    data.items.map((item) => (
                                      <>
                                        <Row className="mb-1" key={item}>
                                          <Col ls={4}>
                                            <Label className="text-capitalize">
                                              {item}
                                            </Label>
                                          </Col>
                                          <Col ls={4}>
                                            <AvRadioGroup
                                              name={`${data.title}.inspectionItems.${item}.itemState`}
                                              value="GOOD"
                                            >
                                              <Col
                                                sm={12}
                                                className="d-flex justify-content-between"
                                              >
                                                <Col
                                                  ls={4}
                                                  className="d-flex justify-content-center"
                                                >
                                                  <AvRadio value="GOOD" />
                                                </Col>
                                                <Col
                                                  ls={4}
                                                  className="d-flex justify-content-center"
                                                >
                                                  <AvRadio value="AVERAGE" />
                                                </Col>
                                                <Col
                                                  ls={4}
                                                  className="d-flex justify-content-center"
                                                >
                                                  <AvRadio value="POOR" />
                                                </Col>
                                              </Col>
                                            </AvRadioGroup>
                                          </Col>
                                          <Col
                                            ls={4}
                                            className="d-flex align-items-start"
                                          >
                                            <AvField
                                              type="text"
                                              name={`${data.title}.inspectionItems.${item}.comment`}
                                              style={{
                                                background: '#F4F4F4',
                                                border: 'none',
                                              }}
                                            />
                                          </Col>
                                        </Row>

                                        <Row>
                                          <Col xs={12} className="mx-auto mb-4">
                                            <hr className="my-3" />
                                            <DropZone
                                              selectedFiles={data.selectedFiles}
                                              typeName="encodedUpload"
                                              setFile={(files) =>
                                                uploadFIle(
                                                  files,
                                                  data.id,
                                                  data,
                                                  item
                                                )
                                              }
                                            />
                                          </Col>
                                        </Row>
                                      </>
                                    ))}
                                  <hr className="my-3" />
                                  <Row>
                                    <h6 className="ml-2 mb-4">
                                      Inventory Items
                                    </h6>
                                  </Row>
                                  {data.inventories.length > 0 &&
                                    data.inventories.map((inventory) => (
                                      <>
                                        <Row>
                                          <Col ls={4}>
                                            <h6>Items</h6>
                                          </Col>
                                          <Col ls={4}>
                                            <h6>Quantity</h6>
                                          </Col>
                                          <Col ls={4}>
                                            <h6>Comment</h6>
                                          </Col>
                                        </Row>
                                        <Row className="align-items-center mb-2">
                                          <Col ls={4}>
                                            <Label className="text-capitalize">
                                              {' '}
                                              {inventory}{' '}
                                            </Label>
                                          </Col>
                                          <Col
                                            ls={4}
                                            className="d-flex justify-content-between"
                                          >
                                            <AvField
                                              type="number"
                                              name={`${data.title}.inventoryItems.${inventory}.quantity`}
                                              value="0"
                                              min={0}
                                              style={{
                                                background: '#F4F4F4',
                                                border: 'none',
                                              }}
                                            />
                                          </Col>
                                          <Col ls={4} className="d-flex">
                                            <AvField
                                              type="text"
                                              name={`${data.title}.inventoryItems.${inventory}.comment`}
                                              style={{
                                                background: '#F4F4F4',
                                                border: 'none',
                                              }}
                                            />
                                          </Col>
                                        </Row>
                                      </>
                                    ))}
                                </CardBody>
                              </Collapse>
                            </Card>
                          </CardBody>
                        </Card>
                      ))}
                  </div>{' '}
                </Col>
              </Row>
              <Row>
                <Col xl="11 mx-auto mb-4">
                  <AvGroup>
                    <Label htmlFor="comments">General Comment</Label>
                    <AvField
                      type="textarea"
                      name="generalComment"
                      id="comments"
                      required
                      placeholder="Type in your comments"
                      rows="5"
                    />
                  </AvGroup>
                </Col>
              </Row>
              <div className="text-center my-4">
                <Button
                  type="submit"
                  color="success"
                  className="waves-effect pr-5 pl-5"
                >
                  {loading ? 'Submitting ...' : 'Save'}
                </Button>
              </div>
            </AvForm>
          </>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { inspection, loading, message, inspectionsError } = state.Inspections;
  const { rental } = state.Rental;
  return { inspection, loading, message, inspectionsError, rental };
};

export default connect(mapStateToProps, {
  postInspection,
  fetchEachInspection,
})(MoveIn);
