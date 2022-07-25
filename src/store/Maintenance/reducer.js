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
    CLEAR_MESSAGES
  } from './actionTypes';

const initialState = {
    services: null,
    loading: false,
    error: null,
    serviceTypes: null,
    maintenance: null,
    maintenanceRequests: null,
    serviceSummary: null
}

const Maintenance = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_SERVICE_REQ:
        case GET_SERVICE_TYPES:
        case POST_MAINTENANCE_REQ:
        case GET_MAINTENANCE_REQ:
        case FETCH_SERVICE:
            state = {
                ...state,
                loading: true,
                error: null,
            }
        break;

        case GET_ALL_SERVICE_REQ_SUCCESS:
            state = {
                ...state,
                loading: false,
                services: action.payload,
                error: null,
            }
        break;

        case GET_ALL_SERVICE_REQ_FAILURE:
            state = {
                ...state,
                loading: false,
                services: null,
                pendingServices: null,
                error: action.payload
            }
        break;


        case GET_SERVICE_TYPES_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                serviceTypes: action.payload
            }
        break;

        case GET_SERVICE_TYPES_FAILURE:
            state = {
                ...state,
                loading: false,
                serviceTypes: null,
                error: action.payload,
            }
        break;

        case POST_MAINTENANCE_REQ_SUCCESS:
            state = {
                ...state,
                loading: false,
                maintenance: action.payload,
                error: null
            }
        break;

        case POST_MAINTENANCE_REQ_FAILURE:
            state = {
                ...state,
                loading: false,
                maintenance: null,
                serviceTypes: null,
                error: action.payload
            }
        break;

        case GET_MAINTENANCE_REQ_SUCCESS:
            state = {
                ...state,
                loading: false,
                maintenanceRequests: action.payload,
                error: null,
            }
        break;

        case GET_MAINTENANCE_REQ_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload,
                maintenanceRequests: null
            }
        break;

        case FETCH_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                serviceSummary: action.payload,
                error: null,
            }
        break;

        case FETCH_SERVICE_FAILURE:
            state = {
                ...state,
                loading: false,
                serviceSummary: null,
                error: action.payload
            }
        break;

        case CLEAR_MESSAGES: 
            state = {
                maintenance: null,
                error: null,
            }
            break;

        default:
            state = {...state};
        break;
    }

    return state;
}

export default Maintenance