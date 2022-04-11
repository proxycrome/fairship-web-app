import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_PROPERTIES, CREATE_PROPERTIES } from './actionTypes';
import {
  fetchPropertiesSuccessful,
  fetchPropertiesError,
  createPropertiesSuccessful,
  createPropertiesError,
} from './actions';

import {
  fetchPropertiesService,
  createPropertiesService,
} from '../../services/propertiesServices';

function* fetchProperties() {
  try {
    const response = yield call(fetchPropertiesService);
    yield put(fetchPropertiesSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchPropertiesError(error?.response?.data));
  }
}

function* createProperties({ payload }) {
  try {
    const response = yield call(createPropertiesService, payload);
    yield put(createPropertiesSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(createPropertiesError(error?.response?.data));
  }
}

export function* watchFetchProperties() {
  yield takeEvery(FETCH_PROPERTIES, fetchProperties);
}
export function* watchCreateProperties() {
  yield takeEvery(CREATE_PROPERTIES, createProperties);
}
function* PropertiesSaga() {
  yield all([fork(watchFetchProperties), fork(watchCreateProperties)]);
}

export default PropertiesSaga;
