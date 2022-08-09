import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import emptyCan from "../../../assets/images/EmptyCan.png"
import Loader from '../../../components/Common/Loading/index';
import img1 from '../../../assets/images/users/avatar-4.jpg';


const ListTable = ({ Title, services, loading }) => {
  const recentServices = services?.filter(service => service?.status === "PENDING").slice(0, 4);

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
                {recentServices?.length !== (0 || undefined) ? (
                  <Table id="tech-companies-1" striped responsive>
                    <thead>
                      <tr>
                        <th>Tenant</th>
                        <th data-priority="3">Service Type</th>
                        <th data-priority="1">Created On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentServices?.map(service => (
                        <tr key={service.id}>
                          <td className="d-flex align-items-center">
                            {service.tenant.profilePhoto ? (
                              <img
                                src={service.tenant.profilePhoto}
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
                            
                            <span className="co-name mx-2">{service.tenant.firstName} {service.tenant.lastName}</span>
                          </td>
                          <td>{service.serviceProviderService.serviceType}</td>
                          <td>{service.appointedDate}</td>
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
