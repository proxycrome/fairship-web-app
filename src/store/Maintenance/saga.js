import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { 
  FETCH_SERVICE,
  GET_ALL_SERVICE_REQ_COMPLETE, 
  GET_ALL_SERVICE_REQ_PENDING, 
  GET_MAINTENANCE_REQ, 
  GET_SERVICE_TYPES, 
  POST_MAINTENANCE_REQ
} from './actionTypes';

import { 
  getAllServiceReqCompleteSuccess,
  getAllServiceReqCompleteFailure,
  getAllServiceReqPendingSuccess,
  getAllServiceReqPendingFailure,
  getServiceTypesSuccess,
  getServiceTypesFailure,
  postMaintenanceReqSuccess,
  postMaintenanceReqFailure,
  getMaintenanceReqSuccess,
  getMaintenanceReqFailure,
  fetchServiceSuccess,
  fetchServiceFailure
} from './actions';

import { 
  fetchServiceServer,
  getAllServicesCompletedService, 
  getAllServicesPendingService,
  getMaintenanceReqService,
  getServiceTypesService,
  postMaintenanceReqService
} from '../../services/maintenanceServices';

function* getAllServiceReqComplete() {
  try {
    const response = yield call(getAllServicesCompletedService);
    yield put(getAllServiceReqCompleteSuccess(response.data));
  } catch (error) {
    yield put(getAllServiceReqCompleteFailure(error?.response?.data));
  }
}

function* getAllServiceReqPending() {
    try {
        const response = yield call(getAllServicesPendingService);
        yield put(getAllServiceReqPendingSuccess(response.data));
    } catch (error) {
        yield put(getAllServiceReqPendingFailure(error?.response?.data));
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

function* fetchService({payload: {serviceId}}) {
  try {
    const response = yield call(fetchServiceServer, serviceId)
    yield put(fetchServiceSuccess(response?.data));
  } catch (error) {
    yield put(fetchServiceFailure(error?.response?.data));
  }
}

export function* watchFetchService() {
  yield takeEvery(FETCH_SERVICE, fetchService)
}

export function* watchGetAllServiceReqComplete() {
  yield takeEvery(GET_ALL_SERVICE_REQ_COMPLETE, getAllServiceReqComplete);
}

export function* watchGetServiceTypes() {
    yield takeEvery(GET_SERVICE_TYPES, getServiceTypes)
}

export function* watchGetAllServiceReqPending() {
    yield takeEvery(GET_ALL_SERVICE_REQ_PENDING, getAllServiceReqPending);
}

export function* watchPostMaintenanceReq() {
  yield takeEvery(POST_MAINTENANCE_REQ, postMaintenanceReq)
}

export function* watchGetMaintenanceReq() {
  yield takeEvery(GET_MAINTENANCE_REQ, getMaintenanceReq)
}

function* MaintenanceSaga() {
  yield all([
    fork(watchFetchService),
    fork(watchGetAllServiceReqComplete),
    fork(watchGetAllServiceReqPending),
    fork(watchGetServiceTypes),
    fork(watchPostMaintenanceReq),
    fork(watchGetMaintenanceReq)
  ]);
}

export default MaintenanceSaga;