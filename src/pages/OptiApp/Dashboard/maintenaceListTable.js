import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';


import img1 from '../../../assets/images/users/avatar-4.jpg';
const ListTable = ({ Title }) => {

  return (
    <div>
      <Card>
        <CardBody>
          <h4 className="card-title mb-4">
            <i className=" ri-map-pin-2-line mr-2"></i>
            {Title}
          </h4>
          <div className="table-rep-plugin mt-4">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
            >
              <Table id="tech-companies-1" striped responsive>
                <thead>
                  <tr>
                    <th>Tenant</th>
                    <th data-priority="3">Service Type</th>
                    <th data-priority="1">Created On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex align-items-center">
                      <img
                        src={img1}
                        alt="profile"
                        className="avatar-xs rounded-circle"
                      />
                      <span className="co-name mx-2">Robert Williams</span>
                    </td>
                    <td>Electric Reepair</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className="ri-more-2-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <img
                        src={img1}
                        alt="profile"
                        className="avatar-xs rounded-circle"
                      />
                      <span className="co-name mx-2">Robert Williams</span>
                    </td>
                    <td>Electric Reepair</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className="ri-more-2-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <img
                        src={img1}
                        alt="profile"
                        className="avatar-xs rounded-circle"
                      />
                      <span className="co-name mx-2">Robert Williams</span>
                    </td>
                    <td>Electric Reepair</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className="ri-more-2-fill"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <img
                        src={img1}
                        alt="profile"
                        className="avatar-xs rounded-circle"
                      />
                      <span className="co-name mx-2">Robert Williams</span>
                    </td>
                    <td>Electric Reepair</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className="ri-more-2-fill"></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ListTable;