import React, { useEffect } from 'react';
// import { SearchOutlined } from '@mui/icons-material'
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import { getAccounts } from '../../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import emptyCan from "../../../assets/images/EmptyCan.png";
import Loader from "../../../components/Common/Loading/index";

const AccountTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const { accounts, loading } = useSelector(state => state.Accounting);

  console.log(accounts);

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
                  {accounts && accounts?.length !== 0 ? (
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
                              {/* <th>Branch</th>
                                <th>Balance</th> */}
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {accounts?.map(acc => (
                              <tr key={acc.id}>
                                <th>{acc.accountName}</th>
                                <td>{acc.accountNumber}</td>
                                <td>{acc.bank.name}</td>
                                {/* <td>Move in</td>
                                  <td>N500,000</td> */}
                                <td>{acc.status}</td>
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

export default AccountTable;
