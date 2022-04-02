import React from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
// import livingRoom from "../../../assets/images/Living.png";
import { useSelector } from "react-redux";
import Loader from "../../../components/Common/Loading/index";
import avatar from "../../../assets/images/avi.jpg";


const ServiceRequest = ({ setShowPreview }) => {

  const services = useSelector((state) => state.Maintenance?.services);
  const pendingServices = useSelector((state) => state.Maintenance?.pendingServices )
  const loading = useSelector((state) => state.Maintenance?.loading)

  console.log(pendingServices)
  console.log(services);

  const pendingRequests = pendingServices?.entities?.map((pendingService) => ({
    property: (
      <>
        <Link to={`/serviceSummary/${pendingService?.id}`} className="mr-3" onClick={() => setShowPreview(true)}>
          {pendingService?.tenant?.profilePhoto ? (
            <img
              className="mr-1"
              src={pendingService?.tenant?.profilePhoto}
              alt="Header Avatar"
              width="70"
              height="60"
            />
          ) : (
            <img
              className="mr-1"
              src={avatar}
              alt="Header Avatar"
              width="70"
              height="60"
            />
          )}
          
          <span>{pendingService?.tenant?.address?.houseNoAddress}</span>
        </Link>
      </>
    ),
    description: `${pendingService?.description}`,
    date: `${pendingService?.appointedDate}`,
    status: `${pendingService?.status}`,
  }))

  const completeRequests = services?.entities?.map((service) => {
    return {
    property: (
      <>
        <Link to={`/serviceSummary/${service?.id}`} className="mr-3" onClick={() => setShowPreview(true)}>
          {service?.tenant?.profilePhoto ? (
            <img
              className="mr-1"
              src={service?.tenant?.profilePhoto}
              alt="Header Avatar"
              width="70"
              height="60"
            />
          ) : (
            <img
              className="mr-1"
              src={avatar}
              alt="Header Avatar"
              width="70"
              height="60"
            />
          )}
          <span>{service?.tenant?.address?.houseNoAddress}</span>
        </Link>
      </>
    ),
    description: `${service?.description}`,
    date: `${service?.appointedDate}`,
    status: `${service?.status}`,
  }})

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
    rows: completeRequests?.concat(pendingRequests)?.flatMap((el) => {
      return el?.length <= 0 ? [] : el;
    })
  };

  return (
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <MDBDataTable responsive striped bordered data={data} />
      )}
    </div>
  );
};

export default ServiceRequest;
