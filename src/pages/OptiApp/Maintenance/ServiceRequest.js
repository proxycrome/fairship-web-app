import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
// import livingRoom from "../../../assets/images/Living.png";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/Common/Loading/index";
import avatar from "../../../assets/images/avi.jpg";
import { getAllServiceReq } from "../../../store/actions";


const ServiceRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceReq());
  }, [dispatch]);

  const { services, loading } = useSelector((state) => state.Maintenance);
  // console.log(services);
  

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
    rows: services?.map((service) => {
      return {
      property: (
        <>
          <Link to={`/serviceSummary/${service?.id}`} className="mr-3">
            {service?.property?.indexImage ? (
              <img
                className="mr-1"
                src={service?.property?.indexImage}
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
            <span>{service?.property?.parentProperty?.title} {service?.property?.title}</span>
          </Link>
        </>
      ),
      description: `${service?.description}`,
      date: `${service?.appointedDate} ${service?.appointedTime}`,
      status: `${service?.status}`,
    }})
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
