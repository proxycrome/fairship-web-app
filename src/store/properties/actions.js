import {
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_SUCCESSFUL,
  FETCH_PROPERTIES_ERROR,


  FETCH_EACH_PROPERTIES,
  FETCH_EACH_PROPERTIES_SUCCESSFUL,
  FETCH_EACH_PROPERTIES_ERROR,

  CREATE_PROPERTIES,
  CREATE_PROPERTIES_SUCCESSFUL,
  CREATE_PROPERTIES_ERROR,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_ERROR,
} from './actionTypes.js';

// Fetch appointment
export const fetchProperties = (payload) => {
  return {
    type: FETCH_PROPERTIES,
    payload
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

export const fetchEachProperties = (payload) => {
  return {
    type: FETCH_EACH_PROPERTIES,
    payload
  };
};

export const fetchEachPropertiesSuccessful = (message) => {
  return {
    type: FETCH_EACH_PROPERTIES_SUCCESSFUL,
    payload: message,
  };
};

export const fetchEachPropertiesError = (error) => {
  return {
    type: FETCH_EACH_PROPERTIES_ERROR,
    payload: error,
  };
};


// create properties
export const createProperties = (data, unitId) => {
  return {
    type: CREATE_PROPERTIES,
    payload: {data, unitId}
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

export const getPropertyTypes = () => {
  return {
    type: GET_PROPERTY_TYPES
  }
}

export const getPropertyTypesSuccess = (data) => {
  return {
    type: GET_PROPERTY_TYPES_SUCCESS,
    payload: data
  }
}

export const getPropertyTypesError = (error) => {
  return {
    type: GET_PROPERTY_TYPES_ERROR,
    payload: error
  }
}