import React, { useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  Col,
  FormGroup,
  Alert,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { fetchBanks, postAccount } from '../../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../../../store/Accounting/actions';

const CreateAccount = ({ closePage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch])

  useEffect(() => {
    dispatch(clearMessages())
  }, [dispatch])


  const { banks, message, errorMessage } = useSelector(state => state.Accounting);

  const sortedBanks = banks?.sort((a, b) => (a.name > b.name ? 1 : -1));

  useEffect(() => {
    if(message) {
      setTimeout(() => {
        dispatch(clearMessages());
        dispatch(fetchBanks());
      }, 3000)
    }
  }, [dispatch, message]);

  const handleSubmit = (event, values) => {
    const formData = { ...values, bankId: +values.bankId };
    dispatch(postAccount(formData));
  }


  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <span onClick={closePage} className="mx-2 font-size-14 mb-2">
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
              {message && (
                <Alert color="success" className="text-center">{message?.message}</Alert>
              )}
              {errorMessage && (
                <Alert color="danger" className="text-center">{errorMessage?.message}</Alert>
              )} 
              <AvForm className="mx-4 mt-2" onValidSubmit={handleSubmit}>
                <FormGroup row>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="text"
                      label="Account Name"
                      name="accountName"
                      placeholder="Account Name"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <AvField
                      className="form-control bg-light border border-0"
                      type="number"
                      label="Account Number"
                      name="accountNumber"
                      placeholder="Account Number"
                      required
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={12}>
                    <AvField
                      type="select"
                      label="Bank Name"
                      className="form-control bg-light border border-0" 
                      name="bankId"
                      required
                    >
                      <option value="">Select</option>
                      {sortedBanks?.map(bank => (
                        <option key={bank.id} value={bank.id}>{bank.name}</option>
                      ))}
                    </AvField>
                  </Col>
                  {/* <Col md={6}>
                    <Input
                      className="form-control bg-light border border-0"
                      type="text"
                      placeholder="Location"
                    />
                  </Col> */}
                </FormGroup>
                <div className="text-center">
                  <button className="btn btn-success px-5">Save</button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateAccount;
