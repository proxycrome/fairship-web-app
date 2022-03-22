import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES_ERROR,

  CREATE_PROPERTIES,
  CREATE_PROPERTIES_SUCCESSFUL,
  CREATE_PROPERTIES_ERROR,
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

// create properties
export const createProperties = (payload) => {
  return {
    type: CREATE_PROPERTIES,
    payload: payload
  };
};

export const createPropertiesSuccessful = (message) => {
  return {
    type: CREATE_PROPERTIES_SUCCESSFUL,
    payload: message,
  };
};

export const createPropertiesError = (error) => {
  return {
    type: CREATE_PROPERTIES_ERROR,
    payload: error,
  };
};
