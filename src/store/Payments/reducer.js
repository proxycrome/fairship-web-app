import {
  GET_PAYMENT_GATEWAYS,
  GET_PAYMENT_GATEWAYS_ERROR,
  GET_PAYMENT_GATEWAYS_SUCCESS,
  VERIFY_TRANSACTION,
  VERIFY_TRANSACTION_ERROR,
  VERIFY_TRANSACTION_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  paymentData: null,
  paymentDataError: null,
  verifyTransMsg: null,
  verifyTransError: null,
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

    case VERIFY_TRANSACTION:
      state = {
        ...state,
        loading: true,
        verifyTransMsg: null,
        verifyTransError: null,
      };
      break;

    case VERIFY_TRANSACTION_SUCCESS:
      state = {
        ...state,
        loading: false,
        verifyTransMsg: action.payload,
        verifyTransError: null,
      };
      break;

    case VERIFY_TRANSACTION_ERROR:
      state = {
        ...state,
        loading: false,
        verifyTransMsg: null,
        verifyTransError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default payment;
