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
  ACCEPT_INVOICE_SUCCESS,
  ACCEPT_INVOICE_ERROR,
  REJECT_INVOICE,
  REJECT_INVOICE_SUCCESS,
  REJECT_INVOICE_ERROR,
  ACCEPT_SERVICE_AGREEMENT,
  ACCEPT_SERVICE_AGREEMENT_SUCCESS,
  ACCEPT_SERVICE_AGREEMENT_ERROR,
  INIT_PART_PAYMENT,
  INIT_PART_PAYMENT_SUCCESS,
  INIT_PART_PAYMENT_ERROR,
  INIT_COMPLETE_PAYMENT,
  INIT_COMPLETE_PAYMENT_SUCCESS,
  INIT_COMPLETE_PAYMENT_ERROR,
} from "./actionTypes.js";

export const getAllServiceReq = () => {
  return {
    type: GET_ALL_SERVICE_REQ,
  };
};

export const getAllServiceReqSuccess = (data) => {
  return {
    type: GET_ALL_SERVICE_REQ_SUCCESS,
    payload: data,
  };
};

export const getAllServiceReqFailure = (error) => {
  return {
    type: GET_ALL_SERVICE_REQ_FAILURE,
    payload: error,
  };
};

export const getServiceTypes = () => {
  return {
    type: GET_SERVICE_TYPES,
  };
};

export const getServiceTypesSuccess = (data) => {
  return {
    type: GET_SERVICE_TYPES_SUCCESS,
    payload: data,
  };
};

export const getServiceTypesFailure = (error) => {
  return {
    type: GET_SERVICE_TYPES_FAILURE,
    payload: error,
  };
};

export const postMaintenanceReq = (formData) => {
  return {
    type: POST_MAINTENANCE_REQ,
    payload: { formData },
  };
};

export const postMaintenanceReqSuccess = (data) => {
  return {
    type: POST_MAINTENANCE_REQ_SUCCESS,
    payload: data,
  };
};

export const postMaintenanceReqFailure = (error) => {
  return {
    type: POST_MAINTENANCE_REQ_FAILURE,
    payload: error,
  };
};

export const getMaintenanceReq = () => {
  return {
    type: GET_MAINTENANCE_REQ,
  };
};

export const getMaintenanceReqSuccess = (data) => {
  return {
    type: GET_MAINTENANCE_REQ_SUCCESS,
    payload: data,
  };
};

export const getMaintenanceReqFailure = (error) => {
  return {
    type: GET_MAINTENANCE_REQ_FAILURE,
    payload: error,
  };
};

export const fetchService = (serviceId, requestType) => {
  return {
    type: FETCH_SERVICE,
    payload: { serviceId, requestType },
  };
};

export const fetchServiceSuccess = (data) => {
  return {
    type: FETCH_SERVICE_SUCCESS,
    payload: data,
  };
};

export const fetchServiceFailure = (error) => {
  return {
    type: FETCH_SERVICE_FAILURE,
    payload: error,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

export const fetchMaintenance = (id) => {
  return {
    type: FETCH_MAINTENANCE,
    payload: { id },
  };
};

export const fetchMaintenanceSuccess = (data) => {
  return {
    type: FETCH_MAINTENANCE_SUCCESS,
    payload: data,
  };
};

export const fetchMaintenanceFailure = (error) => {
  return {
    type: FETCH_MAINTENANCE_FAILURE,
    payload: error,
  };
};

export const getServiceProviders = (serviceName) => {
  return {
    type: GET_SERVICE_PROVIDERS,
    payload: { serviceName },
  };
};

export const getServiceProvidersSuccess = (data) => {
  return {
    type: GET_SERVICE_PROVIDERS_SUCCESS,
    payload: data,
  };
};

export const getServiceProvidersError = (error) => {
  return {
    type: GET_SERVICE_PROVIDERS_ERROR,
    payload: error,
  };
};

export const getInvoiceDets = (invoiceRef) => {
  return {
    type: GET_INVOICE_DETS,
    payload: { invoiceRef },
  };
};

export const getInvoiceDetsSuccess = (data) => {
  return {
    type: GET_INVOICE_DETS_SUCCESS,
    payload: data,
  };
};

export const getInvoiceDetsError = (error) => {
  return {
    type: GET_INVOICE_DETS_ERROR,
    payload: error,
  };
};

export const acceptInvoice = (id, setShow, dispatch) => {
  return {
    type: ACCEPT_INVOICE,
    payload: { id, setShow, dispatch },
  };
};

export const acceptInvoiceSuccess = (data) => {
  return {
    type: ACCEPT_INVOICE_SUCCESS,
    payload: data,
  };
};

export const acceptInvoiceError = (error) => {
  return {
    type: ACCEPT_INVOICE_ERROR,
    payload: error,
  };
};

export const rejectInvoice = (id, setShow, dispatch) => {
  return {
    type: REJECT_INVOICE,
    payload: { id, setShow, dispatch },
  };
};

export const rejectInvoiceSuccess = (data) => {
  return {
    type: REJECT_INVOICE_SUCCESS,
    payload: data,
  };
};

export const rejectInvoiceError = (error) => {
  return {
    type: REJECT_INVOICE_ERROR,
    payload: error,
  };
};

export const acceptServiceAgreement = (id, dispatch) => {
  return {
    type: ACCEPT_SERVICE_AGREEMENT,
    payload: { id, dispatch },
  };
};

export const acceptServiceAgreementSuccess = (data) => {
  return {
    type: ACCEPT_SERVICE_AGREEMENT_SUCCESS,
    payload: data,
  };
};

export const acceptServiceAgreementError = (error) => {
  return {
    type: ACCEPT_SERVICE_AGREEMENT_ERROR,
    payload: error,
  };
};

export const initPartPayment = (id) => {
    return {
        type: INIT_PART_PAYMENT,
        payload: {id},
    }
}

export const initPartPaymentSuccess = (data) => {
    return {
        type: INIT_PART_PAYMENT_SUCCESS,
        payload: data,
    }
}

export const initPartPaymentError = (error) => {
    return {
        type: INIT_PART_PAYMENT_ERROR,
        payload: error,
    }
}

export const initCompletePayment = (id) => {
    return {
        type: INIT_COMPLETE_PAYMENT,
        payload: {id},
    }
}

export const initCompletePaymentSuccess = (data) => {
    return {
        type: INIT_COMPLETE_PAYMENT_SUCCESS,
        payload: data,
    }
}

export const initCompletePaymentError = (error) => {
    return {
        type: INIT_COMPLETE_PAYMENT_ERROR,
        payload: error,
    }
}