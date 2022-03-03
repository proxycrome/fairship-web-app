import React from 'react';
// import { SearchOutlined } from '@mui/icons-material'
import { Row, Col, Card, CardBody, Table } from 'reactstrap';

const AccountantTable = () => {
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
                            <th>Account Number</th>
                            <th>Bank Name</th>
                            <th>Branch</th>
                            <th>Balance</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>GTB</td>
                            <td>Move in</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
                          </tr>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>United Bank for Africa</td>
                            <td>Move Out</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
                          </tr>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>First Bank</td>
                            <td>Move in</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
                          </tr>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>GTB</td>
                            <td>Bi-annual</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
                          </tr>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>Zenith</td>
                            <td>Move in</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
                          </tr>
                          <tr>
                            <th>Realest Limited</th>
                            <td>001</td>
                            <td>Cosy Studio in the heart of Lagos</td>
                            <td>Move Out</td>
                            <td>N500,000</td>
                            <td>Active⋮</td>
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

export default AccountantTable;
