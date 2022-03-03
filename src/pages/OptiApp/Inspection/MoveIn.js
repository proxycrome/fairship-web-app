import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  CardHeader,
  Button,
  FormGroup,
  Input,
  Label,
  Form,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SendToTenant from './SendToTenant';

const MoveIn = ({BacktoHome}) => {
  const [isClicked, setIsClicked] = useState(false);
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

  if (isClicked) {
    return <SendToTenant BacktoHome={BacktoHome}/>;
  }

  return (
    <div className="page-content">
      <h5 className="ml-5 mb-2">Move In</h5>
      <Form>
        <Row>
          <Col xl={11} className="mx-auto">
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
                        <h6 className="m-0 font-14">
                          <i
                            className={
                              col1
                                ? 'fas fa-caret-down mr-4'
                                : 'fas fa-caret-right mr-4'
                            }
                          ></i>
                          Kitchen
                          <i className="ri-indeterminate-circle-line float-right"></i>
                          <i className="fas fa-pen float-right mr-4"></i>
                        </h6>
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
                        <Row className="align-items-center mb-1">
                          <Col ls={4}>Door</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Flooring</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="flooring"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="flooring-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Walls</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="walls-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Painting</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="painting"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="painting-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-add-circle-line"></i>
                            </Button>
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
                            <input
                              type="number"
                              name="door"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Socket</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="socket"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="socket-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Doors</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="doors"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="doors-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Refrigerator</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="refrigerator"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="refrigerator-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-add-circle-line"></i>
                            </Button>
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
                        <Row className="align-items-center mb-1">
                          <Col ls={4}>Door</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Flooring</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="flooring"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="flooring-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Walls</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="walls-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Painting</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="painting"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="painting-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-add-circle-line"></i>
                            </Button>
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
                            <input
                              type="number"
                              name="door"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Socket</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="socket"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="socket-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Doors</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="doors"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="doors-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Refrigerator</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="refrigerator"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="refrigerator-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-add-circle-line"></i>
                            </Button>
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
                          Dinning room
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
                        <Row className="align-items-center mb-1">
                          <Col ls={4}>Door</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="door" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Flooring</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="flooring"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="flooring" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="flooring-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Walls</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Average" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="walls" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="walls-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Painting</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Good" />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input
                                type="radio"
                                name="painting"
                                id="Average"
                              />
                            </Col>
                            <Col
                              ls={4}
                              className="d-flex justify-content-center"
                            >
                              <input type="radio" name="painting" id="Poor" />
                            </Col>
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="painting-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i
                                className="ri-add-circle-line"
                                style={{ color: '#149509' }}
                              ></i>
                            </Button>
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
                            <input
                              type="number"
                              name="door"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="door-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Socket</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="socket"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="socket-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Doors</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="doors"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="doors-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                          <Col ls={4}>Refrigerator</Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <input
                              type="number"
                              name="refrigerator"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4}>
                            <input
                              type="text"
                              name="refrigerator-comment"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i className="ri-indeterminate-circle-line"></i>
                            </Button>
                            <Button
                              color="link"
                              outline
                              className="waves-effect"
                            >
                              <i
                                className="ri-add-circle-line"
                                style={{ color: '#149509' }}
                              ></i>
                            </Button>
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
            <Button
              color="success"
              outline
              block
              className="waves-effect d-flex align-items-center justify-content-center"
            >
              <i className="ri-add-circle-line font-size-20 mr-2"></i>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xl="11 mx-auto mb-4">
            <FormGroup>
              <Label htmlFor="comments">General Comment</Label>
              <Input
                type="textarea"
                id="comments"
                placeholder="Type in your comments"
                rows="5"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xl={11} className="mx-auto mb-4">
            <span>Attach image(s)</span>
            <div className="d-flex">
              <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                <i className="ri-camera-line font-size-24"></i>
              </div>
              <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                <i className="ri-camera-line font-size-24"></i>
              </div>
              <div className="photo-box mr-2 d-flex align-items-center justify-content-center">
                <i className="ri-camera-line font-size-24"></i>
              </div>
              <Button
                color="link"
                outline
                className="waves-effect d-flex align-items-center justify-content-center"
              >
                <i className="ri-add-circle-line font-size-20 mr-2"></i>
                Add more
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={3} className="mx-auto my-4">
            <Button
              color="success"
              className="waves-effect pr-5 pl-5"
              onClick={() => setIsClicked(!isClicked)}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MoveIn;
