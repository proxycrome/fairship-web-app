import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  Modal,
  ModalBody,
  ModalHeader,
  Form
} from 'reactstrap';

import RejectionForm from '../RejectionForm';

// user
import avatar4 from '../../../../assets/images/users/avatar-2.jpg';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRentalRecommendation, PutTenantRecommendation } from '../../../../store/actions';

const Preview = (props) => {
  const [approve, SetApprove] = useState(false);
  const [modalOpen, ModalToggle] = useState(false);
  const [tenant, setTenant] = useState('');
  const dispatch = useDispatch();

 

  console.log(props?.match?.params?.id)

  const tenantId = props?.match?.params?.id;

  console.log(tenantId)

  const ModalToggleHandler = () => {
    alert('hello');
  };

  useEffect(() => {
    dispatch(fetchRentalRecommendation(tenantId)); //id
  }, [tenantId])


  

  const {rentalId} = useSelector(state => state.PreviewReducer)
  
  
  console.log('sodiq>>>>>>>>>',rentalId)
  
  

  // console.log(rentalId.tenant)
  
  // console.log(loading)

  const TenantRecom = (e) => {
    e.preventDefault()
    console.log('first')
    const data ={
      recommendationNotes: tenant 
    }
    console.log(data)
    dispatch(PutTenantRecommendation(tenantId, data))
    setTenant('') 
    window.location.reload(1)
  }
  // console.log(data)

  return (
    <React.Fragment>
      <div>
        <Container fluid  style={{margin:'100px 0'}}>
          {/* <span onClick={SetShowPreview} className="mx-2 font-size-14 mb-2"> */}
          <span  className="mx-2 font-size-14 mb-2">
            <span>
              <i
                className="fas fa-arrow-left
 font-size-14 mr-2"
              />
            </span>
            Back
          </span>
          <Row className='my-5'>
            {/* {rentalId.entities.map(rents => 
              )} */}
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4> Personal Details </h4>
                  {/* {rentalId.id} */}
                  <Row>
                    <Col sm={9}>
                      <Row>
                        <Col sm={3}>
                          <p className="text-muted mb-0">First Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {rentalId?.rentApplicationForm?.name.split(' ')[0]}
                          </h5>
                        </Col>
                        <Col sm={3}>
                          <p className="text-muted mb-0">Last Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.name.split(' ')[1]}
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
                          {rentalId?.rentApplicationForm?.noOfOtherLiveInRelatives}
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
                          {rentalId?.rentApplicationForm?.refreesName}
                          </h5>
                        </Col>
                        <Col sm={6}>
                          <p className="text-muted mb-0">Address</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.refreeAddress}
                          </h5>
                        </Col>

                        <Col sm={3}>
                          <p className="text-muted mb-0">Referees Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.refreesName}
                          </h5>
                        </Col>
                        <Col sm={3} className="mt-2">
                          <p className="text-muted mb-0">Phone No</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.refreePhoneNo}
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={3} className="text-center">
                      <CardImg
                        src={rentalId?.tenant?.profilePhoto}
                        alt="Nazox"
                        className="rounded avatar-lg"
                      />
                      <h4 className="my-2  mb-lg-0">{rentalId?.rentApplicationForm?.name}</h4>
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
                        ) : (
                          <>
                            <div>
                              <button
                                onClick={() => SetApprove(true)}
                                className="btn btn-success mb-2 w-100"
                              >
                                Aprove
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
                        )}
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
                          {rentalId?.workAddress}
                          </h5>
                        </Col>

                        <Col sm={3}>
                          <p className="text-muted mb-0">Employment Status </p>
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
                      {rentalId?.rentApplicationForm?.reasonForLeavingPreviousApartment}
                      </h5>
                    </Col>
                    <Col sm={9}>
                      <Row>
                        <Col sm={3}>
                          <p className="text-muted mb-0">
                            Name of Prev. Landlord
                          </p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.nameOfPreviousLandLord}
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
                          {rentalId?.rentApplicationForm?.phoneNoOfPreviousLandLord}
                          </h5>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col sm={3}>
                          <p className="text-muted mb-0">
                            Who is responsible for payment of Rent
                          </p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.whoIsResponsibleForPaymentOfRent}
                          </h5>
                        </Col>
                        <Col sm={6}>
                          <p className="text-muted mb-0">
                            How long do you want your lease
                          </p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                          {rentalId?.rentApplicationForm?.proposedLeaseTenureInMonths}
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
                <h4> Tenant Recommendation </h4>
                <Card>
                  <CardBody>
                    <Form>
                    <Row>
                      <Col sm={12}>
                        <h5 className="font-size-12 text-capitalize mt-2">
                          Recommendation
                        </h5>
                        <textarea className="text-muted mb-0 border-0" style={{outline:'none',width:'100%'}} rows='4' value={tenant} onChange={(e)=>setTenant(e.target.value)}/>
                      </Col>
                    </Row>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
          <Modal
            size="lg"
            isOpen={modalOpen}
            toggle={() => ModalToggle(!modalOpen)}
          >
            <ModalHeader toggle={() => ModalToggle(!modalOpen)}>
              Reason For Rejectionn
            </ModalHeader>
            <ModalBody>
              <RejectionForm id={rentalId.id} />
            </ModalBody>
          </Modal>
          <div className="mb-4">
            <button
              className="btn btn-success mr-2"
              onClick={ModalToggleHandler}
            >
              Create Due Diligence{' '}
            </button>
            <button type='submit' className="btn btn-success" onClick={TenantRecom}>
              Create Tenant Recommendation
            </button>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};




export default withRouter(Preview)


