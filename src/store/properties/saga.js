import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  FETCH_PROPERTIES,
  UPDATE_UNIT,
  FETCH_EACH_PROPERTIES,
  CREATE_PROPERTIES,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_SUBCATEGORY,
  DUPLICATE_UNIT_PROPERTY,
} from './actionTypes';

import {
  fetchPropertiesSuccessful,
  fetchPropertiesError,
  fetchEachPropertiesSuccessful,
  fetchEachPropertiesError,
  createPropertiesSuccessful,
  createPropertiesError,
  getPropertyTypesSuccess,
  getPropertyTypesError,
  getPropertySubcategorySuccess,
  getPropertySubcategoryError,
  updateUnitPropertySuccessful,
  updateUnitPropertyError
} from './actions';

import {
  fetchPropertiesService,
  fetchEachPropertiesService,
  createPropertiesService,
  updateUnitService,
  getPropertyTypesService,
  getPropertySubcategoryService,
  duplicateUnitService
} from '../../services/propertiesServices';

function* fetchProperties({payload: {payload, collectiveId}}) {
  try {
    const response = yield call(fetchPropertiesService, payload, collectiveId);
    yield put(fetchPropertiesSuccessful(response.data));
    console.log(response.data);
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
    console.log(response.data)
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

function* getPropertyTypes() {
  try {
    const response = yield call(getPropertyTypesService);
    yield put(getPropertyTypesSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    console.log(error?.response);
    yield put(getPropertyTypesError(error?.response?.data))
  }
}

function* getPropertySubcategory({payload: {id}}) {
  try {
    const response = yield call(getPropertySubcategoryService, id)
    yield put(getPropertySubcategorySuccess(response.data))
    // console.log(response.data);
  } catch (error) {
    console.log(error?.response);
    yield put(getPropertySubcategoryError(error?.response?.data))
  }
}

  function* getDuplicateUnit({ payload }) {
    try {
      const response = yield call(duplicateUnitService, payload);
      yield put(createPropertiesSuccessful(response.data));
      console.log(response.data)
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      yield put(createPropertiesError(error?.response?.data));
    }
  }

  function* updateUntProperty({ payload }) {
    try {
      const response = yield call(updateUnitService, payload);
      yield put(updateUnitPropertySuccessful(response.data));
      console.log(response.data)
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      yield put(updateUnitPropertyError(error?.response?.data));
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

export function* watchGetPropertyTypes() {
  yield takeEvery(GET_PROPERTY_TYPES, getPropertyTypes);
}

export function* watchGetPropertySubcategory() {
  yield takeEvery(GET_PROPERTY_SUBCATEGORY, getPropertySubcategory)
}

export function* watchGetDuplicateProperty() {
  yield takeEvery(DUPLICATE_UNIT_PROPERTY, getDuplicateUnit)
}

export function* watchUpdateUnitProperty() {
  yield takeEvery(UPDATE_UNIT, updateUntProperty)
}

function* PropertiesSaga() {
  yield all([
    fork(watchFetchProperties),
    fork(watchFetchEachProperties),
    fork(watchCreateProperties),
    fork(watchGetPropertyTypes),
    fork(watchGetPropertySubcategory),
    fork(watchGetDuplicateProperty),
    fork(watchUpdateUnitProperty),
  ]);
}

export default PropertiesSaga;
