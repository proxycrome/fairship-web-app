import React, { useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  Table,
} from 'reactstrap';
import { fetchAgent } from '../../../store/actions';
import { useHistory, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Common/Loading/index';

// user
import avatar from "../../../assets/images/avi.jpg";
import home from '../../../assets/images/home.png';

const Preview = (props) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const email = props.location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(fetchAgent(email));
  }, [dispatch, email])

  const {agent, loading} = useSelector(state => state.Agents)

  // console.log(agent);

  return (
    <div className="page-content">
      <Container fluid>
        <span onClick={() => history.push('/agents')} className="mx-2 font-size-14 mb-2">
          <span>
            <i
              className="fas fa-arrow-left
 font-size-14 mr-2"
            />
          </span>
          Back
        </span>
        {loading ? (
          <Card>
            <CardBody>
              <Loader loading={loading} />
            </CardBody>
          </Card>
        ) : (
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h4> Personal Details </h4>
                  <Row>
                    <Col sm={9}>
                      <Row>
                        <Col sm={6}>
                          <p className="text-muted mb-0">First Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {agent?.fullName.split(' ')[0]}
                          </h5>
                        </Col>
                        <Col sm={6}>
                          <p className="text-muted mb-0">Last Name</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {agent?.fullName.split(' ')[1]}
                          </h5>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col sm={6}>
                          <p className="text-muted mb-0">Email</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {agent?.email}
                          </h5>
                        </Col>

                        <Col sm={6}>
                          <p className="text-muted mb-0">Phone No</p>
                          <h5 className="font-size-12 text-capitalize mt-2">
                            {agent?.phone}
                          </h5>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={3} className="text-center">
                      {agent?.profilePhoto ? (
                        <CardImg
                          src={agent?.profilePhoto}
                          alt="Nazox"
                          className="rounded avatar-lg"
                        />
                      ) : (
                        <CardImg
                          src={avatar}
                          alt="Nazox"
                          className="rounded avatar-lg"
                        />
                      )}
                      
                      <h4 className="my-2  mb-lg-0">{agent?.fullName}</h4>
                      <div className="row justify-content-md-center text-center my-3">
                        <div className="col-4">
                          <span className="avatar-xs mr-1">
                            <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                              <i className=" dripicons-phone"></i>
                            </span>
                          </span>
                        </div>
                        <div className="col-4">
                          <span className="avatar-xs mr-1">
                            <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                              <i className=" fas fa-video"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <Col md="8">
                  <CardBody>
                    <h4>Unit (4)</h4>
                    <Table id="tech-companies-1" striped responsive>
                      <thead>
                        <tr>
                          <th data-priority="1">Property</th>
                          <th data-priority="1">Unit Number</th>
                          <th data-priority="3">Description</th>
                          <th>Tenant</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="d-flex">
                            <img
                              src={home}
                              alt="profile"
                              className="avatar-xs rounded"
                            />
                            <div>
                              <p className="co-name mx-2 mb-0 text-muted">
                                Cusy Studio
                              </p>
                              <p className="co-name mx-2 mb-0">Heart Of Lagos</p>
                            </div>
                          </td>
                          <td>013</td>
                          <td>Lorem Ipmus donor sit</td>
                          <td className="d-flex align-items-center">
                            <img
                              src={avatar}
                              alt="profile"
                              className="avatar-xs rounded-circle"
                            />
                            <p className="co-name mx-2 text-muted">Cusy Studio</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex">
                            <img
                              src={home}
                              alt="profile"
                              className="avatar-xs rounded"
                            />
                            <div>
                              <p className="co-name mx-2 mb-0 text-muted">
                                Cusy Studio
                              </p>
                              <p className="co-name mx-2 mb-0">Heart Of Lagos</p>
                            </div>
                          </td>
                          <td>013</td>
                          <td>Lorem Ipmus donor sit</td>
                          <td className="d-flex align-items-center">
                            <img
                              src={avatar}
                              alt="profile"
                              className="avatar-xs rounded-circle"
                            />
                            <p className="co-name mx-2 text-muted">Cusy Studio</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex">
                            <img
                              src={home}
                              alt="profile"
                              className="avatar-xs rounded"
                            />
                            <div>
                              <p className="co-name mx-2 mb-0 text-muted">
                                Cusy Studio
                              </p>
                              <p className="co-name mx-2 mb-0">Heart Of Lagos</p>
                            </div>
                          </td>
                          <td>013</td>
                          <td>Lorem Ipmus donor sit</td>
                          <td className="d-flex align-items-center">
                            <img
                              src={avatar}
                              alt="profile"
                              className="avatar-xs rounded-circle"
                            />
                            <p className="co-name mx-2 text-muted">Cusy Studio</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="d-flex">
                            <img
                              src={home}
                              alt="profile"
                              className="avatar-xs rounded"
                            />
                            <div>
                              <p className="co-name mx-2 mb-0 text-muted">
                                Cusy Studio
                              </p>
                              <p className="co-name mx-2 mb-0">Heart Of Lagos</p>
                            </div>
                          </td>
                          <td>013</td>
                          <td>Lorem Ipmus donor sit</td>
                          <td className="d-flex align-items-center">
                            <img
                              src={avatar}
                              alt="profile"
                              className="avatar-xs rounded-circle"
                            />
                            <p className="co-name mx-2 text-muted">Cusy Studio</p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Col>
              </Card>
              <Card>
                <CardBody>
                  <h4>Activities</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}       
      </Container>
    </div>
  );
};

export default withRouter(Preview);
