import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { FETCH_INSPECTIONS, POST_INSPECTION, FETCH_EACH_INSPECTION } from './actionTypes';

import {
  fetchInspectionsSuccessful,
  fetchInspectionsError,
  postInspectionSuccessful,
  postInspectionFailure,
  fetchEachInspectionError,
  fetchEachInspectionSuccessful
} from './actions';

import {
  fetchInspectionsService,
  postInspectionService,
  fetchEachInspectionService
} from '../../services/inspectionsServices';

function* fetchInspections({payload}) {
  try {
    const response = yield call(fetchInspectionsService, payload);
    yield put(fetchInspectionsSuccessful(response.data));
  } catch (error) {
    // console.log(error.response);
    yield put(fetchInspectionsError(error?.response?.data));
  }
}

function* fetchEachInspection({payload}) {
  try {
    const response = yield call(fetchEachInspectionService, payload);
    yield put(fetchEachInspectionSuccessful(response.data));
  } catch (error) {
    // console.log(error.response);
    yield put(fetchEachInspectionError(error?.response?.data));
  }
}

function* postInspection({ payload }) {
  try {
    // console.log(payload);
    const response = yield call(postInspectionService, payload);
    // console.log(response);
    yield put(postInspectionSuccessful(response.data));
  } catch (error) {
    // console.log(error);
    // console.log(error.response);
    yield put(postInspectionFailure(error?.response?.data));
  }
}

export function* watchFetchInspections() {
  yield takeEvery(FETCH_INSPECTIONS, fetchInspections);
}

export function* watchPostInspections() {
  yield takeEvery(POST_INSPECTION, postInspection);
}

export function* watchEachInspection() {
  yield takeEvery(FETCH_EACH_INSPECTION, fetchEachInspection);
}

function* InspectionsSaga() {
  yield all([fork(watchFetchInspections), fork(watchPostInspections), fork(watchEachInspection)]);
}

export default InspectionsSaga;
