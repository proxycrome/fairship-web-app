import {
  FETCH_EXPIRING,
  FETCH_EXPIRING_SUCCESSFUL,
  FETCH_EXPIRING_ERROR,
  FETCH_EXPIRING_SIXTY,
  FETCH_EXPIRING_SUCCESSFUL_SIXTY,
  FETCH_EXPIRING_ERROR_SIXTY,
  FETCH_EXPIRING_SUCCESSFUL_ONETWENTY,
  FETCH_EXPIRING_ONETWENTY,
  FETCH_EXPIRING_ERROR_ONETWENTY,
  FETCH_EXPIRING_ZERO,
  FETCH_EXPIRING_SUCCESSFUL_ZERO,
  FETCH_EXPIRING_ERROR_ZERO,
  FETCH_ALL_RENTAL,
  FETCH_ALL_RENTAL_SUCCESSFUL,
  FETCH_ALL_RENTAL_ERROR,
} from './actionTypes';

export const fetchExpiring = () => {
  return {
    type: FETCH_EXPIRING,
  };
};

export const fetchExpiringSuccessful = (data) => {
  return {
    type: FETCH_EXPIRING_SUCCESSFUL,
    payload: data,
  };
};

export const fetchExpiringError = (error) => {
  return {
    type: FETCH_EXPIRING_ERROR,
    payload: error,
  };
};

export const fetchExpiringSixty = () => {
  return {
    type: FETCH_EXPIRING_SIXTY,
  };
};

export const fetchExpiringSuccessfulSixty = (data) => {
  return {
    type: FETCH_EXPIRING_SUCCESSFUL_SIXTY,
    payload: data,
  };
};

export const fetchExpiringErrorSixty = (error) => {
  return {
    type: FETCH_EXPIRING_ERROR_SIXTY,
    payload: error,
  };
};

export const fetchExpiringZero = () => {
  return {
    type: FETCH_EXPIRING_ZERO,
  };
};

export const fetchExpiringSuccessfulZero = (data) => {
  return {
    type: FETCH_EXPIRING_SUCCESSFUL_ZERO,
    payload: data,
  };
};

export const fetchExpiringErrorZero = (error) => {
  return {
    type: FETCH_EXPIRING_ERROR_ZERO,
    payload: error,
  };
};

export const fetchExpiringOnetwenty = () => {
  return {
    type: FETCH_EXPIRING_ONETWENTY,
  };
};

export const fetchExpiringSuccessfulOnetwenty = (data) => {
  return {
    type: FETCH_EXPIRING_SUCCESSFUL_ONETWENTY,
    payload: data,
  };
};

export const fetchExpiringErrorOnetwenty = (error) => {
  return {
    type: FETCH_EXPIRING_ERROR_ONETWENTY,
    payload: error,
  };
};

export const fetchAllRental = () => {
  return {
    type: FETCH_ALL_RENTAL,
  };
};

export const fetchAllRentalSuccessful = (data) => {
  return {
    type: FETCH_ALL_RENTAL_SUCCESSFUL,
    payload: data,
  };
};

export const fetchAllRentalError = (error) => {
  return {
    type: FETCH_ALL_RENTAL_ERROR,
    payload: error,
  };
};
