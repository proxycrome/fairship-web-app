import {
  GET_PAYMENT_GATEWAYS,
  GET_PAYMENT_GATEWAYS_ERROR,
  GET_PAYMENT_GATEWAYS_SUCCESS,
  VERIFY_TRANSACTION,
  VERIFY_TRANSACTION_ERROR,
  VERIFY_TRANSACTION_SUCCESS,
} from "./actionTypes";

export const getPaymentGateways = () => {
  return {
    type: GET_PAYMENT_GATEWAYS,
  };
};

export const getPaymentGatewaysSuccess = (data) => {
  return {
    type: GET_PAYMENT_GATEWAYS_SUCCESS,
    payload: data,
  };
};

export const getPaymentGatewaysError = (error) => {
  return {
    type: GET_PAYMENT_GATEWAYS_ERROR,
    payload: error,
  };
};

export const verifyTransaction = (transRef, setShow) => {
  return {
    type: VERIFY_TRANSACTION,
    payload: { transRef, setShow },
  };
};

export const verifyTransactionSuccess = (data) => {
  return {
    type: VERIFY_TRANSACTION_SUCCESS,
    payload: data,
  };
};

export const verifyTransactionError = (error) => {
  return {
    type: VERIFY_TRANSACTION_ERROR,
    payload: error,
  };
};
