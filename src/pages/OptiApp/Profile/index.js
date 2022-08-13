import React, { useState } from "react";
import { Container, Card, CardBody, Row, Col, Button } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// actions
// import { fetchProfile } from "../../../store/actions";

import avatar from "../../../assets/images/avi.jpg";
import Profile from "./updateProfile"

const Index = ({ fetchProfile, user }) => {
  const [isClicked, setIsClicked] = useState(false);

  if(isClicked){
    return <Profile goBack={() => setIsClicked(false)}/>
  }


  return (
    <div className="page-content">
      <Container fluid>
        <h4>Profile Page</h4>
        <Card>
          <CardBody>
            <Row className="d-flex">
              <Col xl={6} style={{ flex: "1" }}>
                <div>
                  {user?.profilePhoto ? (
                    <img
                      src={user?.profilePhoto}
                      alt="profile pix"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  ) : (
                    <img
                      src={avatar}
                      alt="profile pix"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )}
                </div>
              </Col>
              <Col xl={6} style={{ flex: "1" }}>
                <Col>
                  <h3 className="mb-4">My Profile</h3>
                  <div className="mb-2 d-flex">
                    <h6 className="mr-4">FirstName:</h6>
                    <span>{user?.fullName.split(" ")[0]}</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <h6 className="mr-4">LastName:</h6>
                    <span>{user?.fullName.split(" ")[1]}</span>
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
                    <span>{user?.address.houseNoAddress}</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <h6 className="mr-4">Phone number:</h6>
                    <span>{user?.phone}</span>
                  </div>
                  <div className="mb-2 d-flex">
                    <h6 className="mr-4">Gender:</h6>
                    <span>{user?.gender}</span>
                  </div>
                  <Button className="btn btn-success w-50 mt-4" onClick={() => setIsClicked(true)}>
                    {" "}
                    Edit profile{" "}
                  </Button>
                </Col>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { user, loading } = state.Account;
  return { user, loading };
};

export default withRouter(connect(mapStatetoProps)(Index));
