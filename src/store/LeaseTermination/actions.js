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

export const getLeaseTerminations = () => {
  return {
    type: GET_LEASE_TERMINATIONS,
  };
};

export const getLeaseTerminationsSuccess = (data) => {
  return {
    type: GET_LEASE_TERMINATIONS_SUCCESS,
    payload: data,
  };
};

export const getLeaseTerminationsError = (error) => {
  return {
    type: GET_LEASE_TERMINATIONS_ERROR,
    payload: error,
  };
};

export const reviewLeaseTermination = (formData) => {
  return {
    type: REVIEW_LEASE_TERMINATION,
    payload: formData,
  };
};

export const reviewLeaseTerminationSuccess = (data) => {
  return {
    type: REVIEW_LEASE_TERMINATION_SUCCESS,
    payload: data,
  };
};

export const reviewLeaseTerminationError = (error) => {
  return {
    type: REVIEW_LEASE_TERMINATION_ERROR,
    payload: error,
  };
};

export const requestLeaseTermination = (formData) => {
  return {
    type: REQUEST_LEASE_TERMINATION,
    payload: formData,
  };
};

export const requestLeaseTerminationSuccess = (data) => {
  return {
    type: REQUEST_LEASE_TERMINATION_SUCCESS,
    payload: data,
  };
};

export const requestLeaseTerminationError = (error) => {
  return {
    type: REQUEST_LEASE_TERMINATION_ERROR,
    payload: error,
  };
};

export const clearLeaseTermMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};
