import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_SUCCESSFUL,
  LOAD_USER_ERROR,
  AUTH_ERROR,
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

export const checkLogin = (user, history) => {
  return {
    type: CHECK_LOGIN,
    payload: { user, history },
  };
};

export const loginUserSuccessful = (token) => {
  return {
    type: LOGIN_USER_SUCCESSFUL,
    payload: token,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    // payload: error,
  };
};

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const loadUser = (payload) => {
  return {
    type: LOAD_USER,
    payload: { payload },
  };
};

export const loadUserSuccessful = (payload) => {
  return {
    type: LOAD_USER_SUCCESSFUL,
    payload: payload,
  };
};

export const loadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    payload: error,
  };
};

// Register Module
export const registerUser = (userInfo) => {
  return {
    type: REGISTER_USER,
    payload: { userInfo },
  };
};

export const registerUserSuccessful = (user) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
};

export const registerUserFailed = (error) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: error,
  };
};

export const activateAccount = (id, history) => {
  return {
    type: ACTIVATE_USER,
    payload: { id, history },
  };
};

export const activateAccountSuccess = (payload) => {
  return {
    type: ACTIVATE_USER_SUCCESS,
    payload: payload,
  };
};

export const activateAccountFailed = (error) => {
  return {
    type: ACTIVATE_USER_FAILED,
    payload: error,
  };
};

// forgetPassword
export const forgetUser = (user, history) => {
  return {
    type: FORGET_USER,
    payload: { user, history },
  };
};

export const forgetUserSuccessful = (message) => {
  return {
    type: FORGET_USER_SUCCESSFUL,
    payload: message,
  };
};

export const userForgetPasswordError = (error) => {
  return {
    type: FORGET_PASSWORD_API_FAILED,
    payload: error,
  };
};

// Create New Password
export const createNewPassword = (user, history) => {
  return {
    type: CREATE_NEW_PASSWORD,
    payload: { user, history },
  };
};

export const createNewPasswordSuccessful = (message) => {
  return {
    type: CREATE_NEW_PASSWORD_SUCCESSFUL,
    payload: message,
  };
};

export const createNewPasswordError = (error) => {
  return {
    type: CREATE_NEW_PASSWORD_API_FAILED,
    payload: error,
  };
};
