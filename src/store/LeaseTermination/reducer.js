import {
  CLEAR_MESSAGES,
  GET_LEASE_TERMINATIONS,
  GET_LEASE_TERMINATIONS_ERROR,
  GET_LEASE_TERMINATIONS_SUCCESS,
  REQUEST_LEASE_TERMINATION,
  REQUEST_LEASE_TERMINATION_ERROR,
  REQUEST_LEASE_TERMINATION_SUCCESS,
  REVIEW_LEASE_TERMINATION,
  REVIEW_LEASE_TERMINATION_ERROR,
  REVIEW_LEASE_TERMINATION_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  terminationRequests: null,
  terminationRequestsError: null,
  reviewMsg: null,
  reviewMsgError: null,
  requestMsg: null,
  requestMsgError: null,
};

const terminationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEASE_TERMINATIONS:
      state = {
        ...state,
        loading: true,
        terminationRequests: null,
        terminationRequestsError: null,
      };
      break;

    case GET_LEASE_TERMINATIONS_SUCCESS:
      state = {
        ...state,
        loading: false,
        terminationRequests: action.payload,
        terminationRequestsError: null,
      };
      break;

    case GET_LEASE_TERMINATIONS_ERROR:
      state = {
        ...state,
        loading: false,
        terminationRequests: null,
        terminationRequestsError: action.payload,
      };
      break;

    case REVIEW_LEASE_TERMINATION:
      state = {
        ...state,
        loading: true,
        reviewMsg: null,
        reviewMsgError: null,
      };
      break;

    case REVIEW_LEASE_TERMINATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        reviewMsg: action.payload,
        reviewMsgError: null,
      };
      break;

    case REVIEW_LEASE_TERMINATION_ERROR:
      state = {
        ...state,
        loading: false,
        reviewMsg: null,
        reviewMsgError: action.payload,
      };
      break;

    case REQUEST_LEASE_TERMINATION:
      state = {
        ...state,
        loading: true,
        requestMsg: null,
        requestMsgError: null,
      };
      break;

    case REQUEST_LEASE_TERMINATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        requestMsg: action.payload,
        requestMsgError: null,
      };
      break;

    case REQUEST_LEASE_TERMINATION_ERROR:
      state = {
        ...state,
        loading: false,
        requestMsg: null,
        requestMsgError: action.payload,
      };
      break;

    case CLEAR_MESSAGES:
      state = {
        ...state,
        requestMsg: null,
        requestMsgError: null,
        reviewMsg: null,
        reviewMsgError: null,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default terminationReducer;
