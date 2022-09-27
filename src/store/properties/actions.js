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
  UPDATE_UNIT,
  UPDATE_UNIT_SUCCESSFUL,
  UPDATE_UNIT_ERROR,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_ERROR,
  GET_PROPERTY_SUBCATEGORY,
  GET_PROPERTY_SUBCATEGORY_SUCCESS,
  GET_PROPERTY_SUBCATEGORY_ERROR,
  DUPLICATE_UNIT_PROPERTY,
  PUT_UNIT_PROPERTY,
  CLEAR_MESSAGES,
  DELETE_PROPERTY,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_ERROR,
  DUPLICATE_UNIT_PROPERTY_SUCCESS,
  DUPLICATE_UNIT_PROPERTY_ERROR,
  NOTIFY_ADMIN_WALKTHROUGH,
  NOTIFY_ADMIN_WALKTHROUGH_SUCCESS,
  NOTIFY_ADMIN_WALKTHROUGH_ERROR,
} from './actionTypes.js';

// Fetch appointment
export const fetchProperties = (payload, collectiveId) => {
  return {
    type: FETCH_PROPERTIES,
    payload: { payload, collectiveId },
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
    payload,
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
    payload: { data, unitId },
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

export const updateUnitProperty = (data, unitId) => {
  return {
    type: UPDATE_UNIT,
    payload: { data, unitId },
  };
};

export const updateUnitPropertySuccessful = (message) => {
  return {
    type: UPDATE_UNIT_SUCCESSFUL,
    payload: message,
  };
};

export const updateUnitPropertyError = (error) => {
  return {
    type: UPDATE_UNIT_ERROR,
    payload: error,
  };
};

export const duplicateUnitProperty = (id) => {
  return {
    type: DUPLICATE_UNIT_PROPERTY,
    payload: id,
  };
};

export const duplicateUnitPropertySuccess = (data) => {
  return {
    type: DUPLICATE_UNIT_PROPERTY_SUCCESS,
    payload: data,
  };
};

export const duplicateUnitPropertyError = (error) => {
  return {
    type: DUPLICATE_UNIT_PROPERTY_ERROR,
    payload: error,
  };
};

export const getPropertyTypes = () => {
  return {
    type: GET_PROPERTY_TYPES,
  };
};

export const getPropertyTypesSuccess = (data) => {
  return {
    type: GET_PROPERTY_TYPES_SUCCESS,
    payload: data,
  };
};

export const getPropertyTypesError = (error) => {
  return {
    type: GET_PROPERTY_TYPES_ERROR,
    payload: error,
  };
};

export const getPropertySubcategory = (id) => {
  return {
    type: GET_PROPERTY_SUBCATEGORY,
    payload: { id },
  };
};

export const getPropertySubcategorySuccess = (data) => {
  return {
    type: GET_PROPERTY_SUBCATEGORY_SUCCESS,
    payload: data,
  };
};

export const getPropertySubcategoryError = (error) => {
  return {
    type: GET_PROPERTY_SUBCATEGORY_ERROR,
    payload: error,
  };
};

export const putUnitProperty = (formData, propertyId) => {
  return {
    type: PUT_UNIT_PROPERTY,
    payload: { formData, propertyId },
  };
};

export const clearUnitMessage = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

export const deleteProperty = (propertyId) => {
  return {
    type: DELETE_PROPERTY,
    payload: { propertyId },
  };
};

export const deletePropertySuccess = (data) => {
  return {
    type: DELETE_PROPERTY_SUCCESS,
    payload: data,
  };
};

export const deletePropertyError = (error) => {
  return {
    type: DELETE_PROPERTY_ERROR,
    payload: error,
  };
};

export const notifyAdminWalkthrough = (formData, history, id) => {
  return {
    type: NOTIFY_ADMIN_WALKTHROUGH,
    payload: { formData, history, id },
  };
};

export const notifyAdminWalkthroughSuccess = (data) => {
  return {
    type: NOTIFY_ADMIN_WALKTHROUGH_SUCCESS,
    payload: data,
  };
};

export const notifyAdminWalkthroughError = (error) => {
  return {
    type: NOTIFY_ADMIN_WALKTHROUGH_ERROR,
    payload: error,
  };
};
