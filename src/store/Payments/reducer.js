import {
  GET_PAYMENT_GATEWAYS,
  GET_PAYMENT_GATEWAYS_ERROR,
  GET_PAYMENT_GATEWAYS_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  paymentData: null,
  paymentDataError: null,
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENT_GATEWAYS:
      state = {
        ...state,
        loading: true,
        paymentData: null,
        paymentDataError: null,
      };
      break;

    case GET_PAYMENT_GATEWAYS_SUCCESS:
      state = {
        ...state,
        loading: false,
        paymentData: action.payload,
        paymentDataError: null,
      };
      break;

    case GET_PAYMENT_GATEWAYS_ERROR:
      state = {
        ...state,
        loading: false,
        paymentData: null,
        paymentDataError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default payment;
