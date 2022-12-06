import {
  POST_NEW_PASSWORD,
  POST_NEW_PASSWORD_SUCCESSFUL,
  POST_NEW_PASSWORD_ERROR,
  CLEAR_MESSAGES,
  REVIEW_USER,
  REVIEW_USER_SUCCESS,
  REVIEW_USER_ERROR,
} from "./actionTypes";

const initialState = {
  successMessage: null,
  loading: false,
  error: null,
  reviewMsg: null,
  reviewError: null,
};

const Settings = (state = initialState, action) => {
  switch (action.type) {
    case POST_NEW_PASSWORD:
    case REVIEW_USER:
      state = {
        ...state,
        loading: true,
      };
      break;

    case POST_NEW_PASSWORD_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        successMessage: action.payload,
        error: null,
      };
      break;

    case POST_NEW_PASSWORD_ERROR:
      state = {
        ...state,
        loading: false,
        successMessage: null,
        error: action.payload,
      };
      break;

    case CLEAR_MESSAGES:
      state = {
        ...state,
        loading: false,
        successMessage: null,
        error: null,
      };
      break;

    case REVIEW_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        reviewMsg: action.payload,
        reviewError: null,
      };
      break;

    case REVIEW_USER_ERROR:
      state = {
        ...state,
        loading: false,
        reviewMsg: null,
        reviewError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Settings;
