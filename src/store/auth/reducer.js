import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOAD_USER,
  LOGOUT_USER,
  AUTH_ERROR,
  LOGOUT_USER_SUCCESS,
  LOAD_USER_SUCCESSFUL,
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  ACTIVATE_USER,
  ACTIVATE_USER_SUCCESS,
  ACTIVATE_USER_FAILED,
  FORGET_USER,
  FORGET_USER_SUCCESSFUL,
  FORGET_PASSWORD_API_FAILED,
  CREATE_NEW_PASSWORD,
  CREATE_NEW_PASSWORD_SUCCESSFUL,
  CREATE_NEW_PASSWORD_API_FAILED,
} from './actionTypes';

const initialState = {
  user: null,
  loginError: null,
  isAuthenticated: null,
  registrationError: null,
  isRegistered: false,
  activationError: null,
  message: null,
  forgetError: null,
  message: null,
  loading: false,
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
    case LOAD_USER:
      state = {
        ...state,
        loginError: null,
        loading: true,
      };
      break;
    case LOGIN_USER_SUCCESSFUL:
      localStorage.setItem('fairshipToken', action.payload.token);
      state = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
      break;
    case LOGOUT_USER:
      state = { ...state, loading: true };
      break;

    case LOGOUT_USER_SUCCESS:
      state = {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
      break;

    case LOAD_USER_SUCCESSFUL:
      state = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
      break;

    // Register
    case REGISTER_USER:
      state = {
        ...state,
        user: null,
        loading: true,
        isRegistered: false,
        registrationError: null,
      };
      break;

    case REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        user: action.payload.data,
        isRegistered: true,
        loading: false,
        registrationError: null,
      };
      break;

    case REGISTER_USER_FAILED:
      state = {
        ...state,
        loading: false,
        isRegistered: false,
        registrationError: action.payload,
      };
      break;

    case ACTIVATE_USER:
      state = {
        ...state,
        loading: true,
        registrationError: action.payload,
      };
      break;

    case ACTIVATE_USER_SUCCESS:
      state = {
        ...state,
        loading: true,
        message: 'Account is now active please login!',
      };
      break;

    case ACTIVATE_USER_FAILED:
      state = {
        ...state,
        loading: true,
        activationError: action.payload,
      };
      break;

    // Reset password
    case FORGET_USER:
      state = {
        ...state,
        user: null,
        loading: true,
        forgetError: null,
      };
      break;
    case FORGET_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        message: action.payload,
      };
      break;

    // Create New password
    case CREATE_NEW_PASSWORD:
      state = {
        ...state,
        user: null,
        loading: true,
        forgetError: null,
        message: null,
      };
      break;
    case CREATE_NEW_PASSWORD_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        message: action.payload,
      };
      break;
    case FORGET_PASSWORD_API_FAILED:
    case CREATE_NEW_PASSWORD_API_FAILED:
      state = {
        ...state,
        loading: false,
        forgetError: action.payload,
      };
      break;

    // Error
    case API_ERROR:
    case AUTH_ERROR:
      state = {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        loginError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Account;
