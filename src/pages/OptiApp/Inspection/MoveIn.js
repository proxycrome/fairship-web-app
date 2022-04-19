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
  Select,
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

import { fetchRental } from '../../../store/Rental/actions';

import DropZone from '../../../components/Common/imageUpload';

const MoveIn = ({
  inspection,
  loading,
  message,
  inspectionsError,
  fetchRental,
}) => {
  const [selectedFiles, SetSelectedFiles] = useState([]);
  const [type, setType] = useState(null);
  const [rentId, setRentId] = useState(null);
  
  const [inspectionData, setInspectionData] = useState({});
  const [startInspection, setStartInspection] = useState(false);
  const dispatch = useDispatch();

  const headerNameRef = useRef(null);

  const formatData = (data, field, imageUrl) => {
    const inspectionAreas = {
      name: field,
    };
    inspectionAreas.inspectionItems = [];
    inspectionAreas.inventoryItems = [];

    for (const [key, value] of Object.entries(data[field].inspectionItems)) {
      console.log(...imageUrl);
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
    let formData = { ...inspectionData };
    formData.generalComment = values.generalComment;
    formData.inspectionAreas = [];
    formData.inspectionAreas.push(formatData(values, 'kitchen', selectedFiles));
    formData.inspectionAreas.push(formatData(values, 'bedroom', selectedFiles));
    formData.inspectionAreas.push(
      formatData(values, 'sitting_room', selectedFiles)
    );
    dispatch(postInspection(formData));
  };

  const [col1, setCol1] = useState(true);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);

  const t_col1 = () => {
    setCol1(!col1);
  };

  const t_col2 = () => {
    setCol2(!col2);
  };

  const t_col3 = () => {
    setCol3(!col3);
  };

  const handleSubmitEntering = (event, values) => {
    setStartInspection(true);
    setInspectionData({ ...values });
    console.log(values);
  };

  useEffect(() => {
   
    let filter = 'PROCESSING';
    if(type === "MOVE_OUT"){
      filter = "CURRENT"
    }
    fetchRental(filter);
  }, [type]);

  return (
    <div className="page-content">
      <Container fluid>
        {!startInspection ? (
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmitEntering}>
                <Row>
                  <Col md={6}>
                    <select
                      type="select"
                      name="type"
                      className="form-control"
                      // value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value="MOVE_IN">Move In</option>
                      <option value="MOVE_OUT">Move Out</option>
                    </select>
                  </Col>
                  <Col md={6}>
                    <select
                      type="select"
                      name="rentId"
                      className="form-control"
                      value={rentId}
                      onChange={(e) => setRentId(e.target.value)}
                      required
                    >
                      <option value="MOVE_IN">Move In</option>
                      <option value="MOVE_OUT">Move Out</option>
                    </select>
                  </Col>
                  
                </Row>
                <div className="text-center mt-3">
                  <Button type="submit" color="primary">
                    Start Inspection
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        ) : (
          <AvForm onValidSubmit={handleSubmit}>
            {message && <Alert color="success">{message}</Alert>}
            {inspectionsError && (
              <Alert color="danger">{inspectionsError}</Alert>
            )}

            <div className="d-flex justify-content-between mb-2">
              <h5>{inspectionData?.type}</h5>
              <Link to="inspection">
                <button className="btn btn-light btn-sm px-3"> Back </button>
              </Link>
            </div>
            <Row no-gutter>
              <Col xl={12} className="mx-auto">
                <Card>
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-2">
                        <Link
                          to="#"
                          onClick={t_col1}
                          style={{ cursor: 'pointer' }}
                          className="text-dark"
                        >
                          <CardHeader id="headingOne">
                            <div className="m-0 font-14 d-flex justify-content-between">
                              <div className="d-flex">
                                <i
                                  className={
                                    col1
                                      ? 'fas fa-caret-down mr-4'
                                      : 'fas fa-caret-right mr-4'
                                  }
                                ></i>
                                <h6 ref={headerNameRef}>Kitchen</h6>
                              </div>
                              <div>
                                <i className="ri-indeterminate-circle-line float-right"></i>
                                <i className="fas fa-pen float-right mr-4"></i>
                              </div>
                            </div>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col1}>
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
                                  <label htmlFor="Average" className="mr-1">
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
                            <Row className="mb-1">
                              <Col ls={4}>
                                <Label> Door </Label>
                              </Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="kitchen.inspectionItems.door.itemState"
                                  value="GOOD"
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
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="kitchen.inspectionItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>
                                <Label> Flooring </Label>
                              </Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="kitchen.inspectionItems.flooring.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
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
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="kitchen.inspectionItems.flooring.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>
                                <Label> Walls </Label>
                              </Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="kitchen.inspectionItems.walls.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
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
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="kitchen.inspectionItems.walls.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>
                                <Label> Painting </Label>
                              </Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="kitchen.inspectionItems.painting.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
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
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="kitchen.inspectionItems.painting.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className="ml-2 mb-4">Inventory Items</h6>
                            </Row>
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
                                <Label> Door </Label>
                              </Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="kitchen.inventoryItems.door.quantity"
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
                                  name="kitchen.inventoryItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>
                                <Label> Socket </Label>
                              </Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="kitchen.inventoryItems.socket.quantity"
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
                                  name="kitchen.inventoryItems.socket.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>
                                <Label> Toilet </Label>
                              </Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="kitchen.inventoryItems.toilet.quantity"
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
                                  name="kitchen.inventoryItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="mb-2">
                        <Link
                          to="#"
                          onClick={t_col2}
                          style={{ cursor: 'pointer' }}
                          className="text-dark"
                        >
                          <CardHeader id="headingTwo">
                            <h6 className="m-0 font-14">
                              <i
                                className={
                                  col2
                                    ? 'fas fa-caret-down mr-4'
                                    : 'fas fa-caret-right mr-4'
                                }
                              ></i>
                              Sitting Room
                              <i className="ri-indeterminate-circle-line float-right"></i>
                              <i className="fas fa-pen float-right mr-4"></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col2}>
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
                                  <label htmlFor="Average" className="mr-1">
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
                            <Row className="mb-1">
                              <Col ls={4}>Door</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="sitting_room.inspectionItems.door.itemState"
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
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="sitting_room.inspectionItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Flooring</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="sitting_room.inspectionItems.flooring.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="sitting_room.inspectionItems.flooring.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Walls</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="sitting_room.inspectionItems.walls.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="sitting_room.inspectionItems.walls.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Painting</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="sitting_room.inspectionItems.painting.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="sitting_room.inspectionItems.painting.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className="ml-2 mb-4">Inventory Items</h6>
                            </Row>
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
                              <Col ls={4}>Door</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="sitting_room.inventoryItems.door.quantity"
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
                                  name="sitting_room.inventoryItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>Socket</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="sitting_room.inventoryItems.socket.quantity"
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
                                  name="sitting_room.inventoryItems.socket.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>Doors</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="sitting_room.inventoryItems.toilet.quantity"
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
                                  name="sitting_room.inventoryItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Collapse>{' '}
                      </Card>
                      <Card className="mb-2">
                        <Link
                          to="#"
                          onClick={t_col3}
                          style={{ cursor: 'pointer' }}
                          className="text-dark"
                        >
                          <CardHeader id="headingThree">
                            <h6 className="m-0 font-14">
                              <i
                                className={
                                  col3
                                    ? 'fas fa-caret-down mr-4'
                                    : 'fas fa-caret-right mr-4'
                                }
                              ></i>
                              Bedroom
                              <i className="ri-indeterminate-circle-line float-right"></i>
                              <i className="fas fa-pen float-right mr-4"></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={col3}>
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
                                  <label htmlFor="Average" className="mr-1">
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
                            <Row className="mb-1">
                              <Col ls={4}>Door</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="bedroom.inspectionItems.door.itemState"
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
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="bedroom.inspectionItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Flooring</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="bedroom.inspectionItems.flooring.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="bedroom.inspectionItems.flooring.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Walls</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="bedroom.inspectionItems.walls.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="bedroom.inspectionItems.walls.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-1">
                              <Col ls={4}>Painting</Col>
                              <Col ls={4}>
                                <AvRadioGroup
                                  name="bedroom.inspectionItems.painting.itemState"
                                  value="GOOD"
                                >
                                  <Col className="d-flex justify-content-between">
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Good" value="GOOD" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Average" value="AVERAGE" />
                                    </Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-center"
                                    >
                                      <AvRadio id="Poor" value="POOR" />
                                    </Col>
                                  </Col>
                                </AvRadioGroup>
                              </Col>
                              <Col ls={4} className="d-flex align-items-start">
                                <AvField
                                  type="text"
                                  name="bedroom.inspectionItems.painting.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className="ml-2 mb-4">Inventory Items</h6>
                            </Row>
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
                              <Col ls={4}>Door</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="bedroom.inventoryItems.door.quantity"
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
                                  name="comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>Socket</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="bedroom.inventoryItems.socket.quantity"
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
                                  name="bedroom.inventoryItems.socket.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="align-items-center mb-2">
                              <Col ls={4}>Doors</Col>
                              <Col
                                ls={4}
                                className="d-flex justify-content-between"
                              >
                                <AvField
                                  type="number"
                                  name="bedroom.inventoryItems.door.quantity"
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
                                  name="bedroom.inventoryItems.door.comment"
                                  style={{
                                    background: '#F4F4F4',
                                    border: 'none',
                                  }}
                                />
                              </Col>
                            </Row>
                          </CardBody>
                        </Collapse>{' '}
                      </Card>
                    </div>
                  </CardBody>
                </Card>
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
            <Row>
              <Col xl={12} className="mx-auto mb-4">
                <DropZone
                  selectedFiles={selectedFiles}
                  typeName="encodedUpload"
                  setFile={(files) => SetSelectedFiles(files)}
                />
              </Col>
            </Row>
            <Row>
              <Col xl={3} className="mx-auto my-4">
                <Button
                  type="submit"
                  color="success"
                  className="waves-effect pr-5 pl-5"
                >
                  {loading ? 'Submitting ...' : 'Save'}
                </Button>
              </Col>
            </Row>
          </AvForm>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { inspection, loading, message, inspectionsError } = state.Inspections;
  const {  } = state.Rental;
  return { inspection, loading, message, inspectionsError };
};

export default connect(mapStateToProps, { postInspection, fetchRental })(
  MoveIn
);
