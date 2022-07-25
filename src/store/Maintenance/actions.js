import {
    GET_ALL_SERVICE_REQ,
    GET_ALL_SERVICE_REQ_SUCCESS,
    GET_ALL_SERVICE_REQ_FAILURE,
    GET_SERVICE_TYPES,
    GET_SERVICE_TYPES_SUCCESS,
    GET_SERVICE_TYPES_FAILURE,
    POST_MAINTENANCE_REQ,
    POST_MAINTENANCE_REQ_SUCCESS,
    POST_MAINTENANCE_REQ_FAILURE,
    GET_MAINTENANCE_REQ,
    GET_MAINTENANCE_REQ_SUCCESS,
    GET_MAINTENANCE_REQ_FAILURE,
    FETCH_SERVICE,
    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICE_FAILURE,
    CLEAR_MESSAGES,
  } from './actionTypes.js';

  export const getAllServiceReq = () => {
      return {
          type: GET_ALL_SERVICE_REQ
      }
  }

  export const getAllServiceReqSuccess = (data) => {
      return {
          type: GET_ALL_SERVICE_REQ_SUCCESS,
          payload: data
      }
  }

  export const getAllServiceReqFailure = (error) => {
      return {
          type: GET_ALL_SERVICE_REQ_FAILURE,
          payload: error
      }
  }

  export const getServiceTypes = () => {
    return {
        type: GET_SERVICE_TYPES,
    } 
  }

  export const getServiceTypesSuccess = (data) => {
      return {
          type: GET_SERVICE_TYPES_SUCCESS,
          payload: data
      }
  }

  export const getServiceTypesFailure = (error) => {
      return {
          type: GET_SERVICE_TYPES_FAILURE,
          payload: error
      }
  }

  export const postMaintenanceReq = (formData) => {
      return {
          type: POST_MAINTENANCE_REQ,
          payload: {formData}
      }
  }

  export const postMaintenanceReqSuccess = (data) => {
      return {
          type: POST_MAINTENANCE_REQ_SUCCESS,
          payload: data,
      }
  }

  export const postMaintenanceReqFailure = (error) => {
      return {
          type: POST_MAINTENANCE_REQ_FAILURE,
          payload: error
      }
  }

  export const getMaintenanceReq = () => {
      return {
          type: GET_MAINTENANCE_REQ,
      }
  }

  export const getMaintenanceReqSuccess = (data) => {
      return {
          type: GET_MAINTENANCE_REQ_SUCCESS,
          payload: data
      }
  }

  export const getMaintenanceReqFailure = (error) => {
      return {
          type: GET_MAINTENANCE_REQ_FAILURE,
          payload: error
      }
  }

  export const fetchService = (serviceId) => {
      return {
          type: FETCH_SERVICE,
          payload: {serviceId}
      }
  }

  export const fetchServiceSuccess = (data) => {
      return {
          type: FETCH_SERVICE_SUCCESS,
          payload: data
      }
  }

  export const fetchServiceFailure = (error) => {
      return {
          type: FETCH_SERVICE_FAILURE,
          payload: error
      }
  }

  export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES,
    }
  }