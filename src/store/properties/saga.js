import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_PROPERTIES } from './actionTypes';
import { fetchPropertiesSuccessful, fetchPropertiesError } from './actions';

import { fetchPropertiesService } from '../../services/propertiesServices';

function* fetchProperties() {
  try {
    const response = yield call(fetchPropertiesService);
    yield put(fetchPropertiesSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchPropertiesError(error?.response?.data));
  }
}

export function* watchFetchProperties() {
  yield takeEvery(FETCH_PROPERTIES, fetchProperties);
}

function* PropertiesSaga() {
  yield all([fork(watchFetchProperties)]);
}

export default PropertiesSaga;
