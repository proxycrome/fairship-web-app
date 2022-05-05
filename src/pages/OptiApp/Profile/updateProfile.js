import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
  Alert,
} from 'reactstrap';

import avatar from '../../../assets/images/avi.jpg';

import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

import { updateProfile } from '../../../store/actions';
// import avatar3 from '../../../assets/images/users/avatar-3.jpg';


const Profile = () => {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [dob, setDob] = useState('');
  // const [gender, setGender] = useState('');
  // const [title, setTitle] = useState('')

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.Account);

  console.log(user)

  const {result, err} = useSelector(state => state.updateProfileReducer)

  const handleSubmit = (event, values) => {
    dispatch(updateProfile(values));
  }

  // const formSent = {
  //   firstName,
  //   lastName,
  //   dob,
  //   phone,
  //   gender,
  //   role: title
  // }

  // console.log(formSent)

  // const update = (e) => {
  //   e.preventDefault();
  //   dispatch(updateProfile(formSent))
  // }

  
  
  

  return (
    <div className="page-content">
      <Container fluid>
        {/* <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbData} /> */}
        <h4> Edit Profile </h4>
        <Card>
          <CardBody>
          {result &&  (
             <Alert color='success' className='text-center'>
              {result}
             </Alert>
          )}
          {err && err?.message && (
            <Alert color='danger' className='text-center'>
              {err?.message}
             </Alert>
          )}
            <AvForm onValidSubmit={handleSubmit} model={user}>
              <Row> 
                <Col md="12">
                  <div className="mb-2 text-center">
                    {user?.profilePhoto ? (
                      <img
                        className="avatar-md align-self-start mr-3 bg-light rounded-circle mb-2"
                        src={user?.profilePhoto}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="avatar-md align-self-start mr-3 bg-light rounded-circle mb-2"
                        src={avatar}
                        alt="profile"
                      />
                    )}
                    
                    <h4 className="text-center">
                      {user?.fullName}</h4> 
                      <p className="text-center">{user?.role?.name}</p> 

                  </div>
                  
                  <Row className="mb-2">
                    <Col sm="6">
                      <AvGroup row>
                        <Label
                          htmlFor="firstName"
                          className="col-md-12 col-form-label text-secondary"
                        >
                          First Name
                        </Label>
                        <Col md={12}>
                          <AvInput
                            className="form-control"
                            id="firstName"
                            name='firstName'
                          />
                        </Col>
                      </AvGroup>
                    </Col>{' '}
                    <Col sm="6">
                      <AvGroup row>
                        <Label
                          htmlFor="lastName"
                          className="col-md-12 col-form-label"
                        >
                          Last Name
                        </Label>
                        <Col md={12}>
                          <AvInput
                            className="form-control"
                            id="lastName"
                            name='lastName'
                          />
                        </Col>
                      </AvGroup>
                    </Col>
                    {/* <Col sm="12">
                      <FormGroup row>
                        <Label
                          htmlFor="password"
                          className="col-md-12 col-form-label"
                        >
                          Password
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="password"
                            id="password"
                          />
                        </Col>
                      </FormGroup>
                    </Col> */}
                    {/* <Col sm="6">
                      <FormGroup row>
                        <Label
                          htmlFor="email"
                          className="col-md-12 col-form-label"
                        >
                          Email
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="email"
                            id="email"
                          />
                        </Col>
                      </FormGroup>
                    </Col> */}
                    <Col sm="6">
                      <AvGroup row>
                        <Label
                          htmlFor="phone"
                          className="col-md-12 col-form-label"
                        >
                          Phone Number
                        </Label>
                        <Col md={12}>
                          <AvInput
                            className="form-control"
                            id="phone"
                            name ='phone'
                          />
                        </Col>
                      </AvGroup>
                    </Col>
                    {/* <Col sm="6">
                      <FormGroup row>
                        <Label
                          htmlFor="address"
                          className="col-md-12 col-form-label"
                        >
                          Address
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="text"
                            id="address"
                          />
                        </Col>
                      </FormGroup>
                    </Col> */}
                    {/* <Col sm="6">
                      <FormGroup row>
                        <Label
                          htmlFor="nationality"
                          className="col-md-12 col-form-label"
                        >
                          Nationality
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="text"
                            id="nationality"
                          />
                        </Col>
                      </FormGroup>
                    </Col> */}
                    <Col sm="6">
                      <AvGroup row>
                        <Label
                          htmlFor="gender"
                          className="col-md-12 col-form-label text-secondary"
                        >
                          Gender
                        </Label>
                        <Col md={12}>
                          <AvField
                            className="form-control"
                            type="select"
                            id="gender"
                            name = 'gender'
                          >
                            <option value="">Select...</option>
                            <option>MALE</option>
                            <option>FEMALE</option>
                          </AvField>
                        </Col>
                      </AvGroup>
                    </Col>{' '}
                    <Col sm="12">
                      <AvGroup row>
                        <Label
                          htmlFor="dateOfBirth"
                          className="col-md-12 col-form-label"
                        >
                          Date Of Birth
                        </Label>
                        <Col md={12}>
                          <AvInput
                            className="form-control"
                            type="date"
                            id="dateOfBirth"
                            name = 'dob'
                          />
                        </Col>
                      </AvGroup>
                    </Col>
                    <Col sm="12">
                      <AvGroup row>
                        <Label
                          htmlFor="title"
                          className="col-md-12 col-form-label"
                        >
                          Role
                        </Label>
                        <AvField type="select" name="role" className="form-control" >
                          <option value="" >CHOOSE ROLE</option>
                          <option value="PROPERTY_OWNER" >PROPERTY OWNER</option>
                          <option value="AGENT" >AGENT</option>
                        </AvField>
                      </AvGroup>
                    </Col>
                    <Col sm="12" className="text-center">
                      <Button type="submit" className="btn btn-success w-50 mt-4">
                        {' '}
                        Save{' '}
                      </Button>
                    </Col>
                  </Row>
                </Col>
                {/* <Col md="6">
                  <Row className="mb-2">
                    <Col sm={12}>{' '}</Col>
                    <Col sm={12}>{' '}</Col>
                    <Col sm="6">
                      <FormGroup row>
                        <Label
                          htmlFor="language"
                          className="col-md-12 col-form-label"
                        >
                          Language
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="text"
                            id="language"
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    

                    <Col sm="12">
                      <FormGroup row>
                        <Label
                          htmlFor="linkedIn"
                          className="col-md-12 col-form-label"
                        >
                          LinkedIn
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="text"
                            id="linkedIn"
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <FormGroup row>
                        <Label
                          htmlFor="stat"
                          className="col-md-12 col-form-label"
                        >
                          State/Province/Region
                        </Label>
                        <Col md={12}>
                          <Input
                            className="form-control"
                            type="text"
                            id="state"
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    
                    
                  </Row>
                </Col>   */}
              </Row>
            </AvForm>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default withRouter(Profile);
