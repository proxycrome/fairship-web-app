import React from 'react'
import { useSelector } from 'react-redux';
import {
    Container,
    Card,
    CardBody,
    Row, 
    Col,
    Button
  } from 'reactstrap';

import avatar from '../../../assets/images/avi.jpg'

const ProfilePage = () => {
    const {user} = useSelector(state => state.Account);
  return (
    <div className='page-content'>
        <Container fluid>
            <h4>Profile Page</h4>
            <Card>
                <CardBody>
                    <Row className="d-flex">
                        <Col xl={6} style={{flex: "1"}}>
                            <div>
                                <img src={avatar} alt="profile pix" style={{objectFit: "cover", width: "100%", height: '100%' }}/>
                            </div>
                        </Col>
                        <Col xl={6} style={{flex: "1"}}>
                            <Col>
                                <h3 className="mb-4">My Profile</h3>
                                <div className="mb-2 d-flex">
                                    <h6 className='mr-4'>FirstName:</h6>
                                    <span>{user?.fullName.split(' ')[0]}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">LastName:</h6>
                                    <span>{user?.fullName.split(' ')[1]}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">Email:</h6>
                                    <span>{user?.email}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">Date of birth:</h6>
                                    <span>{user?.dob}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">Address:</h6>
                                    <span>{user?.address}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">Phone number:</h6>
                                    <span>{user?.phone}</span>
                                </div>
                                <div className="mb-2 d-flex">
                                    <h6 className="mr-4">Gender:</h6>
                                    <span>{user?.gender}</span>
                                </div>
                                <Button className="btn btn-success w-50 mt-4">
                                    {' '}
                                    Edit profile{' '}
                                </Button>
                            </Col>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </Container>
    </div>
  )
}

export default ProfilePage