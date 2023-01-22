import React, { useEffect, useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
// import NewInspection from './NewInspection';
// import { Link } from 'react-router-dom'
import { fetchInspections } from '../../../store/inspection/actions';
import { useDispatch, connect } from 'react-redux';
import Loader from '../../../components/Common/Loading/index';
import emptyCan from '../../../assets/images/EmptyCan.png';
// import MoveIn from './MoveIn';
import { Link } from 'react-router-dom';

const Inspection = ({ inspections, fetchInspections, loading }) => {
  const [payloadStatus, setPayloadStatus] = useState('PENDING');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInspections(payloadStatus));
  }, [dispatch, payloadStatus, fetchInspections]);


  const data = {
    columns: [
      {
        label: 'Tenant',
        field: 'tenant',
        width: 150,
      },
      {
        label: 'Property',
        field: 'property',
        width: 100,
      },
      {
        label: 'Type',
        field: 'type',
        width: 100,
      },
      {
        label: 'Date',
        field: 'date',
        width: 100,
      },
      {
        label: 'Status',
        field: 'status',
        width: 100,
      },
      {
        label: 'Actions',
        field: 'actions',
        width: 100,
      },
    ],
    rows: inspections?.entities?.map((inspect) => ({
      tenant: (
        <>
          <div className="d-flex align-items-center">
            <Link to={`previewInspection/${inspect.id}`}>
              <img
                src={inspect?.rent?.tenant?.profilePhoto}
                alt="profile"
                width="38"
                height="38"
              />
              <span className="co-name mx-2">
                {inspect?.rent?.tenant?.firstName}{' '}
                {inspect?.rent?.tenant?.lastName}
              </span>
            </Link>
          </div>
        </>
      ),
      property: `${
        inspect?.rent?.property?.parentProperty?.title
          ? inspect?.rent?.property?.parentProperty?.title
          : ""
      } ${inspect?.rent?.property?.title}`,
      type: `${inspect?.type}`,
      date: `${inspect?.createdAt}`,
      status: `${inspect?.approvalStatus}`,
      actions: inspect.approvalStatus !== 'PENDING' && (
        <Link to={`/create_inspection/${inspect?.rent?.id}/${inspect?.id}`}>
          <button className="btn btn-success btn-sm">Inspect</button>
        </Link>
      ),
    })),
  };

  return (
    <div className="page-content">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="ml-2"> Inspections </h5>
      </div>
      {loading ? (
        <Card>
          <CardBody>
            <Loader loading={loading} />
          </CardBody>
        </Card>
      ) : (
        <>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-end">
                <div className="text-right">
                  <select
                    className="custom-select custom-select-sm bg-light"
                    value={payloadStatus}
                    onChange={(e) => setPayloadStatus(e.target.value)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="">All Inspections</option>
                  </select>
                </div>
              </div>
              {inspections?.entities?.length !== 0 ? (
                <div className="table-rep-plugin mt-4">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <MDBDataTable responsive striped bordered data={data} />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={emptyCan}
                    alt="empty"
                    height={150}
                    className="rounded mb-2"
                  />
                  <h4> Table is Empty </h4>
                </div>
              )}
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { inspections, loading } = state.Inspections;
  return { inspections, loading };
};

export default connect(mapStateToProps, { fetchInspections })(Inspection);
