import React, { useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Col,
  FormGroup,
  Alert,
} from 'reactstrap';

import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { postTransaction,getAccounts, fetchRental } from '../../../store/actions';
import { clearMessages } from '../../../store/Accounting/actions';
import { useSelector, useDispatch } from 'react-redux';

const RecordTransaction = ({ closePage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccounts());
    dispatch(fetchRental('CURRENT'))
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch])

  const {accounts, transMessage, transErrorMessage } = useSelector(state => state.Accounting);

  const { rental } = useSelector(state => state.Rental);

  // console.log(transMessage);

  // console.log(transErrorMessage);

  useEffect(() => {
    if(transMessage) {
      setTimeout(() => {
        dispatch(clearMessages());
        dispatch(getAccounts());
        dispatch(fetchRental('CURRENT'))
      }, 3000)
    }
  }, [dispatch, transMessage]);

  const handleSubmit = (event, values) => {
    const formData = {
      ...values,
      accountId: +values.accountId,
      amountPaid: +values.amountPaid,
      balance: +values.balance,
      propertyId: +values.propertyId,
      tenantId: +values.tenantId,
    }
    // console.log(formData);
    dispatch(postTransaction(formData));
  }

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <span onClick={closePage} className="mx-2 font-size-14 mb-2" style={{cursor: "pointer"}}>
            <span>
              <i
                className="fas fa-arrow-left font-size-14 mr-2"
              />
            </span>
            Back
          </span>
          <Card className="mt-2">
            <CardBody>
              <h5>
                <b>Add Account</b>
              </h5>
              {transMessage && (
                <Alert color="success" className="text-center">{transMessage?.message}</Alert>
              )}
              {transErrorMessage && (
                <Alert color="danger" className="text-center">{transErrorMessage?.message}</Alert>
              )}
              <AvForm className="mx-4 mt-2" onValidSubmit={handleSubmit}>
                <AvGroup row>
                  <Col md={6}>
                    <AvField 
                      className="form-control bg-light border border-0"
                      type="select"
                      label="Account"
                      name="accountId"
                      required
                    >
                      <option value="">Select...</option>
                      {accounts?.map(acc => (
                        <option key={acc.id} value={acc.id}>{acc.accountName}</option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="date"
                      label="Payment Date"
                      name="paymentDate"
                      placeholder="Payment Date"
                      required
                    />
                  </Col>
                </AvGroup>

                <AvGroup row>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="number"
                      label="Amount Paid"
                      name="amountPaid"
                      placeholder="Amount Paid"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="number"
                      label="Balance"
                      name="balance"
                      placeholder="Balance"
                    />
                  </Col>
                </AvGroup>
                <AvGroup row>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="select"
                      label="Property"
                      name="propertyId"
                      placeholder="Property"
                      required
                    >
                      <option value="">Select...</option>
                      {rental?.entities?.map(data => (
                        <option key={data.property.id} value={data.property.id}>{data.property.parentProperty?.title} {data.property.title}</option>
                      ))}
                    </AvField>
                  </Col>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="select"
                      label="Tenant"
                      name="tenantId"
                      placeholder="Tenant"
                      required
                    >
                      <option value="">Select...</option>
                      {rental?.entities?.map(data => (
                        <option key={data.id} value={data.tenant.id}>{data.tenant.firstName} {data.tenant.lastName}</option>
                      ))}
                    </AvField>
                  </Col>
                </AvGroup>
                <AvGroup row>
                  <Col md={6}>
                    <AvField 
                      className="form-control bg-light border border-0"
                      type="text"
                      label="Payment Category"
                      name="paymentCategory"
                      placeholder="Payment Category (rent, late fee, etc)"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="select"
                      label="Transaction Type"
                      name="transactionType"
                      placeholder="Credit/Debit"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="CREDIT">Credit</option>
                      <option value="DEBIT">Debit</option>
                    </AvField>
                  </Col>
                </AvGroup>
                <FormGroup>
                  <div className="text-center">
                    <button className="btn btn-success px-5">Save</button>
                  </div>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default RecordTransaction;
