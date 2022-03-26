import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import livingRoom from "../../../assets/images/Living.png";
import { getAllServiceReqComplete, getAllServiceReqPending } from "../../../store/Maintenance/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Common/Loading/index";


const ServiceRequest = ({ setShowPreview }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServiceReqComplete());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllServiceReqPending())
  }, [dispatch])

  const { services, pendingServices, loading } = useSelector((state) => state.Maintenance);

  console.log(services);

  console.log(pendingServices);

  const pendingRequests = pendingServices?.entities?.map((pendingService) => ({
    property: (
      <>
        <Link to={`/maintenance/${pendingService.id}`} className="mr-3" onClick={() => setShowPreview(true)}>
          <img
            className="mr-1"
            src={livingRoom}
            alt="Header Avatar"
            width="70"
            height="60"
          />
          <span>{pendingService.tenant.address.houseNoAddress}</span>
        </Link>
      </>
    ),
    description: `${pendingService.description}`,
    date: `${pendingService.appointedDate}`,
    status: `${pendingService.status}`,
  }))

  const completeRequests = services?.entities?.map((service) => ({
    property: (
      <>
        <Link to={`/maintenance/${service.id}`} className="mr-3" onClick={() => setShowPreview(true)}>
          <img
            className="mr-1"
            src={livingRoom}
            alt="Header Avatar"
            width="70"
            height="60"
          />
          <span>{service.tenant.address.houseNoAddress}</span>
        </Link>
      </>
    ),
    description: `${service.description}`,
    date: `${service.appointedDate}`,
    status: `${service.status}`,
  }))

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
    rows: completeRequests?.concat(pendingRequests).flatMap((el) => {
      return el?.length <= 0 ? [] : el;
    })
    
    

    // [
    //   {
    //     property: (
    //       <>
    //         <Link to="#" className="mr-3" onClick={() => setShowPreview(true)}>
    //           <img
    //             className="mr-1"
    //             src={livingRoom}
    //             alt="Header Avatar"
    //             width="70"
    //             height="60"
    //           />
    //           <span> Cosy Studio in the heart of lagos</span>
    //         </Link>
    //       </>
    //     ),
    //     description: 'Lorem ipsum dolor sit...',
    //     date: '3rd Jul 2020',
    //     status: 'Completed',
    //   },
    //   {
    //     property: (
    //       <>
    //         <img
    //           className="mr-1"
    //           src={livingRoom}
    //           alt="Header Avatar"
    //           width="70"
    //           height="60"
    //         />
    //         <span> Cosy Studio in the heart of lagos</span>
    //       </>
    //     ),
    //     description: 'Lorem ipsum dolor sit...',
    //     date: '3rd Jul 2020',
    //     status: 'In progress',
    //   },
    //   {
    //     property: (
    //       <>
    //         <img
    //           className="mr-1"
    //           src={livingRoom}
    //           alt="Header Avatar"
    //           width="70"
    //           height="60"
    //         />
    //         <span> Cosy Studio in the heart of lagos</span>
    //       </>
    //     ),
    //     description: 'Lorem ipsum dolor sit...',
    //     date: '3rd Jul 2020',
    //     status: 'Completed',
    //   },
    //   {
    //     property: (
    //       <>
    //         <img
    //           className="mr-1"
    //           src={livingRoom}
    //           alt="Header Avatar"
    //           width="70"
    //           height="60"
    //         />
    //         <span> Cosy Studio in the heart of lagos</span>
    //       </>
    //     ),
    //     description: 'Lorem ipsum dolor sit...',
    //     date: '3rd Jul 2020',
    //     status: 'In progress',
    //   },
    //   {
    //     property: (
    //       <>
    //         <img
    //           className="mr-1"
    //           src={livingRoom}
    //           alt="Header Avatar"
    //           width="70"
    //           height="60"
    //         />
    //         <span> Cosy Studio in the heart of lagos</span>
    //       </>
    //     ),
    //     description: 'Lorem ipsum dolor sit...',
    //     date: '3rd Jul 2020',
    //     status: 'In progress',
    //   },
    // ],
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
