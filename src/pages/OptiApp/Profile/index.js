import React from 'react';

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
} from 'reactstrap';

import avatar3 from '../../../assets/images/users/avatar-3.jpg';
const Profile = () => {
  return (
    <div className="page-content">
      <Container fluid>
        {/* <Breadcrumbs title="Dashboard" breadcrumbItems={breadcrumbData} /> */}
        <h4> Dashboard </h4>
        <Card>
          <CardBody>
            <Row>
              <Col md="6">
                <div className="mb-2 text-center">
                  <img
                    className="avatar-md align-self-start mr-3 bg-light rounded-circle mb-2"
                    src={avatar3}
                    alt="profile"
                  />
                  <h4 className="text-center">
                    Jane Rodney</h4> 
                    <p className="text-center">Agent</p> 

                </div>
                <Row className="mb-2">
                  <Col sm="6">
                    <FormGroup row>
                      <Label
                        htmlFor="firstName"
                        className="col-md-12 col-form-label text-secondary"
                      >
                        First Name
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="text"
                          defaultValue="Artisanal kale"
                          id="firstName"
                        />
                      </Col>
                    </FormGroup>
                  </Col>{' '}
                  <Col sm="6">
                    <FormGroup row>
                      <Label
                        htmlFor="lastName"
                        className="col-md-12 col-form-label"
                      >
                        Last Name
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="text"
                          defaultValue="kale"
                          id="lastName"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
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
                          defaultValue="kale"
                          id="password"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
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
                          defaultValue="kale@gmail.com"
                          id="email"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup row>
                      <Label
                        htmlFor="phone_no"
                        className="col-md-12 col-form-label"
                      >
                        Phone Number
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="tel"
                          defaultValue="kale"
                          id="phone_no"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
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
                          defaultValue="No 234 Mandilas Mall, Lagos Island"
                          id="address"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
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
                          defaultValue="Nigeria"
                          id="nationality"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <Row className="mb-2">
                  <Col sm="6">
                    <FormGroup row>
                      <Label
                        htmlFor="gender"
                        className="col-md-12 col-form-label text-secondary"
                      >
                        Gender
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="Male"
                          defaultValue="Artisanal kale"
                          id="gender"
                        />
                      </Col>
                    </FormGroup>
                  </Col>{' '}
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
                          defaultValue="English"
                          id="language"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup row>
                      <Label
                        htmlFor="dateOfBirth"
                        className="col-md-12 col-form-label"
                      >
                        Date Of Birth
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="date"
                          defaultValue="kale"
                          id="dateOfBirth"
                        />
                      </Col>
                      {/* <Col md={4}>
                        <Input
                          className="form-control"
                          type="month"
                          defaultValue="kale"
                          id="dateOfBirth"
                        />
                      </Col>
                      <Col md={4}>
                        <Input
                          className="form-control"
                          type="month"
                          defaultValue="kale"
                          id="dateOfBirth"
                        />
                      </Col> */}
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
                          defaultValue="LinkedIn/kale"
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
                          defaultValue="Lagos"
                          id="state"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup row>
                      <Label
                        htmlFor="title"
                        className="col-md-12 col-form-label"
                      >
                        Title
                      </Label>
                      <Col md={12}>
                        <Input
                          className="form-control"
                          type="text"
                          defaultValue="Agent"
                          id="title"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm="12" className="text-center">
                    <Button className="btn btn-success w-50 mt-4">
                      {' '}
                      Save{' '}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
