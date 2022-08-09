import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { 
  FETCH_MAINTENANCE,
  FETCH_SERVICE,
  GET_ALL_SERVICE_REQ,  
  GET_MAINTENANCE_REQ, 
  GET_SERVICE_PROVIDERS, 
  GET_SERVICE_TYPES, 
  POST_MAINTENANCE_REQ
} from './actionTypes';

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
  getServiceProvidersError
} from './actions';

import { 
  fetchMaintenanceService,
  fetchServiceServer,
  getAllServicesServer,
  getMaintenanceReqService,
  getServiceProvidersService,
  getServiceTypesService,
  postMaintenanceReqService
} from '../../services/maintenanceServices';

function* getAllServiceReq() {
  try {
    const response = yield call(getAllServicesServer);
    yield put(getAllServiceReqSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    yield put(getAllServiceReqFailure(error?.response?.data));
    // console.log(error?.response)
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

function* postMaintenanceReq({payload: {formData}}) {
  
  try {
    const response = yield call(postMaintenanceReqService, formData);
    yield put(postMaintenanceReqSuccess(response?.data));
    // console.log(response.data);
  } catch (error) {
    // console.log(error?.response);
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

function* fetchService({payload: {serviceId, requestType}}) {
  try {
    const response = yield call(fetchServiceServer, serviceId, requestType)
    yield put(fetchServiceSuccess(response?.data));
  } catch (error) {
    yield put(fetchServiceFailure(error?.response?.data));
  }
}

function* fetchMaintenance({payload: {id}}) {
  try {
    const response = yield call(fetchMaintenanceService, id);
    yield put(fetchMaintenanceSuccess(response?.data));
  } catch (error) {
    yield put(fetchMaintenanceFailure(error?.response?.data));
  }
}

function* getServiceProviders({payload: {serviceName}}) {
  try {
    const response = yield call(getServiceProvidersService, serviceName);
    yield put(getServiceProvidersSuccess(response?.data));
  } catch (error) {
    yield put(getServiceProvidersError(error?.response?.data));
  }
}

export function* watchFetchService() {
  yield takeEvery(FETCH_SERVICE, fetchService)
}

export function* watchGetAllServiceReq() {
  yield takeEvery(GET_ALL_SERVICE_REQ, getAllServiceReq);
}

export function* watchGetServiceTypes() {
    yield takeEvery(GET_SERVICE_TYPES, getServiceTypes)
}

export function* watchPostMaintenanceReq() {
  yield takeEvery(POST_MAINTENANCE_REQ, postMaintenanceReq)
}

export function* watchGetMaintenanceReq() {
  yield takeEvery(GET_MAINTENANCE_REQ, getMaintenanceReq)
}

export function* watchFetchMaintenance() {
  yield takeEvery(FETCH_MAINTENANCE, fetchMaintenance);
}

export function* watchGetServiceProviders() {
  yield takeEvery(GET_SERVICE_PROVIDERS, getServiceProviders);
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
  ]);
}

export default MaintenanceSaga;