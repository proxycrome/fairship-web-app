import {
    GET_ALL_SERVICE_REQ_COMPLETE,
    GET_ALL_SERVICE_REQ_COMPLETE_SUCCESS,
    GET_ALL_SERVICE_REQ_COMPLETE_FAILURE,
    GET_ALL_SERVICE_REQ_PENDING,
    GET_ALL_SERVICE_REQ_PENDING_SUCCESS,
    GET_ALL_SERVICE_REQ_PENDING_FAILURE
  } from './actionTypes.js';

  export const getAllServiceReqComplete = () => {
      return {
          type: GET_ALL_SERVICE_REQ_COMPLETE
      }
  }

  export const getAllServiceReqCompleteSuccess = (data) => {
      return {
          type: GET_ALL_SERVICE_REQ_COMPLETE_SUCCESS,
          payload: data
      }
  }

  export const getAllServiceReqCompleteFailure = (error) => {
      return {
          type: GET_ALL_SERVICE_REQ_COMPLETE_FAILURE,
          payload: error
      }
  }

  export const getAllServiceReqPending = () => {
      return {
          type: GET_ALL_SERVICE_REQ_PENDING
      }
  }

  export const getAllServiceReqPendingSuccess = (data) => {
      return {
          type: GET_ALL_SERVICE_REQ_PENDING_SUCCESS,
          payload: data
      }
  }

  export const getAllServiceReqPendingFailure = (error) => {
    return {
        type: GET_ALL_SERVICE_REQ_PENDING_FAILURE,
        payload: error
    }
}