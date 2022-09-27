import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import {
  getLeaseTerminationsService,
  requestLeaseTerminationService,
  reviewLeaseTerminationService,
} from '../../services/leaseTerminationService';
import {
  getLeaseTerminationsError,
  getLeaseTerminationsSuccess,
  requestLeaseTerminationError,
  requestLeaseTerminationSuccess,
  reviewLeaseTerminationError,
  reviewLeaseTerminationSuccess,
} from './actions';
import {
  GET_LEASE_TERMINATIONS,
  REQUEST_LEASE_TERMINATION,
  REVIEW_LEASE_TERMINATION,
} from './actionTypes';

function* getLeaseTerminations() {
  try {
    const response = yield call(getLeaseTerminationsService);
    yield put(getLeaseTerminationsSuccess(response.data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(getLeaseTerminationsError(error?.response?.data));
  }
}

function* reviewLeaseTermination({ payload }) {
  try {
    const response = yield call(reviewLeaseTerminationService, payload);
    yield put(reviewLeaseTerminationSuccess(response.data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(reviewLeaseTerminationError(error?.response?.data));
  }
}

function* requestLeaseTermination({ payload }) {
  try {
    const response = yield call(requestLeaseTerminationService, payload);
    yield put(requestLeaseTerminationSuccess(response.data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(requestLeaseTerminationError(error?.response?.data));
  }
}

export function* watchGetLeaseTerminations() {
  yield takeEvery(GET_LEASE_TERMINATIONS, getLeaseTerminations);
}

export function* watchReviewLeaseTermination() {
  yield takeEvery(REVIEW_LEASE_TERMINATION, reviewLeaseTermination);
}

export function* watchRequestLeaseTermination() {
  yield takeEvery(REQUEST_LEASE_TERMINATION, requestLeaseTermination);
}

function* leaseTerminationSaga() {
  yield all([
    fork(watchGetLeaseTerminations),
    fork(watchReviewLeaseTermination),
    fork(watchRequestLeaseTermination),
  ]);
}

export default leaseTerminationSaga;
