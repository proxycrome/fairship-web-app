import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import {
  FETCH_EXPIRING,
  FETCH_EXPIRING_SIXTY,
  FETCH_EXPIRING_ONETWENTY,
  FETCH_EXPIRING_ZERO,
  FETCH_ALL_RENTAL,
} from './actionTypes';
import {
  fetchExpiringSuccessful,
  fetchExpiringError,
  fetchExpiringSuccessfulSixty,
  fetchExpiringErrorSixty,
  fetchExpiringSuccessfulOnetwenty,
  fetchExpiringErrorOnetwenty,
  fetchExpiringSuccessfulZero,
  fetchExpiringErrorZero,
  fetchAllRentalSuccessful,
  fetchAllRentalError,
} from './actions';

import {
  fetchleaseServices,
  fetchleaseServicesSixty,
  fetchleaseServicesTwenty,
  fetchleaseServicesZero,
  fetchallrentServices,
} from '../../services/expiringLeasesServices';

function* fetchlease() {
  try {
    const response = yield call(fetchleaseServices);
    yield put(fetchExpiringSuccessful(response.data));
  } catch (error) {
    yield put(fetchExpiringError(error?.response?.data));
  }
}

export function* watchFetchlease() {
  yield takeEvery(FETCH_EXPIRING, fetchlease);
}

function* fetchleaseSixty() {
  try {
    const response = yield call(fetchleaseServicesSixty);
    yield put(fetchExpiringSuccessfulSixty(response.data));
  } catch (error) {
    yield put(fetchExpiringErrorSixty(error?.response?.data));
  }
}

export function* watchFetchleaseSixty() {
  yield takeEvery(FETCH_EXPIRING_SIXTY, fetchleaseSixty);
}

function* fetchleaseTwenty() {
  try {
    const response = yield call(fetchleaseServicesTwenty);
    yield put(fetchExpiringSuccessfulOnetwenty(response.data));
  } catch (error) {
    yield put(fetchExpiringErrorOnetwenty(error?.response?.data));
  }
}

export function* watchFetchleaseOnetwenty() {
  yield takeEvery(FETCH_EXPIRING_ONETWENTY, fetchleaseTwenty);
}

function* fetchleaseZero() {
  try {
    const response = yield call(fetchleaseServicesZero);
    yield put(fetchExpiringSuccessfulZero(response.data));
  } catch (error) {
    yield put(fetchExpiringErrorZero(error?.response?.data));
  }
}

export function* watchFetchleaseZero() {
  yield takeEvery(FETCH_EXPIRING_ZERO, fetchleaseZero);
}

function* fetchallrent() {
  try {
    const response = yield call(fetchallrentServices);
    yield put(fetchAllRentalSuccessful(response.data));
  } catch (error) {
    yield put(fetchAllRentalError(error?.response?.data));
  }
}

export function* watchFetchallrent() {
  yield takeEvery(FETCH_ALL_RENTAL, fetchallrent);
}

function* fetchleaseSaga() {
  yield all([
    fork(watchFetchlease),
    fork(watchFetchleaseSixty),
    fork(watchFetchleaseOnetwenty),
    fork(watchFetchleaseZero),
    fork(watchFetchallrent),
  ]);
}

export default fetchleaseSaga;
