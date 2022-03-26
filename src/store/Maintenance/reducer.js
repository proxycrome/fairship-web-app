import {
    GET_ALL_SERVICE_REQ_COMPLETE,
    GET_ALL_SERVICE_REQ_COMPLETE_SUCCESS,
    GET_ALL_SERVICE_REQ_COMPLETE_FAILURE,
    GET_ALL_SERVICE_REQ_PENDING_SUCCESS,
    GET_ALL_SERVICE_REQ_PENDING,
    GET_ALL_SERVICE_REQ_PENDING_FAILURE
  } from './actionTypes';

const initialState = {
    services: null,
    loading: false,
    error: null,
    pendingServices: null,
}

const Maintenance = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_SERVICE_REQ_PENDING:
        case GET_ALL_SERVICE_REQ_COMPLETE:
            state = {
                ...state,
                loading: true,
                error: null,
            }
        break;

        case GET_ALL_SERVICE_REQ_COMPLETE_SUCCESS:
            state = {
                ...state,
                loading: false,
                services: action.payload,
                error: null,
            }
        break;

        case GET_ALL_SERVICE_REQ_COMPLETE_FAILURE:
            state = {
                ...state,
                loading: false,
                services: null,
                pendingServices: null,
                error: action.payload
            }
        break;

        case GET_ALL_SERVICE_REQ_PENDING_SUCCESS:
            state = {
                ...state,
                loading: false,
                pendingServices: action.payload,
                error: null
            }
        break;

        case GET_ALL_SERVICE_REQ_PENDING_FAILURE:
            state = {
                ...state,
                loading: false,
                services: null,
                pendingServices: null,
                error: action.payload,
            }
        break;

        default:
            state = {...state};
        break;
    }

    return state;
}

export default Maintenance