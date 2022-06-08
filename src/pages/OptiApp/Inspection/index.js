import React, { useEffect, useState } from 'react';
import { Input, Button, Table, Card, CardBody, Select } from 'reactstrap';
import NewInspection from './NewInspection';
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
  }, [payloadStatus]);

  console.log(inspections);

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
              <div className="d-flex justify-content-between">
                <div className="search-box">
                  <div className="position-relative">
                    <Input
                      type="text"
                      className="form-control rounded"
                      placeholder="Search..."
                    />
                    <i className="mdi mdi-magnify search-icon"></i>
                  </div>
                </div>

                <div className="text-right">
                  <select
                    className="custom-select custom-select-sm bg-light"
                    value={payloadStatus}
                    onChange={(e) => setPayloadStatus(e.target.value)}
                  >
                    <option value="PENDING">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                    <option defaultValue>All Inspections</option>
                  </select>
                </div>
              </div>
              {inspections?.entities?.length !== 0 ? (
                <div className="table-rep-plugin mt-4">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <Table id="tech-companies-1" striped responsive>
                      <thead>
                        <tr>
                          <th>Tenant</th>
                          <th data-priority="1">Unit Number</th>
                          <th data-priority="3">Property</th>
                          <th data-priority="1">Type</th>
                          <th data-priority="3">Date</th>
                          {payloadStatus !== 'PENDING' && (
                            <th data-priority="3">Actions</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {inspections?.entities?.map((inspect) => (
                          <tr key={inspect?.id}>
                            <td className="d-flex align-items-center">
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
                            </td>
                            <td>001</td>
                            <td>
                              {inspect?.rent?.property?.address?.houseNoAddress}
                            </td>
                            <td>{inspect?.type}</td>
                            <td>{inspect?.createdAt}</td>
                            {payloadStatus !== 'PENDING' && (
                              <td>
                                <Link to={`/create_inspection/${inspect?.rent?.id}/${inspect?.id}`}>
                                  <button className="btn btn-success btn-sm">
                                    Inspect
                                  </button>
                                </Link>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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
