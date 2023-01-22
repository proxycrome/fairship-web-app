import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import {
  ACCEPT_INVOICE,
  ACCEPT_SERVICE_AGREEMENT,
  FETCH_MAINTENANCE,
  FETCH_SERVICE,
  GET_ALL_SERVICE_REQ,
  GET_INVOICE_DETS,
  GET_MAINTENANCE_REQ,
  GET_SERVICE_PROVIDERS,
  GET_SERVICE_TYPES,
  INIT_COMPLETE_PAYMENT,
  INIT_PART_PAYMENT,
  POST_MAINTENANCE_REQ,
  REJECT_INVOICE,
} from "./actionTypes";

import {
  getAllServiceReqSuccess,
  getAllServiceReqFailure,
  getServiceTypesSuccess,
  getServiceTypesFailure,
  postMaintenanceReqSuccess,
  postMaintenanceReqFailure,
  getMaintenanceReqSuccess,
  getMaintenanceReqFailure,
  fetchServiceSuccess,
  fetchServiceFailure,
  fetchMaintenanceSuccess,
  fetchMaintenanceFailure,
  getServiceProvidersSuccess,
  getServiceProvidersError,
  getInvoiceDetsSuccess,
  getInvoiceDetsError,
  acceptInvoiceSuccess,
  acceptInvoiceError,
  rejectInvoiceSuccess,
  rejectInvoiceError,
  acceptServiceAgreementSuccess,
  acceptServiceAgreementError,
  initPartPaymentSuccess,
  initPartPaymentError,
  initCompletePaymentSuccess,
  initCompletePaymentError,
  fetchMaintenance,
} from "./actions";

import {
  acceptInvoiceService,
  acceptServiceAgreementService,
  fetchMaintenanceService,
  fetchServiceServer,
  getAllServicesServer,
  getInvoiceDetsService,
  getMaintenanceReqService,
  getServiceProvidersService,
  getServiceTypesService,
  initCompletePaymentService,
  initPartPaymentService,
  postMaintenanceReqService,
  rejectInvoiceService,
} from "../../services/maintenanceServices";

function* getAllServiceReq() {
  try {
    const response = yield call(getAllServicesServer);
    yield put(getAllServiceReqSuccess(response.data));
  } catch (error) {
    yield put(getAllServiceReqFailure(error?.response?.data));
  }
}

function* getServiceTypes() {
  try {
    const response = yield call(getServiceTypesService);
    yield put(getServiceTypesSuccess(response.data));
  } catch (error) {
    yield put(getServiceTypesFailure(error?.response?.data));
  }
}

function* postMaintenanceReq({ payload: { formData } }) {
  try {
    const response = yield call(postMaintenanceReqService, formData);
    yield put(postMaintenanceReqSuccess(response?.data));
  } catch (error) {
    yield put(postMaintenanceReqFailure(error?.response?.data));
  }
}

function* getMaintenanceReq() {
  try {
    const response = yield call(getMaintenanceReqService);
    yield put(getMaintenanceReqSuccess(response?.data));
  } catch (error) {
    yield put(getMaintenanceReqFailure(error?.response?.data));
  }
}

function* fetchService({ payload: { serviceId, requestType } }) {
  try {
    const response = yield call(fetchServiceServer, serviceId, requestType);
    yield put(fetchServiceSuccess(response?.data));
  } catch (error) {
    yield put(fetchServiceFailure(error?.response?.data));
  }
}

function* fetchEachMaintenance({ payload: { id } }) {
  try {
    const response = yield call(fetchMaintenanceService, id);
    yield put(fetchMaintenanceSuccess(response?.data));
  } catch (error) {
    yield put(fetchMaintenanceFailure(error?.response?.data));
  }
}

function* getServiceProviders({ payload: { serviceName } }) {
  try {
    const response = yield call(getServiceProvidersService, serviceName);
    yield put(getServiceProvidersSuccess(response?.data));
  } catch (error) {
    yield put(getServiceProvidersError(error?.response?.data));
  }
}

function* getInvoiceDets({ payload: { invoiceRef } }) {
  try {
    const response = yield call(getInvoiceDetsService, invoiceRef);
    yield put(getInvoiceDetsSuccess(response.data));
  } catch (error) {
    yield put(getInvoiceDetsError(error?.response?.data));
  }
}

