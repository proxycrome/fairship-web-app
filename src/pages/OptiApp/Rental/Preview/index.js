import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Input,
  CardImg,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  Alert,
  FormGroup,
  Label,
} from 'reactstrap';

import RejectionForm from '../RejectionForm';

// user
// import avatar4 from '../../../../assets/images/users/avatar-2.jpg';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRentalRecommendation,
  PutTenantRecommendation,
  PutDataRecommendation,
  requestLeaseTermination,
  clearLeaseTermMessages,
} from '../../../../store/actions';
import DueDiligence from '../DueDiligence';
import moment from 'moment';
import Loader from '../../../../components/Common/Loading/index';

const Preview = (props) => {
  const [approve, SetApprove] = useState(false);
  const [modalOpen, ModalToggle] = useState(false);
  const [leaseModal, setLeaseModal] = useState(false);
  const [dueOpen, DueToggle] = useState(false);
  const [tenant, setTenant] = useState('');
  const [msg, setMsg] = useState('');

  const dispatch = useDispatch();

  const dataItems = {
    expectedDate: '',
    reasonForLeaving: '',
  };

  const [formData, setFormData] = useState(dataItems);

  const tenantId = props?.match?.params?.id;

  const { requestMsg, requestMsgError } = useSelector(
    (state) => state.terminationReducer
  );
  const { user } = useSelector((state) => state.Account);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { expectedDate, reasonForLeaving } = formData;

    if (!expectedDate) {
      setMsg('Please Enter Expected Date.');
      return;
    }

    if (!reasonForLeaving) {
      setMsg('Please Enter Reason for leaving.');
      return;
    }

    const data = {
      expectedDate: moment(expectedDate).format('DD-MM-YYYY'),
      reasonForLeaving,
      rentId: tenantId,
    };
    dispatch(requestLeaseTermination(data));
  };

  useEffect(() => {
    if (requestMsg || requestMsgError) {
      setLeaseModal(false);
    }
  }, [requestMsg, requestMsgError]);

  useEffect(() => {
    dispatch(clearLeaseTermMessages());
  }, [dispatch]);

  const review = (e) => {
    e.preventDefault();
    const data = {
      rentId: tenantId,
      reviewAction: 'APPROVED',
      reviewComments: '',
    };
    dispatch(PutDataRecommendation(data));
    SetApprove(true);
  };

  useEffect(() => {
    dispatch(fetchRentalRecommendation(tenantId)); //id
  }, [dispatch, tenantId]);

  const { rentalId, data, errordata, loading } = useSelector(
    (state) => state.PreviewReducer
  );


  const TenantRecom = (e) => {
    e.preventDefault();
    const data = {
      recommendationNotes: tenant,
    };
    dispatch(PutTenantRecommendation(tenantId, data));
    setTenant('');
  };


  return (
    <React.Fragment>
      <div>
        <Container fluid style={{ margin: '80px 0' }}>
          <Link
            style={{ color: 'Black' }}
            to="/rental_application"
            className="mx-2 font-size-14"
          >
            <span>
              <i
                className="fas fa-arrow-left
                 font-size-14 mr-2"
              />
            </span>
            Back
          </Link>
          {requestMsg && requestMsg?.message && (
            <Alert color="success" className="text-center">
              {requestMsg?.message}
            </Alert>
          )}
          {requestMsgError && requestMsgError?.message && (
            <Alert color="danger" className="text-center">
              {requestMsgError?.message}
            </Alert>
          )}
          {loading ? (
            <Card>
              <CardBody>
                <Loader loading={loading} />
              </CardBody>
            </Card>
          ) : (
            <Row className="my-3">
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <h4> Personal Details </h4>
                    <Row>
                      <Col sm={9}>
                        <Row>
                          <Col sm={3}>
                            <p className="text-muted mb-0">First Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm?.name.split(
                                  ' '
                                )[0]
                              }
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Last Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm?.name.split(
                                  ' '
                                )[1]
                              }
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Email</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.email}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">Religion</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.religion}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">State Of Origin</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.stateOfOrigin}
                            </h5>
                          </Col>
                          <Col sm={9}>
                            <p className="text-muted mb-0">Address</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.address}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">Marital Status</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.maritalStatus}
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">No of Spouse</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.noOfSpouse}
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">No of Children</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.noOfChildren}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">No of Cars</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.noOfCars}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">No of Relatives</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm
                                  ?.noOfOtherLiveInRelatives
                              }
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Relatives Names</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.relativesNames}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">Phone No</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.phone}
                            </h5>
                          </Col>
                        </Row>
                        {/* Reference Detail */}
                        <Row className="mt-4">
                          <Col xm={12}>
                            {' '}
                            <h4> Referees Detail </h4>{' '}
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">Referees Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.refereesName}
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Address</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.refereeAddress}
                            </h5>
                          </Col>

                          {/* <Col sm={3}>
                          <p className="text-muted mb-0">Referees Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.refreesName}
                          </h5>
                        </Col> */}
                          <Col sm={3} className="mt-2">
                            <p className="text-muted mb-0">Phone No</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.refereePhoneNo}
                            </h5>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={3} className="text-center">
                        <CardImg
                          src={rentalId?.tenant?.profilePhoto} //no profilePhoto key on rentapplication
                          // src={avatar4}
                          alt="Nazox"
                          className="rounded avatar-lg"
                        />
                        <h4 className="my-2  mb-lg-0">
                          {rentalId?.rentApplicationForm?.name}
                        </h4>
                        <div className="row justify-content-md-center text-center my-3">
                          <div className="col-4">
                            <span className="avatar-sm mr-1">
                              <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                <i className=" dripicons-phone"></i>
                              </span>
                            </span>
                          </div>
                          <div className="col-4">
                            <span className="avatar-sm mr-1">
                              <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                <i className=" fas fa-video"></i>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          {approve ? (
                            <h4 className="text-success"> Accepted </h4>
                          ) : rentalId?.status === 'PENDING_APPROVAL' ? (
                            <>
                              <div>
                                <button
                                  onClick={review}
                                  className="btn btn-success mb-2 w-100"
                                >
                                  Approve
                                </button>
                              </div>
                              <div>
                                <button
                                  onClick={() => ModalToggle(!modalOpen)}
                                  className="btn btn-outline-success w-100"
                                >
                                  Decline
                                </button>
                              </div>
                            </>
                          ) : rentalId.status === 'ACTIVE' ? (
                            <div>
                              <button
                                onClick={() => setLeaseModal(!leaseModal)}
                                className="btn btn-danger w-100"
                              >
                                Terminate Lease
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </Col>
                    </Row>
                    {/* Next of Kin */}
                    <hr className="my-4" />
                    <Row>
                      <Col lg={12}>
                        {' '}
                        <h4> Next of Kin </h4>{' '}
                      </Col>
                      <Col sm={8}>
                        <Row>
                          <Col sm={3}>
                            <p className="text-muted mb-0">First Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.nextOfKinName}
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Last Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.nextOfKinName}
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Email</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.nextOfKinEmail}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">Phone No</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.nextOfKinPhoneNo}
                            </h5>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    {/* Employment Details */}
                    <hr className="my-4" />
                    <Row>
                      <Col lg={12}>
                        {' '}
                        <h4> Employment Details </h4>{' '}
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Company's Name</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.companyDetails}
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Address</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.workAddress}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">
                              Employment Status{' '}
                            </p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.employmentStatus}
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">job Title</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.jobTitle}
                            </h5>
                          </Col>
                          <Col sm={3}>
                            <p className="text-muted mb-0">Salary Range</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.salaryRange}
                            </h5>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* Rental Details */}
                    <hr className="my-4" />
                    <Row>
                      <Col lg={12} className="mb-2">
                        <h4> Rental Details </h4>
                        <p className="text-muted mb-0">
                          Reason for leaving previous apartment
                        </p>
                        <h5 className="font-size-12 text-capitalize mt-2">
                          {
                            rentalId?.rentApplicationForm
                              ?.reasonForLeavingPreviousApartment
                          }
                        </h5>
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={3}>
                            <p className="text-muted mb-0">
                              Name of Prev. Landlord
                            </p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm
                                  ?.nameOfPreviousLandLord
                              }
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">Address</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.address}
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">Phone No </p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm
                                  ?.phoneNoOfPreviousLandLord
                              }
                            </h5>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm={3}>
                            <p className="text-muted mb-0">
                              Who is responsible for payment of Rent
                            </p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm
                                  ?.whoIsResponsibleForPaymentOfRent
                              }
                            </h5>
                          </Col>
                          <Col sm={6}>
                            <p className="text-muted mb-0">
                              How long do you want your lease
                            </p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {
                                rentalId?.rentApplicationForm
                                  ?.proposedLeaseTenureInMonths
                              }
                            </h5>
                          </Col>

                          <Col sm={3}>
                            <p className="text-muted mb-0">Total No of Cars</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {rentalId?.rentApplicationForm?.noOfCars}
                            </h5>
                          </Col>
                        </Row>
                        <Col sm={12} className="mt-4">
                          <p className="text-muted mb-0">Signature</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            _________________
                          </h5>
                        </Col>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {/* Tenant Recommendation */}
                <div>
                  {data && data?.message && (
                    <Alert color="success" className="text-center">
                      {data?.message}
                    </Alert>
                  )}
                  {errordata && errordata?.message && (
                    <Alert color="danger" className="text-center">
                      {errordata?.message}
                    </Alert>
                  )}
                  {user?.role.name === 'PROPERTY_OWNER' ? (
                    'RECOMMENDATION FROM AGENT COMING SOON'
                  ) : user?.role.name === 'AGENT' ? (
                    <>
                      <h4> Tenant Recommendation </h4>
                      <Card>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col sm={12}>
                                {/* <h5 className="font-size-12 text-capitalize mt-2">
                          Recommendation
                        </h5> */}
                                <textarea
                                  className="text-muted mb-0 border-0"
                                  style={{ outline: 'none', width: '100%' }}
                                  rows="4"
                                  value={tenant}
                                  onChange={(e) => setTenant(e.target.value)}
                                />
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </Col>
            </Row>
          )}

          <Modal
            size="md"
            isOpen={leaseModal}
            toggle={() => setLeaseModal(!leaseModal)}
          >
            <ModalHeader toggle={() => setLeaseModal(!leaseModal)}>
              Terminate Lease
            </ModalHeader>
            <ModalBody>
              {msg && (
                <Alert color="danger" className="text-center">
                  {msg}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Expected Date</Label>
                  <Input
                    type="date"
                    className="form-control"
                    name="expectedDate"
                    onChange={handleChange}
                    value={formData.expectedDate}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Reason for Leaving</Label>
                  <Input
                    type="textarea"
                    className="form-control"
                    rows={5}
                    name="reasonForLeaving"
                    onChange={handleChange}
                    value={formData.reasonForLeaving}
                  />
                </FormGroup>
                <button type="submit" className="btn btn-success w-100">
                  Proceed
                </button>
              </Form>
            </ModalBody>
          </Modal>
          <Modal
            size="lg"
            isOpen={modalOpen}
            toggle={() => ModalToggle(!modalOpen)}
          >
            <ModalHeader toggle={() => ModalToggle(!modalOpen)}>
              Reason For Rejection
            </ModalHeader>
            <ModalBody>
              <RejectionForm id={rentalId?.id} />
            </ModalBody>
          </Modal>
          <Modal size="lg" isOpen={dueOpen} toggle={() => DueToggle(!dueOpen)}>
            <ModalHeader toggle={() => DueToggle(!dueOpen)}>
              MOVIN DATE FORM
            </ModalHeader>
            <ModalBody>
              <DueDiligence rentId={rentalId.id} />
            </ModalBody>
          </Modal>
          <div className="mb-4">
            {rentalId?.status === 'PENDING_MOVE_IN_INSPECTION_APPROVAL' ? (
              <Link
                className="btn btn-success mr-2"
                to={`/create_inspection/${rentalId.id}`}
                style={{ textDecoration: 'none' }}
              >
                CONDUCT INSPECTION{' '}
              </Link>
            ) : rentalId?.status === 'WAITING_TO_BE_MOVED_IN' ? (
              <button
                className="btn btn-success mr-2"
                onClick={() => DueToggle(!dueOpen)}
              >
                MOVEIN TENANT{' '}
              </button>
            ) : (
              ''
            )}
            {/* <button
              className="btn btn-success mr-2"
              onClick={() => DueToggle(!dueOpen)}
            >
              Create Due Diligence{' '}
            </button> */}
            {user?.role.name === 'PROPERTY_OWNER' ? (
              ''
            ) : user?.role.name === 'AGENT' ? (
              <button
                type="submit"
                className="btn btn-success"
                onClick={TenantRecom}
              >
                Create Tenant Recommendation
              </button>
            ) : null}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Preview);
