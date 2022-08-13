import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, CardBody } from "reactstrap";
import ServiceRequest from "./ServiceRequest";
import { useSelector, useDispatch } from "react-redux";
import { getMaintenanceReq } from "../../../store/actions";
import Loader from "../../../components/Common/Loading/index";

const MaintenanceRequest = () => {
  const [showService, setShowService] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaintenanceReq());
  }, [dispatch]);

  const { maintenanceRequests, loading } = useSelector((state) => state.Maintenance);

  // console.log(maintenanceRequests);


  const data = {
    columns: [
      {
        label: "Property",
        field: "property",
        width: 150,
      },
      {
        label: "Description",
        field: "description",
        width: 100,
      },
      {
        label: "Date",
        field: "date",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        width: 100,
      },
    ],
    rows: maintenanceRequests?.map((request) => ({
      property: (
        <>
          <Link
            to={`/maintenanceSummary/${request.id}`}
            className="mr-3"
          >
            <img
              className="mr-1"
              src={request.property.indexImage}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span>{request?.property.parentProperty?.title} {request?.property?.title}</span>
          </Link>
          {/* <span>Unit {request?.unit}</span> */}
        </>
      ),
      description: `${request?.description}`,
      date: `${request.createdAt}`,
      status: `${request?.status}`,
    }))

  };

  return (
    <div className="page-content">
      <div className="mb-2">
        <div className="float-right">
          <Link to="/createMaintenance">
            <Button color="success">
              {" "}
              Create Maintenance
            </Button>
          </Link> 
        </div>
        <div className="p-2 bg-white rounded d-inline-block">
          <Link to="/maintenance" onClick={() => setShowService(false)}>
            <Button
              color={!showService ? "success" : "white"}
              className="mr-2"
            >
              Maintenance Request
            </Button>
          </Link>
          <Link to="/serviceRequest" onClick={() => setShowService(true)}>
            <Button
              color={showService ? "success" : "white"}
            >
              Service Request
            </Button>
          </Link>
          
        </div>
      </div>
      <Row>
        <Col xs={12}>
          {loading ? (
            <Card>
              <CardBody>
                <Loader loading={loading} />
              </CardBody>
            </Card>
          ) : (
            <Card>
              <CardBody>
                {showService ? (
                  <ServiceRequest />
                ) : (
                  <MDBDataTable responsive striped bordered data={data} />
                )}
              </CardBody>
            </Card>
          )}
          
        </Col>
      </Row>
    </div>
  );
};

export default MaintenanceRequest;