function* acceptInvoice({ payload: { id, setShow, dispatch } }) {
  try {
    const response = yield call(acceptInvoiceService, id);
    yield put(acceptInvoiceSuccess(response.data));
    if (response) {
      setShow(false);
      dispatch(fetchMaintenance(id));
    }
  } catch (error) {
    yield put(acceptInvoiceError(error?.response?.data));
    setShow(false);
  }
}

function* rejectInvoice({ payload: { id, setShow, dispatch } }) {
  try {
    const response = yield call(rejectInvoiceService, id);
    yield put(rejectInvoiceSuccess(response.data));
    if (response) {
      setShow(false);
      dispatch(fetchMaintenance(id));
    }
  } catch (error) {
    yield put(rejectInvoiceError(error?.response?.data));
    setShow(false);
  }
}

function* acceptServiceAgreement({ payload: { id, dispatch } }) {
  try {
    const response = yield call(acceptServiceAgreementService, id);
    yield put(acceptServiceAgreementSuccess(response.data));
    dispatch(fetchMaintenance(id));
  } catch (error) {
    yield put(acceptServiceAgreementError(error?.response?.data));
  }
}

function* initPartPayment({ payload: { id } }) {
  try {
    const response = yield call(initPartPaymentService, id);
    yield put(initPartPaymentSuccess(response.data));
  } catch (error) {
    yield put(initPartPaymentError(error?.response?.data));
  }
}

function* initCompletePayment({ payload: { id } }) {
  try {
    const response = yield call(initCompletePaymentService, id);
    yield put(initCompletePaymentSuccess(response.data));
  } catch (error) {
    yield put(initCompletePaymentError(error?.response?.data));
  }
}

export function* watchFetchService() {
  yield takeEvery(FETCH_SERVICE, fetchService);
}

export function* watchGetAllServiceReq() {
  yield takeEvery(GET_ALL_SERVICE_REQ, getAllServiceReq);
}

export function* watchGetServiceTypes() {
  yield takeEvery(GET_SERVICE_TYPES, getServiceTypes);
}

export function* watchPostMaintenanceReq() {
  yield takeEvery(POST_MAINTENANCE_REQ, postMaintenanceReq);
}

export function* watchGetMaintenanceReq() {
  yield takeEvery(GET_MAINTENANCE_REQ, getMaintenanceReq);
}

export function* watchFetchMaintenance() {
  yield takeEvery(FETCH_MAINTENANCE, fetchEachMaintenance);
}

export function* watchGetServiceProviders() {
  yield takeEvery(GET_SERVICE_PROVIDERS, getServiceProviders);
}

export function* watchGetInvoiceDets() {
  yield takeEvery(GET_INVOICE_DETS, getInvoiceDets);
}

export function* watchAcceptInvoice() {
  yield takeEvery(ACCEPT_INVOICE, acceptInvoice);
}

export function* watchRejectInvoice() {
  yield takeEvery(REJECT_INVOICE, rejectInvoice);
}

export function* watchAcceptServiceAgreement() {
  yield takeEvery(ACCEPT_SERVICE_AGREEMENT, acceptServiceAgreement);
}

export function* watchInitPartPayment() {
  yield takeEvery(INIT_PART_PAYMENT, initPartPayment);
}

export function* watchInitCompletePayment() {
  yield takeEvery(INIT_COMPLETE_PAYMENT, initCompletePayment);
}

function* MaintenanceSaga() {
  yield all([
    fork(watchFetchService),
    fork(watchGetAllServiceReq),
    fork(watchGetServiceTypes),
    fork(watchPostMaintenanceReq),
    fork(watchGetMaintenanceReq),
    fork(watchFetchMaintenance),
    fork(watchGetServiceProviders),
    fork(watchGetInvoiceDets),
    fork(watchAcceptInvoice),
    fork(watchRejectInvoice),
    fork(watchAcceptServiceAgreement),
    fork(watchInitPartPayment),
    fork(watchInitCompletePayment),
  ]);
}

export default MaintenanceSaga;
