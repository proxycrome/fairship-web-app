import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Row, Col, Input } from 'reactstrap';

import TransactionTable from './TransactionTable';
import AccountTable from './AccountTable';

import CreateAccount from './CreateAccount';
import RecordTransaction from './RecordTransaction';

const Accountant = () => {
  const [showAccountTable, SetAccountTable] = useState(true);
  const [showPage, toggleHome] = useState('home');

  const toggleFunction = (value) => {
    toggleHome(value);
  };

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {showPage === 'home' && (
            <>
              <div>
                <h5 className="mb-2">
                  <b>Accounting</b>
                </h5>
                <Row>
                  <Col md={4} xs={12}>
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
                  </Col>
                  <Col md={8} xs={12} className="text-right">
                    <button
                      className="btn btn-success ml-4"
                      onClick={() => toggleFunction('account')}
                    >
                      Add Account
                    </button>

                    <button
                      className="btn btn-outline-success ml-2"
                      onClick={() => toggleFunction('transaction')}
                    >
                      Record Transaction
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className="my-3"
                    md={{
                      offset: 4,
                      size: 4,
                    }}
                    sm="12"
                  >
                    <div className="p-2 d-flex justify-content-around">
                      <div className="text-center bg-white p-1 rounded">
                        <button
                          className={`btn ${
                            showAccountTable
                              ? 'bg-success text-white'
                              : 'btn-white'
                          } mr-1 px-4`}
                          onClick={() => SetAccountTable(true)}
                        >
                          Account
                        </button>
                        <button
                          className={`btn ${
                            !showAccountTable
                              ? 'bg-success text-white'
                              : 'btn-white'
                          } mr-1`}
                          onClick={() => SetAccountTable(false)}
                        >
                          Transactions
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
                {showAccountTable ? <AccountTable /> : <TransactionTable />}
              </div>
            </>
          )}
          {showPage === 'account' && (
            <CreateAccount closePage={() => toggleHome('home')} />
          )}
          {showPage === 'transaction' && (
            <RecordTransaction closePage={() => toggleHome('home')} />
          )}
        </Container>
      </div>
    </>
  );
};

export default Accountant;
