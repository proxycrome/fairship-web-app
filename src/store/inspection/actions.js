import {
    FETCH_INSPECTIONS,
    FETCH_INSPECTIONS_SUCCESSFUL,
    FETCH_INSPECTIONS_ERROR,
    POST_INSPECTION,
    POST_INSPECTION_SUCCESSFUL,
    POST_INSPECTION_FAILURE
  } from './actionTypes.js';
  
// Fetch inspections
export const fetchInspections = () => {
  return {
    type: FETCH_INSPECTIONS,
  };
};

export const fetchInspectionsSuccessful = (message) => {
  return {
    type: FETCH_INSPECTIONS_SUCCESSFUL,
    payload: message,
  };
};

export const fetchInspectionsError = (error) => {
  return {
    type: FETCH_INSPECTIONS_ERROR,
    payload: error,
  };
};
  
export const postInspection = (formData) => {
  return {
    type: POST_INSPECTION,
    payload: formData
  };
};

export const postInspectionSuccessful = (data) => {
  return {
    type: POST_INSPECTION_SUCCESSFUL,
    payload: data
  }
}

export const postInspectionFailure = (error) => {
  return {
    type: POST_INSPECTION_FAILURE,
    payload: error
  }
}