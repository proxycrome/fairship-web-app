import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES_ERROR,
} from './actionTypes.js';

// Fetch appointment
export const fetchProperties = () => {
  return {
    type: FETCH_PROPERTIES,
  };
};

export const fetchPropertiesSuccessful = (message) => {
  return {
    type: FETCH_PROPERTIES_SUCCESSFUL,
    payload: message,
  };
};

export const fetchPropertiesError = (error) => {
  return {
    type: FETCH_PROPERTIES_ERROR,
    payload: error,
  };
};
