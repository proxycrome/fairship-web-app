import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Collapse,
  CardHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import livingRoom from '../../../assets/images/Living.png';
import profileImage from '../../../assets/images/ProfileImage.svg';
import Boiler from '../../../assets/images/BoilerImage.png';

const PreviewCopy = () => {
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

  return (
    <div className="page-content">
      <Row className="d-flex justify-content-between align-items-center">
        <Button color="link" outline>
          <i className="ri-arrow-left-line ml-3"></i>
          <span className="ml-3">Preview</span>
        </Button>
      </Row>
      <Row className="mb-5 mt-5">
        <Col xl={11} className="mx-auto">
          <Row>
            <img src={livingRoom} alt="living_Room" width="116" height="108" />
            <Col ls={6}>
              <div>
                <h6>Unit Number</h6>
                <p>012</p>
              </div>
              <div>
                <h6>Property</h6>
                <p>Cosy Studio in the heart of Lagos</p>
              </div>
            </Col>
            <Col ls={6}>
              <div>
                <h6>Tenant</h6>
                <p>
                  <img
                    src={profileImage}
                    alt="profile"
                    width="20"
                    height="20"
                  />
                  <span className="co-name mx-2">Robert Williams</span>
                </p>
              </div>
              <div>
                <h6>Inspection Type</h6>
                <p>Move In</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Flooring</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Walls</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Painting</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>10</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Socket</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>20</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Doors</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>6</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Refrigerator</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>2</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Flooring</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Walls</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Painting</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>10</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Socket</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>20</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Doors</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>6</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Refrigerator</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>2</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="door" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Flooring</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="flooring" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Walls</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Good" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="walls" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Painting</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <Col ls={4} className="d-flex justify-content-center">
                            <i
                              className="fas fa-check"
                              style={{ color: '#149509' }}
                            ></i>
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Average" />
                          </Col>
                          <Col ls={4} className="d-flex justify-content-center">
                            <input type="hidden" name="painting" id="Poor" />
                          </Col>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>10</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Socket</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>20</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Doors</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>6</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col ls={4}>Refrigerator</Col>
                        <Col ls={4} className="d-flex justify-content-between">
                          <span>2</span>
                        </Col>
                        <Col ls={4}>
                          <span>Brand new door installed</span>
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
        <Col xl="11 mx-auto mb-4 mt-5">
          <h5>General Comment</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium velit quis tenetur distinctio laborum doloribus commodi,
            repudiandae quas eos, perferendis quo, exercitationem voluptas ipsa
            aliquid iste. Doloremque nesciunt corrupti ipsa!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xl={11} className="mx-auto mb-5">
          <span>Attach image(s)</span>
          <div className="d-flex">
            <div>
              <div className="photo-box mr-2 mb-2 d-flex align-items-center justify-content-center">
                <img src={Boiler} alt="boiler" />
              </div>
              <span
                style={{
                  display: 'block',
                  width: '150px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                Bedroom 1 Water heater
              </span>
            </div>
            <div>
              <div className="photo-box mr-2 mb-2 d-flex align-items-center justify-content-center">
                <img src={Boiler} alt="boiler" />
              </div>
              <span
                style={{
                  display: 'block',
                  width: '150px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                Bedroom 1 Water heater
              </span>
            </div>
            <div>
              <div className="photo-box mr-2 mb-2 d-flex align-items-center justify-content-center">
                <img src={Boiler} alt="boiler" />
              </div>
              <span
                style={{
                  display: 'block',
                  width: '150px',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
              >
                Bedroom 1 Water heater
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={11} className="mx-auto mb-5">
          <h5>Disclaimer</h5>
          <p>
            I the undersigned hereby accept that the above recorder condition of
            the property is accurate and true at the time of inspection/handover
          </p>
        </Col>
      </Row>
      <Row>
        <Col xl={11} className="mx-auto d-flex">
          <Col xl={6} style={{ lineHeight: '0.5' }} className="mb-5">
            <h5 className="mb-4">Signature</h5>
            <div className="sign mt-4"></div>
            <p>David Christopher</p>
            <p>3rd June 2020</p>
            <p>Tenant</p>
          </Col>
          <Col xl={6} style={{ lineHeight: '0.5' }}>
            <div className="sign mt-5"></div>
            <p>Saheed Balogun</p>
            <p>3rd June 2020</p>
            <p>Agent</p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default PreviewCopy;
