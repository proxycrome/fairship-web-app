import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  Alert,
  Button,
} from 'reactstrap';

import Loader from '../../../../components/Common/Loading/index';
import PropertyIcon from '../../../../assets/images/Property.png';
// import RejectionForm from '../RejectionForm';

// user
// import avatar4 from '../../../../assets/images/users/avatar-2.jpg';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  reviewLeaseTermination,
  getLeaseTerminations,
  clearLeaseTermMessages,
} from '../../../../store/actions';
import { clearMessages } from '../../../../store/Buy/actions';

const LeaseTermPreview = (props) => {
  const [propImages, setPropImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(false);
  const dispatch = useDispatch();

  const termId = props?.match?.params?.id;

  const { terminationRequests, loading, reviewMsg, reviewMsgError } =
    useSelector((state) => state.terminationReducer);

  let application = terminationRequests?.entities.find(
    (data) => data?.id === +termId
  );

  console.log(application);
  console.log(termId);
  console.log(terminationRequests?.entities);

  useEffect(() => {
    if (application?.rent?.property) {
      setPropImages(application?.rent?.property?.images);
    }
    const lastIndex = propImages?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, propImages, application]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  const handleApplication = (e, action) => {
    e.preventDefault();
    const data = {
      leaseTerminationRequestId: Number(termId),
      action: action,
      reasonForRejection: action === 'APPROVED' ? 'APPROVED' : 'REJECTED',
    };
    dispatch(reviewLeaseTermination(data));
  };

  //   useEffect(() => {
  //     dispatch(getEachBuyApplication(buyId));
  //   }, [dispatch, buyId, appMessage]);

  useEffect(() => {
    dispatch(getLeaseTerminations());
    dispatch(clearLeaseTermMessages())
  }, []);

  return (
    <React.Fragment>
      <div>
        <Container fluid style={{ margin: '80px 0' }}>
          <Link
            style={{ color: 'Black' }}
            to="/lease-termination"
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
                    <Row>
                      <Col md={4} sm={12}>
                        <div className="section-center">
                          {propImages?.map((propImage, propIndex) => {
                            const { id, imageUrl } = propImage;
                            // more stuff coming up
                            let position = 'nextSlide';
                            if (propIndex === index) {
                              position = 'activeSlide';
                            }
                            if (
                              propIndex === index - 1 ||
                              (index === 0 &&
                                propIndex === propImages.length - 1)
                            ) {
                              position = 'lastSlide';
                            }
                            return (
                              <article
                                className={`imgarticle ${position}`}
                                key={id}
                              >
                                <a
                                  href={`${imageUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={imageUrl}
                                    alt="property"
                                    className="prop-img"
                                    style={{
                                      borderRadius: '20px',
                                      width: '100%',
                                    }}
                                  />
                                </a>
                              </article>
                            );
                          })}
                          <button
                            className="prevbtn"
                            onClick={() => setIndex(index - 1)}
                          >
                            <i className="fas fa-angle-left"></i>
                          </button>
                          <button
                            className="nextbtn"
                            onClick={() => setIndex(index + 1)}
                          >
                            <i className="fas fa-angle-right"></i>
                          </button>
                        </div>
                      </Col>
                      <Col ls={5}>
                        {/* <div className='mb-3'>
                      <h6>Unit Number</h6>
                      <span>{property?.unitNo}</span>
                    </div> */}
                        <div className="my-3">
                          <h6>Property</h6>
                          <span style={{ display: 'block' }}>
                            {application?.rent?.property?.title}
                          </span>
                          <span>
                            (ID: {application?.rent?.property?.propertyRef})
                          </span>
                        </div>
                        <div className="mb-3">
                          <span>
                            {
                              application?.rent?.property?.address
                                ?.houseNoAddress
                            }
                            , {application?.rent?.property?.address?.state},{' '}
                            {application?.rent?.property?.address?.country}
                          </span>
                        </div>
                        <div className="mb-3">
                          <img src={PropertyIcon} alt="property icon" />
                          <span className="ml-2">
                            {application?.rent?.property?.bedrooms} bedrooms{' '}
                            {application?.rent?.property?.bathrooms} bathrooms
                          </span>
                        </div>
                        <div className="mb-3">
                          <h6>Status</h6>
                          <span>{application?.rent?.property?.status}</span>
                        </div>
                        <div>
                          <h6>Amenities</h6>
                          {application?.rent?.property?.otherAmenities
                            ?.split(',')
                            .map((amentity, i) => (
                              <span key={i} className="d-block">
                                {amentity}
                              </span>
                            ))}
                        </div>
                      </Col>
                      <Col ls={5}>
                        <div className="d-flex justify-content-end mt-3">
                          <Button
                            onClick={() => setView(!view)}
                            color="success"
                          >
                            {' '}
                            View Details
                          </Button>
                        </div>
                        {/* <div className="d-flex justify-content-end mt-3">
                          <p>
                            From ₦
                            <span style={{ fontWeight: '800', color: 'blue' }}>
                              {application?.rent?.property?.price?.toLocaleString()}
                            </span>
                            / yr
                          </p>
                        </div> */}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {view ? (
                  <Card>
                    <CardBody>
                      <Row className="my-3">
                        <Col sm={4} className="text-center">
                          <div>
                            <p className="text-muted mb-0">Property Price</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              ₦
                              {application?.rent?.property?.price?.toLocaleString()}
                            </h5>
                          </div>
                          <div className="mt-5">
                            <p className="text-muted mb-0">Expected Date</p>
                            <h5 className="font-size-12 text-capitalize mt-2">
                              {application?.expectedDate}
                            </h5>
                          </div>
                        </Col>
                        <Col sm={4} className="text-center">
                          <p className="text-muted mb-0">Status</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {application?.status?.toLowerCase()}
                          </h5>
                        </Col>
                        <Col sm={4} className="text-center">
                          <p className="text-muted mb-0">Reason for Leaving</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {application?.reasonForLeaving}
                          </h5>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                ) : null}
                <div>
                  {reviewMsg && reviewMsg?.message && (
                    <Alert color="success" className="text-center">
                      {reviewMsg?.message}
                    </Alert>
                  )}
                  {reviewMsgError && reviewMsgError?.message && (
                    <Alert color="danger" className="text-center">
                      {reviewMsgError?.message}
                    </Alert>
                  )}

                  {application?.status === 'PENDING' ? (
                    <Row>
                      <Col
                        sm={12}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <div className="mr-3">
                          <button
                            className="btn btn-success px-5"
                            onClick={(e) => handleApplication(e, 'APPROVED')}
                          >
                            Accept
                          </button>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline-success px-5"
                            onClick={(e) => handleApplication(e, 'REJECTED')}
                          >
                            Reject
                          </button>
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(LeaseTermPreview);
