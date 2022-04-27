import {
  FETCH_COUNTRY,
  FETCH_COUNTRY_ERROR,
  FETCH_COUNTRY_SUCCESS,
  FETCH_LGA,
  FETCH_LGA_ERROR,
  FETCH_LGA_SUCCESS,
  FETCH_STATE,
  FETCH_STATE_ERROR,
  FETCH_STATE_SUCCESS,
} from "./actionTypes";

export const fetchCountry = () => {
  return {
    type: FETCH_COUNTRY,
  };
};

export const fetchCountrySuccess = (data) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const fetchCountryError = (error) => {
  return {
    type: FETCH_COUNTRY_ERROR,
    payload: error,
  };
};

export const fetchState = (countryId) => {
  return {
    type: FETCH_STATE,
    payload: { countryId },
  };
};

export const fetchStateSuccess = (data) => {
  return {
    type: FETCH_STATE_SUCCESS,
    payload: data,
  };
};

export const fetchStateError = (error) => {
  return {
    type: FETCH_STATE_ERROR,
    payload: error,
  };
};

export const fetchLga = (stateId) => {
  return {
    type: FETCH_LGA,
    payload: { stateId },
  };
};

export const fetchLgaSuccess = (data) => {
  return {
    type: FETCH_LGA_SUCCESS,
    payload: data,
  };
};

export const fetchLgaError = (error) => {
  return {
    type: FETCH_LGA_ERROR,
    payload: error,
  };
};
