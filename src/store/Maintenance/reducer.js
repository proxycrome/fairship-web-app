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
  FETCH_MAINTENANCE,
  FETCH_MAINTENANCE_SUCCESS,
  FETCH_MAINTENANCE_FAILURE,
  GET_SERVICE_PROVIDERS,
  GET_SERVICE_PROVIDERS_SUCCESS,
  GET_SERVICE_PROVIDERS_ERROR,
  GET_INVOICE_DETS,
  GET_INVOICE_DETS_SUCCESS,
  GET_INVOICE_DETS_ERROR,
  ACCEPT_INVOICE,
  REJECT_INVOICE,
  ACCEPT_INVOICE_SUCCESS,
  ACCEPT_INVOICE_ERROR,
  REJECT_INVOICE_SUCCESS,
  REJECT_INVOICE_ERROR,
  ACCEPT_SERVICE_AGREEMENT,
  ACCEPT_SERVICE_AGREEMENT_SUCCESS,
  ACCEPT_SERVICE_AGREEMENT_ERROR,
  INIT_PART_PAYMENT,
  INIT_COMPLETE_PAYMENT,
  INIT_PART_PAYMENT_SUCCESS,
  INIT_PART_PAYMENT_ERROR,
  INIT_COMPLETE_PAYMENT_SUCCESS,
  INIT_COMPLETE_PAYMENT_ERROR,
} from "./actionTypes";

const initialState = {
  services: null,
  loading: false,
  error: null,
  serviceTypes: null,
  maintenance: null,
  maintenanceRequests: null,
  serviceSummary: null,
  maintenanceSummary: null,
  serviceProviders: null,
  invoiceDetails: null,
  invoiceDetsError: null,
  acceptMsg: null,
  acceptError: null,
  rejectMsg: null,
  rejectError: null,
  agreementMsg: null,
  agreementError: null,
  partPaymentMsg: null,
  partPaymentError: null,
  completePaymentMsg: null,
  completePaymentError: null,
};

const Maintenance = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_REQ:
    case GET_SERVICE_TYPES:
    case POST_MAINTENANCE_REQ:
    case GET_MAINTENANCE_REQ:
    case FETCH_SERVICE:
    case FETCH_MAINTENANCE:
    case GET_SERVICE_PROVIDERS:
    case GET_INVOICE_DETS:
    case ACCEPT_INVOICE:
    case REJECT_INVOICE:
    case ACCEPT_SERVICE_AGREEMENT:
    case INIT_PART_PAYMENT:
    case INIT_COMPLETE_PAYMENT:
      state = {
        ...state,
        loading: true,
      };
      break;

    case GET_ALL_SERVICE_REQ_SUCCESS:
      state = {
        ...state,
        loading: false,
        services: action.payload,
        error: null,
      };
      break;

    case GET_ALL_SERVICE_REQ_FAILURE:
      state = {
        ...state,
        loading: false,
        services: null,
        error: action.payload,
      };
      break;

    case GET_SERVICE_TYPES_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: null,
        serviceTypes: action.payload,
      };
      break;

    case GET_SERVICE_TYPES_FAILURE:
      state = {
        ...state,
        loading: false,
        serviceTypes: null,
        error: action.payload,
      };
      break;

    case POST_MAINTENANCE_REQ_SUCCESS:
      state = {
        ...state,
        loading: false,
        maintenance: action.payload,
        error: null,
      };
      break;

    case POST_MAINTENANCE_REQ_FAILURE:
      state = {
        ...state,
        loading: false,
        maintenance: null,
        error: action.payload,
      };
      break;

    case GET_MAINTENANCE_REQ_SUCCESS:
      state = {
        ...state,
        loading: false,
        maintenanceRequests: action.payload,
        error: null,
      };
      break;

    case GET_MAINTENANCE_REQ_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
        maintenanceRequests: null,
      };
      break;

    case FETCH_SERVICE_SUCCESS:
      state = {
        ...state,
        loading: false,
        serviceSummary: action.payload,
        error: null,
      };
      break;

    case FETCH_SERVICE_FAILURE:
      state = {
        ...state,
        loading: false,
        serviceSummary: null,
        error: action.payload,
      };
      break;

    case CLEAR_MESSAGES:
      state = {
        maintenance: null,
        error: null,
        acceptMsg: null,
        acceptError: null,
        rejectMsg: null,
        rejectError: null,
        agreementError: null,
        agreementMsg: null,
        partPaymentMsg: null,
        partPaymentError: null,
        completePaymentMsg: null,
        completePaymentError: null,
      };
      break;

    case FETCH_MAINTENANCE_SUCCESS:
      state = {
        ...state,
        loading: false,
        maintenanceSummary: action.payload,
        error: null,
      };
      break;

    case FETCH_MAINTENANCE_FAILURE:
      state = {
        ...state,
        loading: false,
        maintenanceSummary: null,
        error: action.payload,
      };
      break;

    case GET_SERVICE_PROVIDERS_SUCCESS:
      state = {
        ...state,
        loading: false,
        serviceProviders: action.payload,
        error: null,
      };
      break;

    case GET_SERVICE_PROVIDERS_ERROR:
      state = {
        ...state,
        loading: false,
        serviceProviders: null,
        error: action.payload,
      };
      break;

    case GET_INVOICE_DETS_SUCCESS:
      state = {
        ...state,
        loading: false,
        invoiceDetails: action.payload,
        invoiceDetsError: null,
      };
      break;

    case GET_INVOICE_DETS_ERROR:
      state = {
        ...state,
        loading: false,
        invoiceDetails: null,
        invoiceDetsError: action.payload,
      };
      break;

    case ACCEPT_INVOICE_SUCCESS:
      state = {
        ...state,
        loading: false,
        acceptMsg: action.payload,
        acceptError: null,
      };
      break;

    case ACCEPT_INVOICE_ERROR:
      state = {
        ...state,
        loading: false,
        acceptMsg: null,
        acceptError: action.payload,
      };
      break;

    case REJECT_INVOICE_SUCCESS:
      state = {
        ...state,
        loading: false,
        rejectMsg: action.payload,
        rejectError: null,
      };
      break;

    case REJECT_INVOICE_ERROR:
      state = {
        ...state,
        loading: false,
        rejectMsg: null,
        rejectError: action.payload,
      };
      break;

    case ACCEPT_SERVICE_AGREEMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        agreementMsg: action.payload,
        agreementError: null,
      };
      break;

    case ACCEPT_SERVICE_AGREEMENT_ERROR:
      state = {
        ...state,
        loading: false,
        agreementMsg: null,
        agreementError: action.payload,
      };
      break;

    case INIT_PART_PAYMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        partPaymentMsg: action.payload,
        partPaymentError: null,
      };
      break;

    case INIT_PART_PAYMENT_ERROR:
      state = {
        ...state,
        loading: false,
        partPaymentMsg: null,
        partPaymentError: action.payload,
      };
      break;

    case INIT_COMPLETE_PAYMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        completePaymentMsg: action.payload,
        completePaymentError: null,
      };
      break;

    case INIT_COMPLETE_PAYMENT_ERROR:
      state = {
        ...state,
        loading: false,
        completePaymentMsg: null,
        completePaymentError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default Maintenance;
