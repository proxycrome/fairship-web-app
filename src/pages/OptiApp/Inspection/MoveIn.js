import React, { useState, useRef, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  CardHeader,
  Button,
  Label
} from 'reactstrap';
import { AvForm, AvRadio, AvField, AvRadioGroup, AvGroup, } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { postInspection } from '../../../store/inspection/actions';
import SendToTenant from './SendToTenant';

const MoveIn = ({BacktoHome, postInspection}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [inspectionName, setInspectionName] = useState("");
  const dispatch = useDispatch();

  const headerNameRef = useRef(null);

  useEffect(() => {
    const inspectionAreaName = headerNameRef.current.innerHTML
    setInspectionName(inspectionAreaName)
  }, []);

  const handleSubmit = (event, values) => {
    console.log(values);

    const formData = {
      generalComment: values.generalComment,
      inspectionAreas: [
        {
          inspectionItems: [
            {
              comment: values.inspectionItemComment1,
              images: [
                {
                  encodedUpload: ""
                }
              ],
              itemName: values.inspectionItemName1,
              itemState: values.itemState1
            }
          ],
          inventoryItems: [
            {
              comment: values.inventoryItemComment1,
              itemName: values.inventoryItemName1,
              quantity: +values.quantity1
            }
          ],
          name: inspectionName
        }
      ],
      rendId: 0,
      type: "MOVE_IN"
    }
    // dispatch(postInspection(formData))
    console.log(formData);
    
  }
 
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
      <AvForm onValidSubmit={handleSubmit}>
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
                        <div className="m-0 font-14 d-flex justify-content-between">
                          <div className='d-flex'>
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
                          <AvField type="select" name="inspectionItemName1">
                            <option>Door</option>
                            <option>Flooring</option>
                            <option>Walls</option>
                            <option>Painting</option>
                          </AvField>
                          </Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState1">
                              <Col sm={12}
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="inspectionItemComment1"
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
                        <Row className="mb-1">
                          <Col ls={4}>
                            <AvField type="select" name="inspectionItemName2">
                              <option>Door</option>
                              <option>Flooring</option>
                              <option>Walls</option>
                              <option>Painting</option>
                            </AvField>
                          </Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState2">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="inspectionItemComment2"
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
                        <Row className="mb-1">
                          <Col ls={4}>
                            <AvField type="select" name="inspectionItemName3">
                              <option>Door</option>
                              <option>Flooring</option>
                              <option>Walls</option>
                              <option>Painting</option>
                            </AvField>
                          </Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState3">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="inspectionItemComment3"
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
                        <Row className="mb-1">
                          <Col ls={4}>
                            <AvField type="select" name="inspectionItemName4">
                              <option>Door</option>
                              <option>Flooring</option>
                              <option>Walls</option>
                              <option>Painting</option>
                            </AvField></Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState4">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="inspectionItemComment4"
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
                          <Col ls={4}>
                            <AvField type="select" name="inventoryItemName1">
                              <option>Door</option>
                              <option>Socket</option>
                              <option>Doors</option>
                              <option>Refrigerator</option>
                            </AvField>
                          </Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <AvField
                              type="number"
                              name="quantity1"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="inventoryItemComment1"
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
                          <Col ls={4}>
                            <AvField type="select" name="inventoryItemName2">
                              <option>Door</option>
                              <option>Socket</option>
                              <option>Doors</option>
                              <option>Refrigerator</option>
                            </AvField>
                          </Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <AvField
                              type="number"
                              name="quantity2"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="inventoryItemComment2"
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
                          <Col ls={4}>
                            <AvField type="select" name="inventoryItemName3">
                              <option>Door</option>
                              <option>Socket</option>
                              <option>Doors</option>
                              <option>Refrigerator</option>
                            </AvField>
                          </Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <AvField
                              type="number"
                              name="quantity3"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="inventoryItemComment3"
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
                          <Col ls={4}>
                            <AvField type="select" name="inventoryItemName4">
                              <option>Door</option>
                              <option>Socket</option>
                              <option>Doors</option>
                              <option>Refrigerator</option>
                            </AvField>
                          </Col>
                          <Col
                            ls={4}
                            className="d-flex justify-content-between"
                          >
                            <AvField
                              type="number"
                              name="quantity4"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="inventoryItemComment4"
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
                        <Row className="mb-1">
                          <Col ls={4}>Door</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Door">
                              <Col sm={12}
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Flooring</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Flooring">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Walls</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Walls">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Painting</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Painting">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                          Bedroom 1
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
                            <AvRadioGroup name="itemState-Door">
                              <Col sm={12}
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Flooring</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Flooring">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Walls</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Walls">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                        <Row className="mb-1">
                          <Col ls={4}>Painting</Col>
                          <Col ls={4}>
                            <AvRadioGroup name="itemState-Painting">
                              <Col
                                className="d-flex justify-content-between"
                              >
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Good" value="Good" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Average" value="Average" />
                                </Col>
                                <Col
                                  ls={4}
                                  className="d-flex justify-content-center"
                                >
                                  <AvRadio id="Poor" value="Poor" />
                                </Col>  
                              </Col>
                            </AvRadioGroup>
                          </Col>
                          <Col ls={4} className="d-flex align-items-start">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
                            <AvField
                              type="number"
                              name="quantity"
                              style={{ background: '#F4F4F4', border: 'none' }}
                            />
                          </Col>
                          <Col ls={4} className="d-flex">
                            <AvField
                              type="text"
                              name="comment"
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
            <AvGroup>
              <Label htmlFor="comments">General Comment</Label>
              <AvField
                type="textarea"
                name="generalComment"
                id="comments"
                placeholder="Type in your comments"
                rows="5"
              />
            </AvGroup>
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
              type="submit"
              color="success"
              className="waves-effect pr-5 pl-5"
              onClick={() => setIsClicked(!isClicked)}
            >
              Save
            </Button>
          </Col>
        </Row>
      </AvForm>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {inspectionData, loading} = state.Inspections;
  return {inspectionData, loading}
}

export default connect(mapStateToProps, {postInspection})(MoveIn);
