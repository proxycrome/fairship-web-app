import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { FETCH_INSPECTIONS, POST_INSPECTION } from './actionTypes';

import {
  fetchInspectionsSuccessful,
  fetchInspectionsError,
  postInspectionSuccessful,
  postInspectionFailure,
} from './actions';

import {
  fetchInspectionsService,
  postInspectionService,
} from '../../services/inspectionsServices';

function* fetchInspections({payload}) {
  try {
    const response = yield call(fetchInspectionsService, payload);
    yield put(fetchInspectionsSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchInspectionsError(error?.response?.data));
  }
}

function* postInspection({ payload }) {
  try {
    console.log(payload);
    const response = yield call(postInspectionService, payload);
    console.log(response);
    yield put(postInspectionSuccessful(response.data));
  } catch (error) {
    console.log(error);
    console.log(error.response);
    yield put(postInspectionFailure(error?.response?.data));
  }
}

export function* watchFetchInspections() {
  yield takeEvery(FETCH_INSPECTIONS, fetchInspections);
}

export function* watchPostInspections() {
  yield takeEvery(POST_INSPECTION, postInspection);
}

function* InspectionsSaga() {
  yield all([fork(watchFetchInspections), fork(watchPostInspections)]);
}

export default InspectionsSaga;
