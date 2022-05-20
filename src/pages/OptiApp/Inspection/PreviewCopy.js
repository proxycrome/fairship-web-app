import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Alert,
  Collapse,
  CardHeader,
} from 'reactstrap';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Boiler from '../../../assets/images/BoilerImage.png';
import { fetchEachInspection } from '../../../store/inspection/actions';

const PreviewCopy = ({
  match,
  fetchEachInspection,
  loading,
  inspection,
  inspectionsError,
}) => {
  const [col1, setCol1] = useState(true);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);

  const t_col1 = (val) => {
    if (col1 === val) {
      setCol1('');
    } else {
      setCol1(val);
    }
  };

  useEffect(() => {
    if (match.params.id) {
      fetchEachInspection(match.params.id);
    }
  }, [match.params.id]);

  return (
    <div className="page-content">
      <Link to="/inspection">
        <button className="btn btn-success btn-sm px-3 mb-2"> Back </button>
      </Link>
      {inspectionsError ? (
        <Alert color="danger">{inspectionsError.message}</Alert>
      ) : (
        <>
          <Row className="mb-5 mt-5">
            <Col xl={11} className="mx-auto">
              <Row>
                <Col ls={6}>
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
                </Col>
                <Col ls={6}>
                  <div>
                    <h6>Tenant</h6>
                    <p>
                      <img
                        src={inspection?.rent?.tenant?.profilePhoto}
                        alt="profile"
                        width="20"
                        height="20"
                      />
                      <span className="co-name mx-2">
                        {inspection?.rent?.tenant?.firstName}{' '}
                        {inspection?.rent?.tenant?.firstName}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h6>Inspection Type</h6>
                    <p>{inspection?.type}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={11} className="mx-auto">
              {inspection?.inspectionAreas?.length > 0 &&
                inspection?.inspectionAreas?.map((data) => (
                  <Card key={data.id}>
                    <CardBody>
                      <div id="accordion">
                        <Card className="mb-2">
                          <Link
                            to="#"
                            onClick={() => t_col1(data.id)}
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
                                {data.name}
                              </h6>
                            </CardHeader>
                          </Link>
                          <Collapse isOpen={col1 === data.id}>
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
                              {data.inspectionItems.length > 0 &&
                                data.inspectionItems.map((item) => (
                                  <Row
                                    key={item.id}
                                    className="align-items-center mb-1"
                                  >
                                    <Col ls={4}>{item.itemName}</Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-between"
                                    >
                                      <Col
                                        ls={4}
                                        className="d-flex justify-content-center"
                                      >
                                        {item.itemState === 'GOOD' && (
                                          <i
                                            className="fas fa-check"
                                            style={{ color: '#149509' }}
                                          ></i>
                                        )}
                                      </Col>
                                      <Col
                                        ls={4}
                                        className="d-flex justify-content-center"
                                      >
                                        {item.itemState === 'AVERAGE' && (
                                          <i
                                            className="fas fa-check"
                                            style={{ color: '#149509' }}
                                          ></i>
                                        )}
                                      </Col>
                                      <Col
                                        ls={4}
                                        className="d-flex justify-content-center"
                                      >
                                        {item.itemState === 'POOR' && (
                                          <i
                                            className="fas fa-check"
                                            style={{ color: '#149509' }}
                                          ></i>
                                        )}
                                      </Col>
                                    </Col>
                                    <Col ls={4}>
                                      <span>{item.comment}</span>
                                    </Col>
                                  </Row>
                                ))}
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
                              {data?.inventoryItems.length > 0 &&
                                data?.inventoryItems.map((inventory) => (
                                  <Row className="align-items-center mb-2">
                                    <Col ls={4}>{inventory.itemName}</Col>
                                    <Col
                                      ls={4}
                                      className="d-flex justify-content-between"
                                    >
                                      <span>{inventory.quantity}</span>
                                    </Col>
                                    <Col ls={4}>
                                      <span>{inventory.comment}</span>
                                    </Col>
                                  </Row>
                                ))}
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </CardBody>
                  </Card>
                ))}
            </Col>
          </Row>
          <Row>
            <Col xl="11 mx-auto mb-4 mt-5">
              <h5>General Comment</h5>
              <p className="text-capitalize">{inspection?.generalComment}</p>
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
                I the undersigned hereby accept that the above recorder
                condition of the property is accurate and true at the time of
                inspection/handover
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={11} className="mx-auto d-flex">
              <Col xl={6} style={{ lineHeight: '0.5' }} className="mb-5">
                <h5 className="mb-4">Signature</h5>
                <div className="sign mt-4"></div>
                <p>
                  {inspection?.rent?.tenant?.firstName}{' '}
                  {inspection?.rent?.tenant?.firstName}
                </p>
                <p>{Moment(inspection?.createdAt).format('MMM Do YY')}</p>
                <p>Tenant</p>
              </Col>
              <Col xl={6} style={{ lineHeight: '0.5' }}>
                <div className="sign mt-5"></div>
                <p>
                  {inspection?.conductedBy?.firstName}{' '}
                  {inspection?.conductedBy?.firstName}
                </p>
                <p>{Moment(inspection?.createdAt).format('MMM Do YY')}</p>
                <p>Agent</p>
              </Col>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { inspection, loading, message, inspectionsError } = state.Inspections;
  return { inspection, loading, message, inspectionsError };
};

export default connect(mapStateToProps, {
  fetchEachInspection,
})(PreviewCopy);
