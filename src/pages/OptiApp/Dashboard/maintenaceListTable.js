import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import emptyCan from "../../../assets/images/EmptyCan.png"
import img1 from '../../../assets/images/users/avatar-4.jpg';
import Loader from '../../../components/Common/Loading/index';


const ListTable = ({ Title, maintenance, loading }) => {
  const recentMaintenance = maintenance?.filter(maintain => maintain.status === "PENDING").slice(0, 4);
  
  return (
    <div>
      <Card>
        <CardBody>
          <h4 className="card-title mb-4">
            <i className=" ri-map-pin-2-line mr-2"></i>
            {Title}
          </h4>
          {loading ? (
            <Card>
              <CardBody>
                <Loader loading={loading} />
              </CardBody>
            </Card>
          ) : (
            <div className="table-rep-plugin mt-4">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                {recentMaintenance?.length !== (0 || undefined) ? (
                  <Table id="tech-companies-1" striped responsive>
                    <thead>
                      <tr>
                        <th>Vendor</th>
                        <th data-priority="3">Service Type</th>
                        <th data-priority="1">Created On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMaintenance?.map(maintain => (
                        <tr key={maintain.id}>
                          <td className="d-flex align-items-center">
                            {maintain?.serviceProviderService?.serviceProviderDetail?.useraccount?.profilePhoto ? (
                              <img
                                src={maintain?.serviceProviderService?.serviceProviderDetail?.useraccount?.profilePhoto}
                                alt="profile"
                                className="avatar-xs rounded-circle"
                              />
                            ) : (
                              <img
                                src={img1}
                                alt="profile"
                                className="avatar-xs rounded-circle"
                              />
                            )}  
                            <span className="co-name mx-2">{maintain?.serviceProviderService?.serviceProviderDetail?.useraccount?.firstName} {maintain?.serviceProviderService?.serviceProviderDetail?.useraccount?.lastName}</span>
                          </td>
                          <td>{maintain?.serviceTypeDto?.name}</td>
                          <td>{maintain?.createdAt}</td>
                          <td>
                            <i className="ri-more-2-fill"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <div className="text-center">
                    <img src={emptyCan} alt="empty" className="rounded mb-2" />
                    <h4> Table is Empty </h4>
                  </div>
                )}  
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ListTable;