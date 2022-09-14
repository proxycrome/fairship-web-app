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

export const getBuyApplications = () => {
  return {
    type: GET_BUY_APPLICATIONS,
  };
};

export const getBuyApplicationsSuccess = (data) => {
  return {
    type: GET_BUY_APPLICATIONS_SUCCESS,
    payload: data,
  };
};

export const getBuyApplicationsError = (error) => {
  return {
    type: GET_BUY_APPLICATIONS_ERROR,
    payload: error,
  };
};

export const getEachBuyApplication = (buyId) => {
  return {
    type: GET_EACH_BUY_APPLICATION,
    payload: buyId,
  };
};

export const getEachBuyApplicationSuccess = (data) => {
  return {
    type: GET_EACH_BUY_APPLICATION_SUCCESS,
    payload: data,
  };
};

export const getEachBuyApplicationError = (error) => {
  return {
    type: GET_EACH_BUY_APPLICATION_ERROR,
    payload: error,
  };
};

export const reviewApplication = (dataObj) => {
  return {
    type: REVIEW_APPLICATION,
    payload: dataObj,
  };
};

export const reviewApplicationSuccess = (data) => {
  return {
    type: REVIEW_APPLICATION_SUCCESS,
    payload: data,
  };
};

export const reviewApplicationError = (error) => {
  return {
    type: REVIEW_APPLICATION_ERROR,
    payload: error,
  };
};

export const reviewOffer = (dataObj) => {
  return {
    type: REVIEW_OFFER,
    payload: dataObj,
  };
};

export const reviewOfferSuccess = (data) => {
  return {
    type: REVIEW_OFFER_SUCCESS,
    payload: data,
  };
};

export const reviewOfferError = (error) => {
  return {
    type: REVIEW_OFFER_ERROR,
    payload: error,
  };
};

export const reviewGuarantor = (dataObj) => {
  return {
    type: REVIEW_GUARANTOR,
    payload: dataObj,
  };
};

export const reviewGuarantorSuccess = (data) => {
  return {
    type: REVIEW_GUARANTOR_SUCCESS,
    payload: data,
  };
};

export const reviewGuarantorError = (error) => {
  return {
    type: REVIEW_GUARANTOR_ERROR,
    payload: error,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};
