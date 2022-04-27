import React, { useEffect } from 'react';
import { Container, Card, CardBody, Alert, Row, Col, Button } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEachProperties } from '../../../store/actions';
import BusStop from '../../../assets/images/BusStop.png';
import Parking from '../../../assets/images/Parking.png';
import Transit from '../../../assets/images/Transit.png';
import PropertyIcon from '../../../assets/images/Property.png';

const ListPreview = ({ match, fetchEachProperties, property }) => {

  useEffect(() => {
    fetchEachProperties(match.params.id)
  }, [])

  console.log(property);

  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 text-right">
          <Link to="/listing_properties">
            <button className="btn btn-success btn-sm">
              <i className="fas fa-arrow-left mr-2" /> Back
            </button>
          </Link>
        </div>
        <Card>
          <CardBody>
            {/* Preview List Item here
            <Alert className="text-center mt-4" color="danger">
              The property with ID:{' '}
              <span className="font-weight-bolder"> {match.params.id}</span>{' '}
              Page is under Construction
            </Alert> */}
            <Row>
              <Col md={12}>
                <div className='d-flex justify-content-center'>
                  <img src={property?.indexImage} style={{width: "100%", height: "50vh", objectFit: "fill"}} alt="property"/>
                </div>
              </Col>  
            </Row>
            <Row className='d-flex justify-content-between mt-4'>
              <div className='ml-3'>
                <h5>{property?.parentProperty?.title} <br/>{property?.title}</h5>
              </div>
              <div className='mr-3'>
                <p>From N<span style={{fontWeight: "600", color: "blue"}}>{property?.price}</span>/ yr</p>
              </div>
            </Row>
            <Row>
              <div className="d-flex flex-column ml-3">
                <span>(ID: {match.params.id})</span>
                <span>{property?.address?.houseNoAddress}</span>
              </div>
            </Row>
            <Row>
              <Col md={6}>
                <div className="my-3">
                  <img src={BusStop} alt="busstop icon" className="ml-1"/>
                  <span className="ml-2">Bus-stop: 4 min walk to the bus line</span>
                </div>
                <div className="my-3">
                  <img src={Parking} alt="parking icon" className="ml-1"/>
                  <span className="ml-2">Parking: 3 drive way spaces</span>
                </div>
                <Button color="success">
                  {" "}
                  View WalkThrough Video
                </Button>
              </Col>
              <Col md={6}>
                <div className="my-3">
                  <img src={Transit} alt="Transit icon" className="ml-1"/>
                  <span className="ml-2">Transit: 20 min walk to ikeja bus terminal</span>
                </div>
                <div className="my-3">
                  <img src={PropertyIcon} alt="property icon" className="ml-1"/>
                  <span className="ml-2">{property?.bedrooms} bedrooms {property?.bathrooms} bathrooms</span>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="ml-3 mt-5">
                <h6>Overview</h6>
                <p>{property?.description}</p>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { property, loading } = state.Properties;
  return { property, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchEachProperties })(ListPreview)
);
