import React, { useState } from 'react';
import { Input, Button, Table, Card, CardBody, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import profileImage from '../../../assets/images/home.png';
import CreateProperty from './CreateProperty';
import PreviewProperty from './PreviewProperty';

const Inspection = () => {
  const [showPreview, SetShowPreview] = useState(false);
  const [ShowCreateProperty, SetCreateProperty] = useState(false);

  if (ShowCreateProperty)
    return <CreateProperty SetCreateProperty={SetCreateProperty} />;

  if (showPreview) return <PreviewProperty BackToHome={SetShowPreview} />;
  return (
    <div className="page-content">
      <Container fluid>
        <h5 className="ml-2"> Properties </h5>
        <div className="d-flex justify-content-between mb-3">
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
            <Button
              color="success"
              onClick={() => SetCreateProperty(!ShowCreateProperty)}
            >
              Upload Properties
            </Button>
          </div>
        </div>

        <Card>
          <CardBody>
            <div className="table-rep-plugin mt-4">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table id="tech-companies-1" striped responsive>
                  <thead>
                    <tr>
                      <th>Properties</th>
                      <th data-priority="1">Type</th>
                      <th data-priority="3">address</th>
                      <th data-priority="1">City</th>
                      <th data-priority="3">State</th>
                      <th data-priority="3">No of Units</th>
                      <th data-priority="3">status</th>
                      <th data-priority="3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex align-items-center">
                        <Link
                          to="#"
                          onClick={() => SetShowPreview(!showPreview)}
                        >
                          <img src={profileImage} alt="home" className="avatar-sm rounded" />
                          <span className="co-name mx-2">Cusy Studio</span>{' '}
                        </Link>
                      </td>
                      <td>Rent</td>
                      <td>Cosy Studio in the heart of lagos</td>
                      <td>Lagos</td>
                      <td>Lagos</td>
                      <td>1</td>
                      <td>Current</td>
                      <td>
                        <i className="ri-more-2-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <img src={profileImage} alt="home" className="avatar-sm rounded" />
                        <span className="co-name mx-2">Cusy Studio</span>
                      </td>
                      <td>Rent</td>
                      <td>Cosy Studio in the heart of lagos</td>
                      <td>Lagos</td>
                      <td>Lagos</td>
                      <td>1</td>
                      <td>Current</td>
                      <td>
                        <i className="ri-more-2-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <img src={profileImage} alt="home" className="avatar-sm rounded" />
                        <span className="co-name mx-2">Cusy Studio</span>
                      </td>
                      <td>Rent</td>
                      <td>Cosy Studio in the heart of lagos</td>
                      <td>Lagos</td>
                      <td>Lagos</td>
                      <td>1</td>
                      <td>Current</td>
                      <td>
                        <i className="ri-more-2-fill"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <img src={profileImage} alt="home" className="avatar-sm rounded" />
                        <span className="co-name mx-2">Cusy Studio</span>
                      </td>
                      <td>Rent</td>
                      <td>Cosy Studio in the heart of lagos</td>
                      <td>Lagos</td>
                      <td>Lagos</td>
                      <td>1</td>
                      <td>Current</td>
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

        {/* <ExtraPages /> */}
      </Container>
    </div>
  );
};

export default Inspection;
