import React from 'react';
// import { SearchOutlined } from '@mui/icons-material'
import { Row, Col, Card, CardBody, Table } from 'reactstrap';

const TransactionTable = () => {
  return (
    <>
      <div>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <Table id="tech-companies-1" striped responsive>
                      <thead>
                        <tr>
                          <th>Account Name</th>
                          <th>Payment Date</th>
                          <th>Credit/Debit</th>
                          <th>Payment Category</th>
                          <th>Amount Paid</th>
                          <th>Balance</th>
                          <th>Property</th>
                          <th>Tenant</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Rent</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Lease Agreement</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Late fees</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Rent</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Rent</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                        <tr>
                          <th>Realest Limited</th>
                          <td>3rd July 2020</td>
                          <td>Credit</td>
                          <td>Rent</td>
                          <td>N500,000</td>
                          <td>N500,000</td>
                          <td>Cosy studio..</td>
                          <td>Jack Michael⋮</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TransactionTable;
