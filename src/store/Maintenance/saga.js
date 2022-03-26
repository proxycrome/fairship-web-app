import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { 
  GET_ALL_SERVICE_REQ_COMPLETE, GET_ALL_SERVICE_REQ_PENDING
} from './actionTypes';

import { 
  getAllServiceReqCompleteSuccess,
  getAllServiceReqCompleteFailure,
  getAllServiceReqPendingSuccess,
  getAllServiceReqPendingFailure
} from './actions';

import { 
  getAllServicesCompletedService, 
  getAllServicesPendingService
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


export function* watchGetAllServiceReqComplete() {
  yield takeEvery(GET_ALL_SERVICE_REQ_COMPLETE, getAllServiceReqComplete);
}

export function* watchGetAllServiceReqPending() {
    yield takeEvery(GET_ALL_SERVICE_REQ_PENDING, getAllServiceReqPending);
}


function* MaintenanceSaga() {
  yield all([
    fork(watchGetAllServiceReqComplete),
    fork(watchGetAllServiceReqPending)
  ]);
}

export default MaintenanceSaga;