import React, { useEffect } from "react";
import { Col, Button, Card, CardBody, Row, Alert, Container } from "reactstrap";
import { Link, withRouter } from 'react-router-dom';
import { putAcceptAppointment, clearAppointmentMessage } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const AcceptAppointment = ({match}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAppointmentMessage());
  }, [])

  const handleAccept = () => {
    const data = {
      action: "APPROVED",
      appointmentId: +match.params.appointId,
      comments: "Accepted"
    }
    dispatch(putAcceptAppointment(data))
  }
  const { acceptMessage, acceptError, loading } = useSelector(state => state.Appointment)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Link
            style={{ color: "Black" }}
            to="/appointments"
            className="mx-2 font-size-14 mb-5"
          >
            <span>
              <i
                className="fas fa-arrow-left
                    font-size-14 mr-2"
              />
            </span>
            Back
          </Link>
          <Card className="align-self-center">
            <CardBody>
              {acceptMessage && acceptMessage?.message && (
                <Alert color="success" className="text-center">
                  {acceptMessage?.message}
                </Alert>
              )}
              {acceptError && acceptError?.message && (
                <Alert color="danger" className="text-center">
                  {acceptError?.message}
                </Alert>
              )}
              <h3>Accept appointment</h3>
              <Row className="mt-5">
                <Col xl={12}>
                  <p className="text-center" style={{fontSize: "20px", fontWeight: "700"}}>Are you sure you want to accept this appointment?</p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xl={12}>
                  <p className="text-center">You won't be able to revert this action later.</p>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xl={12} className="d-flex justify-content-center">
                  <Link to="/appointments" className="mx-3"><Button color="secondary" className="btn-lg" outline>Dismiss</Button></Link>
                  <Button color="success" className="mx-3 btn-lg" onClick={handleAccept}>{loading ? 'Accepting...' : ' Yes, Accept'}</Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AcceptAppointment);
