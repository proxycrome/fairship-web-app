import {
  CLEAR_MESSAGES,
  POST_NEW_PASSWORD,
  POST_NEW_PASSWORD_ERROR,
  POST_NEW_PASSWORD_SUCCESSFUL,
  REVIEW_USER,
  REVIEW_USER_ERROR,
  REVIEW_USER_SUCCESS,
} from "./actionTypes";

export const postNewPassword = (formData) => {
  return {
    type: POST_NEW_PASSWORD,
    payload: { formData },
  };
};

export const postNewPasswordSuccessful = (data) => {
  return {
    type: POST_NEW_PASSWORD_SUCCESSFUL,
    payload: data,
  };
};

export const postNewPasswordError = (error) => {
  return {
    type: POST_NEW_PASSWORD_ERROR,
    payload: error,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

export const reviewUser = (formData, setShowReview, dispatch, id) => {
  return {
    type: REVIEW_USER,
    payload: { formData, setShowReview, dispatch, id },
  };
};

export const reviewUserSuccess = (data) => {
  return {
    type: REVIEW_USER_SUCCESS,
    payload: data,
  };
};

export const reviewUserError = (error) => {
  return {
    type: REVIEW_USER_ERROR,
    payload: error,
  };
};
