import {
  CLEAR_MESSAGES,
  GET_BUY_APPLICATIONS,
  GET_BUY_APPLICATIONS_ERROR,
  GET_BUY_APPLICATIONS_SUCCESS,
  GET_EACH_BUY_APPLICATION,
  GET_EACH_BUY_APPLICATION_ERROR,
  GET_EACH_BUY_APPLICATION_SUCCESS,
  REVIEW_APPLICATION,
  REVIEW_APPLICATION_ERROR,
  REVIEW_APPLICATION_SUCCESS,
  REVIEW_GUARANTOR,
  REVIEW_GUARANTOR_ERROR,
  REVIEW_GUARANTOR_SUCCESS,
  REVIEW_OFFER,
  REVIEW_OFFER_ERROR,
  REVIEW_OFFER_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  buyApplications: null,
  buyAppError: null,
  application: null,
  applicationError: null,
  appMessage: null,
  appMsgError: null,
  offerMessage: null,
  offerMsgError: null,
  approved: false,
  rejected: false,
  garantMsg: null,
  garantErrorMsg: null,
};

const Buy = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUY_APPLICATIONS:
    case GET_EACH_BUY_APPLICATION:
    case REVIEW_APPLICATION:
    case REVIEW_OFFER:
    case REVIEW_GUARANTOR:
      state = {
        ...state,
        loading: true,
      };
      break;

    case GET_BUY_APPLICATIONS_SUCCESS:
      state = {
        ...state,
        loading: false,
        buyApplications: action.payload,
        buyAppError: null,
      };
      break;

    case GET_BUY_APPLICATIONS_ERROR:
      state = {
        ...state,
        loading: false,
        buyApplications: null,
        buyAppError: action.payload,
      };
      break;

    case GET_EACH_BUY_APPLICATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        application: action.payload,
        applicationError: null,
      };
      break;

    case GET_EACH_BUY_APPLICATION_ERROR:
      state = {
        ...state,
        loading: false,
        application: null,
        applicationError: action.payload,
      };
      break;

    case REVIEW_APPLICATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        appMessage: action.payload,
        appMsgError: null,
        approved: true,
      };
      break;

    case REVIEW_APPLICATION_ERROR:
      state = {
        ...state,
        loading: false,
        appMessage: null,
        appMsgError: action.payload,
        rejected: true,
      };
      break;

    case REVIEW_OFFER_SUCCESS:
      state = {
        ...state,
        loading: false,
        offerMessage: action.payload,
        offerMsgError: null,
      };
      break;

    case REVIEW_OFFER_ERROR:
      state = {
        ...state,
        loading: false,
        offerMessage: null,
        offerMsgError: action.payload,
      };
      break;

    case REVIEW_GUARANTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
        garantMsg: action.payload,
        garantErrorMsg: null,
      };
      break;

    case REVIEW_GUARANTOR_ERROR:
      state = {
        ...state,
        loading: false,
        garantMsg: null,
        garantErrorMsg: action.payload,
      };
      break;

    case CLEAR_MESSAGES:
      state = {
        ...state,
        offerMessage: null,
        offerMsgError: null,
        garantMsg: null,
        garantErrorMsg: null,
      };
      break;

    default:
      state = {
        ...state,
      };
  }

  return state;
};

export default Buy;
