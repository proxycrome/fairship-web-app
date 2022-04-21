import React, { useEffect } from 'react';
import { Container, Card, CardBody, Alert, Row, Col, Button } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEachProperties } from '../../../../store/actions';
import PropertyIcon from '../../../../assets/images/Property.png';
import avatar from "../../../../assets/images/avi.jpg"
import Loader from "../../../../components/Common/Loading/index";

const ListUnitPreview = ({ match, fetchEachProperties, property, loading }) => {

  useEffect(() => {
    fetchEachProperties(match.params.id)
  }, [])

  console.log(property);

  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 text-right">
          <Link to="/unit_properties">
            <button className="btn btn-success btn-sm">
              <i className="fas fa-arrow-left mr-2" /> Back
            </button>
          </Link>
        </div>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <Card>
              <CardBody>
                {/* Preview Unit Property Item here
                <Alert className="text-center mt-4" color="danger">
                  The Unit with ID:{' '}
                  <span className="font-weight-bolder"> {match.params.id}</span>{' '}
                  Page is under Construction
                </Alert> */}
                <Row>
                  <Col ls={2}>
                    <img src={property?.indexImage} alt="property" style={{borderRadius: "20px", width: "100%"}}/>
                  </Col>
                  <Col ls={5}>
                    {/* <div className='mb-3'>
                      <h6>Unit Number</h6>
                      <span>{property?.unitNo}</span>
                    </div> */}
                    <div className='mb-3'>
                      <h6>Property</h6>
                      <span>{property?.title}</span>
                    </div>
                    <div className='mb-3'>
                      <span>{property?.address?.houseNoAddress}</span>
                    </div>
                    <div className='mb-3'>
                      <img src={PropertyIcon} alt="property icon"/>
                      <span className="ml-2">{property?.bedrooms} bedrooms {property?.bathrooms} bathrooms</span>
                    </div>
                    <div>
                      <h6>Status</h6>
                      <span>{property?.status}</span>
                    </div>
                  </Col>
                  <Col ls={5}>
                    <div className='d-flex justify-content-end'>
                      <Button color="success">
                        {" "}
                        Tasks
                      </Button>
                    </div>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>From N<span style={{fontWeight: "800", color: "blue" }}>{property?.price}</span>/ yr</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <h4>Rental Information</h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      <h6>Basic Rent</h6>
                      <span>N {property?.price}</span>
                    </div>
                    <div className="mb-3">
                      {/* <h6>Last payment date</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Serviced</h6>
                      <span>{property?.isServiced === true ? "true" : "false"}</span>
                    </div>
                    <div>
                      {/* <h6>Last Inspection</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Furnished</h6>
                      <span>{property?.isFurnished === true ? "true" : "false"}</span>
                    </div>
                  </Col>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      {/* <h6>Rental Status</h6>
                      <span>Occupied</span> */}
                      <h6>Parking Space</h6>
                      <span>{property?.isParking === true ? "true" : "false"}</span>
                    </div>
                    <div className="mb-3">
                      <h6>Next Payment Amount</h6>
                      <span>N {property?.price}</span>
                    </div>
                    <div>
                      <h6>Advertised Amount</h6>
                      <span>N {property?.price}</span>
                    </div>
                  </Col>
                  <Col md={4} sm={12}>
                    <div className="mb-3">
                      <h6>Payment plan</h6>
                      <span>{property?.periodInMonths ? property?.periodInMonths + " months" : "None"}</span>
                    </div>
                    <div className="mb-3">
                      {/* <h6>Next Payment Date</h6>
                      <span>3rd Jul 2021</span> */}
                      <h6>Size</h6>
                      <span>{property?.size}</span>
                    </div>
                    <div>
                      {/* <h6>Application fee</h6>
                      <span>N 50,000</span> */}
                      <h6>Unit Type</h6>
                      <span>{property?.type}</span>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            {/* <Card>
              <CardBody>
                <h4 className="card-title">Current Tenant</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={avatar} alt="agent" className="avatar-sm mr-4" />
                    <h5 className="card-title"> Robert Willams</h5>
                  </div>
                  <div className='d-flex'>
                    <div>
                    <div className='d-flex rounded-circle justify-content-center align-items-center' 
                      style={{backgroundColor:'lightGreen', height:'50%'}}>
                    <i className="fa fa-phone" style={{color:'white'}}></i>
                    </div>
                    <p> Call </p>
                    </div>
                    <div className='ml-5'>
                      <a href="#" className='d-flex rounded-circle justify-content-center align-items-center' 
                      style={{backgroundColor:'lightGreen', height:'50%'}}>
                      <i className=" fas fa-envelope" style={{color:'white'}}></i>
                      </a>
                    <p> Email </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card> */}
            {/* <Row>
              <Col>
                <div className='mb-5'>
                  <h6>Documents</h6>
                  <div style={{backgroundColor: "white", width: "120px", height: "50px"}}>
                    <span>Lease Agreement</span>
                  </div>
                </div>
              </Col>  
            </Row> */}
          </>
        )}
        
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { property, loading } = state.Properties;
  return { property, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties })(ListUnitPreview)
);
