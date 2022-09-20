import {
  GET_PAYMENT_GATEWAYS,
  GET_PAYMENT_GATEWAYS_ERROR,
  GET_PAYMENT_GATEWAYS_SUCCESS,
} from './actionTypes';

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
