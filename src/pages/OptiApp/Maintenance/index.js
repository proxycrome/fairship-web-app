import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, CardBody } from "reactstrap";
import livingRoom from "../../../assets/images/Living.png";
import MaintenanceSummary from "./MaintenanceSummary";
import ServiceRequest from "./ServiceRequest";
import CreateMaintenace from "./CreateMaintenace";
import { useDispatch, useSelector } from "react-redux";
import { getMaintenanceReq } from "../../../store/actions";

const MaintenanceRequest = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [ShowMaintenance, SetShowMaintenance] = useState(false);
  const [showService, setShowService] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaintenanceReq());
  }, [dispatch]);

  const { maintenanceRequests } = useSelector((state) => state.Maintenance);

  if (ShowMaintenance) {
    return <CreateMaintenace GoHome={() => SetShowMaintenance(false)} />;
  }

  if (showPreview) {
    return <MaintenanceSummary />;
  }

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
    rows: maintenanceRequests?.data?.list.map((request) => ({
      property: (
        <>
          <Link
            to="#"
            className="mr-3"
            onClick={() => setShowPreview(!showPreview)}
          >
            <img
              className="mr-1"
              src={livingRoom}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span>Unit {request?.unit}</span>
          </Link>
          {/* <span>Unit {request?.unit}</span> */}
        </>
      ),
      description: `${request?.description}`,
      date: "",
      status: `${request?.serviceTypeDto?.status}`,
    })),
  };

  return (
    <div className="page-content">
      <div className="mb-2">
        <div className="float-right">
          <Button color="success" onClick={() => SetShowMaintenance(true)}>
            {" "}
            Create Maintenance
          </Button>
        </div>
        <div className="p-2 bg-white rounded d-inline-block">
          <Button
            color={!showService ? "success" : "white"}
            className="mr-2"
            onClick={() => setShowService(!showService)}
          >
            Maintenance Request
          </Button>
          <Button
            color={showService ? "success" : "white"}
            outline
            onClick={() => setShowService(!showService)}
          >
            Service Request
          </Button>
        </div>
      </div>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              {showService ? (
                <ServiceRequest setShowPreview={setShowPreview} />
              ) : (
                <MDBDataTable responsive striped bordered data={data} />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MaintenanceRequest;
