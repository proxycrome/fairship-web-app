import React, { useEffect } from 'react';
// import { SearchOutlined } from '@mui/icons-material'
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import { getTransactions } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import emptyCan from "../../../assets/images/EmptyCan.png";
import Loader from "../../../components/Common/Loading/index";

const TransactionTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  const { loading, transactions } = useSelector(state => state.Accounting);

  // console.log(transactions);

  return (
    <>
      <div>
        <Row>
          <Col xs={12}>
            {loading ? (
              <Card>
                <CardBody>
                  <Loader loading={loading} />
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody>
                  {transactions && transactions.length !== 0 ? (
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
                            {transactions?.map(data => (
                              <tr key={data.id}>
                                <th>{data.accountDetails.accountName}</th>
                                <td>{`${data.paymentDate[2]}-${data.paymentDate[1]}-${data.paymentDate[0]}`}</td>
                                <td>{data.transactionType}</td>
                                <td>{data.paymentCategory}</td>
                                <td>{data.amountPaid.toLocaleString()}</td>
                                <td>{data.balance.toLocaleString()}</td>
                                <td>{data.property.parentProperty?.title} {data.property.title}</td>
                                <td>{data.tenant.firstName} {data.tenant.lastName}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <img src={emptyCan} alt="empty" className="rounded mb-2" />
                      <h4> Table is Empty </h4>
                    </div>
                  )}  
                </CardBody>
              </Card>
            )}  
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TransactionTable;
