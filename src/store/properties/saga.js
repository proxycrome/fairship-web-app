import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  FETCH_PROPERTIES,
  FETCH_EACH_PROPERTIES,
  CREATE_PROPERTIES,
} from './actionTypes';

import {
  fetchPropertiesSuccessful,
  fetchPropertiesError,
  fetchEachPropertiesSuccessful,
  fetchEachPropertiesError,
  createPropertiesSuccessful,
  createPropertiesError,
} from './actions';

import {
  fetchPropertiesService,
  fetchEachPropertiesService,
  createPropertiesService,
} from '../../services/propertiesServices';

function* fetchProperties({payload}) {
  try {
    const response = yield call(fetchPropertiesService, payload);
    yield put(fetchPropertiesSuccessful(response.data));
  } catch (error) {
    console.log(error);
    console.log(error?.response);
    yield put(fetchPropertiesError(error?.response?.data));
  }
}

function* fetchEachProperty({ payload }) {
  try {
    const response = yield call(fetchEachPropertiesService, payload);
    yield put(fetchEachPropertiesSuccessful(response.data));
  } catch (error) {
    console.log(error);
    console.log(error.response);
    yield put(fetchEachPropertiesError(error?.response?.data));
  }
}

function* createProperties({ payload }) {
  try {
    const response = yield call(createPropertiesService, payload);
    yield put(createPropertiesSuccessful(response.data));
    console.log(response.data)
  } catch (error) {
    console.log(error);
    console.log(error?.response);
    yield put(createPropertiesError(error?.response?.data));
  }
}

export function* watchFetchProperties() {
  yield takeEvery(FETCH_PROPERTIES, fetchProperties);
}
export function* watchFetchEachProperties() {
  yield takeEvery(FETCH_EACH_PROPERTIES, fetchEachProperty);
}
export function* watchCreateProperties() {
  yield takeEvery(CREATE_PROPERTIES, createProperties);
}
function* PropertiesSaga() {
  yield all([
    fork(watchFetchProperties),
    fork(watchFetchEachProperties),
    fork(watchCreateProperties),
  ]);
}

export default PropertiesSaga;
