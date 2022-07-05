import React from 'react';
import { Input, Table, Card, CardBody } from 'reactstrap';

const Document = () => {
  return (
    <div className="page-content">
      <Card>
        <CardBody>
          <h5 className="ml-2"> Documents </h5>
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
              <span>Filter By :</span>
              <select className="p-1 ml-2">
                <option> Document</option>
              </select>
            </div>
          </div>
          <div className="table-rep-plugin mt-4">
            <div
              className="table-responsive mb-0"
              data-pattern="priority-columns"
            >
              <Table id="tech-companies-1" striped responsive>
                <thead>
                  <tr>
                    <th data-priority="1">Name</th>
                    <th data-priority="3">Property</th>
                    <th data-priority="1">Unit</th>
                    <th data-priority="3">Type</th>
                    <th data-priority="3">Date</th>
                    <th data-priority="3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex align-items-center">
                      <i className=" ri-profile-line font-size-14" />
                      <span className="co-name mx-2">Rental Application</span>
                    </td>
                    <td>Cosy Studio in the heart of lagos</td>
                    <th data-priority="1">Unit</th>
                    <td>Move in</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className=" ri-eye-line"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <i className=" ri-profile-line font-size-14" />
                      <span className="co-name mx-2">Lease Agreement</span>
                    </td>
                    <td>Cosy Studio in the heart of lagos</td>
                    <th data-priority="1">Unit</th>
                    <td>Move Out</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className=" ri-eye-line"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <i className=" ri-profile-line font-size-14" />
                      <span className="co-name mx-2">Rental Application</span>
                    </td>
                    <td>Cosy Studio in the heart of lagos</td>
                    <th data-priority="1">Unit</th>
                    <td>External</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className=" ri-eye-line"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-center">
                      <i className=" ri-profile-line font-size-14" />
                      <span className="co-name mx-2">Lease Agreement</span>
                    </td>
                    <td>Cosy Studio in the heart of lagos</td>
                    <th data-priority="1">Unit</th>
                    <td>Bi-annual</td>
                    <td>3rd Jul 2020</td>
                    <td>
                      <i className=" ri-eye-line"></i>
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

export default Document;
