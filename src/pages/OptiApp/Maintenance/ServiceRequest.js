import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
// import livingRoom from "../../../assets/images/Living.png";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/Common/Loading/index";
import avatar from "../../../assets/images/avi.jpg";
import { getAllServiceReq } from "../../../store/actions";


const ServiceRequest = ({ setShowPreview }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceReq());
  }, [dispatch]);

  const { services, loading } = useSelector((state) => state.Maintenance);
  

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
    rows: services?.entities?.map((service) => {
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
