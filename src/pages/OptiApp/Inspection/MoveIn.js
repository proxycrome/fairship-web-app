import React, { useState, useRef, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  Input,
  Button,
  Label,
  Alert,
  Container,
  Form,
} from 'reactstrap';
import {
  AvForm,
  AvRadio,
  AvField,
  AvRadioGroup,
  AvGroup,
} from 'availity-reactstrap-validation';
import { Link, withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import AddInspectionForm from './createFieldForm';

import {
  postInspection,
  fetchRentalRecommendation,
  fetchEachInspection,
} from '../../../store/actions';

import DropZone from '../../../components/Common/inspectUpload';

const MoveIn = ({
  rentalId,
  inspection,
  loading,
  message,
  inspectionsError,
  fetchRentalRecommendation,
  fetchEachInspection,
  match,
  history,
  location,
}) => {
  // const [selectedFiles, SetSelectedFiles] = useState([]);
  const [type, setType] = useState('MOVE_IN');
  // const [newInspection, setNewInspection] = useState('');
  const [prevInspections, setPrevInspections] = useState({});

  const [addColumn, SetAddColumn] = useState(false);
  const [inspectionField, SetInspectionField] = useState([]);
  // const [rentId, setRentId] = useState('');
  const [newInspect, setNewInspect] = useState('');
  const [addInspectColumn, setAddInspectColumn] = useState(false);
  const [addInventColumn, setAddInventColumn] = useState(false);
  const [newInvent, setNewInvent] = useState('');
  const [imageError, SetImageError] = useState(false);

  // const [inspectionData, setInspectionData] = useState({});
  const [startInspection, setStartInspection] = useState(false);
  const dispatch = useDispatch();

  const headerNameRef = useRef(null);

  const inspectId = +location.pathname.split('/')[3];

  const uploadFIle = (file, areaId, itemId) => {
    const ans = inspectionField.map((data) => {
      if (data.id === areaId) {
        const item = data.items.find((data) => data.id === itemId);
        item.images = file;
      }
      return data;
    });
    SetInspectionField(ans);
  };

  const addInspectionItem = (event, areaId) => {
    event.preventDefault();
    event.stopPropagation();
    const newItems = {
      id: new Date().getTime().toString(),
      itemName: newInspect,
      // images: [],
    };

    const foundItem = inspectionField.find((item) => item.id === areaId);
    const itemIndex = inspectionField.indexOf(foundItem);
    inspectionField.splice(itemIndex, 1);
    const foundItems = { ...foundItem };
    foundItems.items = [foundItem.items || []];
    foundItems.items = foundItems.items.flatMap((el) => {
      return el.length <= 0 ? [] : el;
    });
    foundItems.items.push(newItems);
    // console.log(foundItems);
    setAddInspectColumn(false);
    SetInspectionField([...inspectionField, foundItems]);
    setNewInspect('');
  };

  const addInventoryItem = (event, areaId) => {
    event.preventDefault();
    event.stopPropagation();
    const newItems = {
      id: new Date().getTime().toString(),
      itemName: newInvent,
    };

    const foundItem = inspectionField.find((item) => item.id === areaId);
    const itemIndex = inspectionField.indexOf(foundItem);
    inspectionField.splice(itemIndex, 1);
    const foundItems = { ...foundItem };
    foundItems.inventories = [foundItem.inventories || []];
    foundItems.inventories = foundItems.inventories.flatMap((el) => {
      return el.length <= 0 ? [] : el;
    });
    foundItems.inventories.push(newItems);
    // console.log(foundItems);
    setAddInventColumn(false);
    SetInspectionField([...inspectionField, foundItems]);
    setNewInvent('');
  };

  const deleteInspectionArea = (areaId) => {
    const newInspectionField = inspectionField.filter(
      (item) => item.id !== areaId
    );
    SetInspectionField([...newInspectionField]);
  };

  const deleteInspectionItem = (areaId, itemId) => {
    const foundItem = inspectionField.find((item) => item.id === areaId);
    const itemIndex = inspectionField.indexOf(foundItem);
    inspectionField.splice(itemIndex, 1);
    const remItems = foundItem.items.filter((item) => item.id !== itemId);
    foundItem.items = remItems;
    SetInspectionField([...inspectionField, foundItem]);
  };

  const deleteInventoryItem = (areaId, inventoryId) => {
    const foundItem = inspectionField.find((item) => item.id === areaId);
    const itemIndex = inspectionField.indexOf(foundItem);
    inspectionField.splice(itemIndex, 1);
    const remInventories = foundItem.inventories.filter(
      (item) => item.id !== inventoryId
    );
    foundItem.inventories = remInventories;
    SetInspectionField([...inspectionField, foundItem]);
  };

  // const formatData = (data, field, imageUrl) => {
  //   const inspectionAreas = {
  //     name: field,
  //   };
  //   inspectionAreas.inspectionItems = [];
  //   inspectionAreas.inventoryItems = [];

  //   for (const [key, value] of Object.entries(data[field].inspectionItems)) {
  //     const newData = { ...value };
  //     newData.itemName = key;
  //     newData.images = imageUrl;
  //     inspectionAreas.inspectionItems.push(newData);
  //   }

  //   for (const [key, value] of Object.entries(data[field].inventoryItems)) {
  //     const newData = { ...value, quantity: Number(value.quantity) };
  //     newData.itemName = key;
  //     inspectionAreas.inventoryItems.push(newData);
  //   }
  //   return inspectionAreas;
  // };

  const handleSubmit = (event, values) => {
    // console.log(values);
    SetImageError(false);
    const formData = {};
    formData.type = type;
    formData.rentId = rentalId.id;
    formData.inspectionAreas = [];
    for (const [key, value] of Object.entries(values)) {
      if (key === 'generalComment') {
        formData.generalComment = values[key];
      } else {
        let inspectionArea = {};
        inspectionArea.name = key;
        inspectionArea.inspectionItems = [];
        inspectionArea.inventoryItems = [];
        for (const val of value.inspectionItems) {
          for (const [key1, value1] of Object.entries(val)) {
            let inspectionItem = {
              itemName: key1,
              ...value1,
            };
            inspectionArea.inspectionItems.push(inspectionItem);
          }
        }

        if (value.inventoryItems) {
          for (const val of value.inventoryItems) {
            for (const [key1, value1] of Object.entries(val)) {
              let inventoryItem = {
                itemName: key1,
                ...value1,
              };
              inspectionArea.inventoryItems.push(inventoryItem);
            }
          }
        }
        formData.inspectionAreas.push(inspectionArea);
      }
    }
    const cloneFormData = { ...formData };
    cloneFormData.inspectionAreas.forEach((ele, index) => {
      ele.inspectionItems.forEach((e, i) => {
        cloneFormData.inspectionAreas[index].inspectionItems[i].images =
          inspectionField[index].items[i]?.images;
        // e.images = inspectionField[index].items[i].images;
      });
    });
    // console.log(cloneFormData);
    dispatch(postInspection(cloneFormData));
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
      id: new Date().getTime().toString(),
      title: values.title,
      // items: values.Inspection,
      // inventories: values.Inventory,
      // selectedFiles: [],
    };
    SetAddColumn(false);
    SetInspectionField([...inspectionField, newInspection]);
  };

  // const removeInspectionArea = (id) => {
  //   let result = inspectionField.filter((data) => data.id !== id);
  //   SetInspectionField(result);
  // };

  useEffect(() => {
    if (match.params.id) {
      fetchRentalRecommendation(match.params.id);
    }
    if (inspectId) {
      fetchEachInspection(inspectId);
    }
  }, [
    match.params.id,
    inspectId,
    fetchEachInspection,
    fetchRentalRecommendation,
  ]);

  console.log(match, location)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        history.push('/inspection');
      }, 3000);
    }
  }, [history, message]);

  // console.log(inspection);

  useEffect(() => {
    if (inspection?.approvalStatus !== "APPROVED") {
      const oldInspections = inspection?.inspectionAreas?.map((area, i) => {
        return {
          id: area.id,
          title: area.name,
          items: area.inspectionItems.map((item) => {
            const { images, ...others } = item;
            return { ...others };
          }),
          inventories: area.inventoryItems,
        };
      });

      SetInspectionField(oldInspections);
    }
    if( inspection?.approvalStatus === "APPROVED") {
      SetInspectionField([]);
    }
    SetInspectionField([]);  
  }, [inspection]);

  useEffect(() => {
    let prevInspection = {};
    if(inspection?.approvalStatus !== "APPROVED") { 
      const oldInspections = inspection?.inspectionAreas?.forEach((area, i) => {
        prevInspection = {
          ...prevInspection,
          generalComment: inspection.generalComment,
          [area.name]: {
            inspectionItems: {
              ...area.inspectionItems.map((ins) => {
                const { images, id, itemName, ...others } = ins;
                return {
                  [ins.itemName]: others,
                };
              }),
            },
            inventoryItems: {
              ...area.inventoryItems.map((inv) => {
                const { id, itemName, ...others } = inv;
                return {
                  [inv.itemName]: others,
                };
              }),
            },
          },
        };
      });
    }
    setPrevInspections(prevInspection);
  }, [inspection]);

  // console.log(prevInspections);
  // console.log(inspectionField);

  // // console.log(inspection);
  return (
    <div className="page-content">
      <Container fluid>
        <Link to="/inspection">
          <button className="btn btn-success btn-sm px-3 mb-2"> Back </button>
        </Link>
        {imageError && (
          <Alert color="danger" className="text-center">
            Atleast an image is required in each item
          </Alert>
        )}
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
                        src={rentalId?.property?.indexImage}
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
                            {rentalId?.property?.parentProperty?.title}
                          </span>
                          <span style={{ display: 'block' }}>
                            {rentalId?.property?.title}
                          </span>
                          <span>(ID: {rentalId?.property?.propertyRef})</span>
                        </div>
                        <div className="mb-3">
                          <span>
                            {rentalId?.property?.address?.houseNoAddress},{' '}
                            {rentalId?.property?.address?.state},{' '}
                            {rentalId?.property?.address?.country}
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
                  {inspectionField?.length === 0 ? (
                    <div className="card-header text-center text-success shadow-md font-size-14 font-weight-bold">
                      Create Inspection
                    </div>
                  ) : (
                    <div className="card-header text-center text-success shadow-md font-size-14 font-weight-bold">
                      Add More Inspection Areas
                    </div>
                  )}
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

            <AvForm onValidSubmit={handleSubmit} model={prevInspections}>
              {message && <Alert color="success">{message}</Alert>}
              {inspectionsError && (
                <Alert color="danger">{inspectionsError.message}</Alert>
              )}
              <Row>
                <Col xl={12} className="mx-auto">
                  <div id="accordion">
                    {inspectionField?.length > 0 &&
                      inspectionField?.map((data) => (
                        <Card key={data.id}>
                          <CardBody>
                            <Card className="mb-2">
                              <CardBody>
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
                                    <div>
                                      <span
                                        className="ml-4 text-danger float-right"
                                        onClick={() =>
                                          deleteInspectionArea(data.id)
                                        }
                                      >
                                        <i className="fas fa-trash font-size-12 "></i>
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                                <Collapse isOpen={col1 === data.title}>
                                  <CardBody>
                                    <Row>
                                      <h6 className="ml-2 mb-4">
                                        Inspection Items
                                      </h6>
                                    </Row>
                                    {data?.items?.length > 0 &&
                                      data?.items?.map((item, index) => (
                                        <div key={item.id}>
                                          <Row>
                                            <Col ls={4}>
                                              <h6>Items</h6>
                                            </Col>
                                            <Col ls={4}>
                                              <div className="d-flex justify-content-around">
                                                <label
                                                  htmlFor="Good"
                                                  className="mr-1"
                                                >
                                                  Good
                                                </label>
                                                <label
                                                  htmlFor="Average"
                                                  className="mr-1"
                                                >
                                                  Average
                                                </label>
                                                <label
                                                  htmlFor="Poor"
                                                  className="mr-1"
                                                >
                                                  Poor
                                                </label>
                                              </div>
                                            </Col>
                                            <Col ls={4}>
                                              <h6>Comment</h6>
                                            </Col>
                                          </Row>
                                          <Row className="mb-1">
                                            <Col ls={4}>
                                              <Label className="text-capitalize">
                                                {item.itemName}
                                              </Label>
                                            </Col>
                                            <Col ls={4}>
                                              <AvRadioGroup
                                                name={`${data.title}.inspectionItems[${index}].${item.itemName}.itemState`}
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
                                                name={`${data.title}.inspectionItems[${index}].${item.itemName}.comment`}
                                                style={{
                                                  background: '#F4F4F4',
                                                  border: 'none',
                                                }}
                                              />
                                              <span
                                                className="ml-4 text-danger float-right"
                                                onClick={() =>
                                                  deleteInspectionItem(
                                                    data.id,
                                                    item.id
                                                  )
                                                }
                                                style={{ cursor: 'pointer' }}
                                              >
                                                <i className="fas fa-trash font-size-12 "></i>
                                              </span>
                                            </Col>
                                          </Row>

                                          <Row>
                                            <Col
                                              xs={12}
                                              className="mx-auto mb-4"
                                            >
                                              <hr className="my-3" />
                                              <DropZone
                                                selectedFiles={
                                                  data.selectedFiles
                                                }
                                                typeName="encodedUpload"
                                                setFile={(files) =>
                                                  uploadFIle(
                                                    files,
                                                    data.id,
                                                    item.id
                                                  )
                                                }
                                              />
                                            </Col>
                                          </Row>
                                        </div>
                                      ))}
                                    <Col xs={12}>
                                      <Collapse isOpen={addInspectColumn}>
                                        <div className="d-flex mb-4">
                                          <Col xs={4}>
                                            <Input
                                              name="newInspect"
                                              className="form-control"
                                              value={newInspect}
                                              onChange={(e) =>
                                                setNewInspect(e.target.value)
                                              }
                                              placeholder="Inspection item"
                                            />
                                          </Col>
                                          <Col xs={4}>
                                            <Button
                                              type="submit"
                                              color="primary"
                                              onClick={(event) =>
                                                addInspectionItem(
                                                  event,
                                                  data.id
                                                )
                                              }
                                            >
                                              Add Item
                                            </Button>
                                          </Col>
                                        </div>
                                      </Collapse>
                                    </Col>
                                    <Col xs={12}>
                                      <Button
                                        type="button"
                                        color="success"
                                        outline
                                        block
                                        className="waves-effect d-flex align-items-center justify-content-center"
                                        onClick={() =>
                                          setAddInspectColumn(!addInspectColumn)
                                        }
                                      >
                                        <i className="ri-add-circle-line font-size-20 mr-2"></i>
                                        Add Inspection Items
                                      </Button>
                                    </Col>
                                    <hr className="my-3" />
                                    <Row>
                                      <h6 className="ml-2 mb-4">
                                        Inventory Items
                                      </h6>
                                    </Row>
                                    {data?.inventories?.length > 0 &&
                                      data?.inventories?.map(
                                        (inventory, index) => (
                                          <div key={inventory.id}>
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
                                                  {inventory.itemName}{' '}
                                                </Label>
                                              </Col>
                                              <Col
                                                ls={4}
                                                className="d-flex justify-content-between"
                                              >
                                                <AvField
                                                  type="number"
                                                  name={`${data.title}.inventoryItems[${index}].${inventory.itemName}.quantity`}
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
                                                  name={`${data.title}.inventoryItems[${index}].${inventory.itemName}.comment`}
                                                  style={{
                                                    background: '#F4F4F4',
                                                    border: 'none',
                                                  }}
                                                />
                                                <span
                                                  className="ml-4 text-danger float-right"
                                                  onClick={() =>
                                                    deleteInventoryItem(
                                                      data.id,
                                                      inventory.id
                                                    )
                                                  }
                                                  style={{ cursor: 'pointer' }}
                                                >
                                                  <i className="fas fa-trash font-size-12 "></i>
                                                </span>
                                              </Col>
                                            </Row>
                                          </div>
                                        )
                                      )}
                                    <Col xs={12}>
                                      <Collapse isOpen={addInventColumn}>
                                        <div className="d-flex mb-4">
                                          <Col xs={4}>
                                            <Input
                                              name="newInvent"
                                              className="form-control"
                                              value={newInvent}
                                              onChange={(e) =>
                                                setNewInvent(e.target.value)
                                              }
                                              placeholder="Inventory item"
                                            />
                                          </Col>
                                          <Col xs={4}>
                                            <Button
                                              type="submit"
                                              color="primary"
                                              onClick={(event) =>
                                                addInventoryItem(event, data.id)
                                              }
                                            >
                                              Add Item
                                            </Button>
                                          </Col>
                                        </div>
                                      </Collapse>
                                    </Col>
                                    <Col xs={12}>
                                      <Button
                                        type="button"
                                        color="success"
                                        outline
                                        block
                                        className="waves-effect d-flex align-items-center justify-content-center"
                                        onClick={() =>
                                          setAddInventColumn(!addInventColumn)
                                        }
                                      >
                                        <i className="ri-add-circle-line font-size-20 mr-2"></i>
                                        Add Inventory Items
                                      </Button>
                                    </Col>
                                  </CardBody>
                                </Collapse>
                              </CardBody>
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
  const { rentalId } = state.PreviewReducer;
  return { inspection, loading, message, inspectionsError, rentalId };
};

export default withRouter(
  connect(mapStateToProps, {
    postInspection,
    fetchRentalRecommendation,
    fetchEachInspection,
  })(MoveIn)
);
