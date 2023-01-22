import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import {
  FETCH_PROPERTIES,
  UPDATE_UNIT,
  FETCH_EACH_PROPERTIES,
  CREATE_PROPERTIES,
  GET_PROPERTY_TYPES,
  GET_PROPERTY_SUBCATEGORY,
  DUPLICATE_UNIT_PROPERTY,
  PUT_UNIT_PROPERTY,
  DELETE_PROPERTY,
  NOTIFY_ADMIN_WALKTHROUGH,
  GET_ALL_APARTMENT_TYPES,
  GET_WALKTHROUGH_BY_APARTMENT,
} from "./actionTypes";

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
  updateUnitPropertyError,
  duplicateUnitPropertySuccess,
  duplicateUnitPropertyError,
  deletePropertySuccess,
  deletePropertyError,
  notifyAdminWalkthroughSuccess,
  notifyAdminWalkthroughError,
  getAllApartmentTypesSuccess,
  getAllApartmentTypesError,
  getWalkByApartmentSuccess,
  getWalkByApartmentError,
} from "./actions";

import {
  fetchPropertiesService,
  fetchEachPropertiesService,
  createPropertiesService,
  updateUnitService,
  getPropertyTypesService,
  getPropertySubcategoryService,
  duplicateUnitService,
  deletePropertyService,
  putSingleUnitPropertyService,
  notifyAdminWalkthroughService,
  getAllApartmentTypesService,
  getWalkByApartmentService,
} from "../../services/propertiesServices";

function* fetchProperties({ payload: { payload, collectiveId } }) {
  try {
    const response = yield call(fetchPropertiesService, payload, collectiveId);
    yield put(fetchPropertiesSuccessful(response.data));
  } catch (error) {
    yield put(fetchPropertiesError(error?.response?.data));
  }
}

function* fetchEachProperty({ payload }) {
  try {
    const response = yield call(fetchEachPropertiesService, payload);
    yield put(fetchEachPropertiesSuccessful(response.data));
  } catch (error) {
    yield put(fetchEachPropertiesError(error?.response?.data));
  }
}

function* createProperties({ payload }) {
  try {
    const response = yield call(createPropertiesService, payload);
    yield put(createPropertiesSuccessful(response.data));
  } catch (error) {
    yield put(createPropertiesError(error?.response?.data));
  }
}

function* getPropertyTypes() {
  try {
    const response = yield call(getPropertyTypesService);
    yield put(getPropertyTypesSuccess(response.data));
  } catch (error) {
    yield put(getPropertyTypesError(error?.response?.data));
  }
}

function* getPropertySubcategory({ payload: { id } }) {
  try {
    const response = yield call(getPropertySubcategoryService, id);
    yield put(getPropertySubcategorySuccess(response.data));
  } catch (error) {
    yield put(getPropertySubcategoryError(error?.response?.data));
  }
}

function* getDuplicateUnit({ payload }) {
  try {
    const response = yield call(duplicateUnitService, payload);
    yield put(duplicateUnitPropertySuccess(response.data));
  } catch (error) {
    yield put(duplicateUnitPropertyError(error?.response?.data));
  }
}

function* putUnitProperty({ payload }) {
  try {
    const response = yield call(putSingleUnitPropertyService, payload);
    yield put(createPropertiesSuccessful(response.date));
  } catch (error) {
    yield put(createPropertiesError(error?.response?.data));
  }
}

function* updateUnitProperty({ payload }) {
  try {
    const response = yield call(updateUnitService, payload);
    yield put(updateUnitPropertySuccessful(response.data));
  } catch (error) {
    yield put(updateUnitPropertyError(error?.response?.data));
  }
}

function* deleteProperty({ payload: { propertyId } }) {
  try {
    const response = yield call(deletePropertyService, propertyId);
    yield put(deletePropertySuccess(response.data));
    if (response) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (error) {
    yield put(deletePropertyError(error?.response?.data));
  }
}

function* notifyAdminWalkthrough({ payload: { formData, setShow } }) {
  try {
    const response = yield call(notifyAdminWalkthroughService, formData);
    yield put(notifyAdminWalkthroughSuccess(response.data));
    if (response.data) {
      setShow(false);
    }
  } catch (error) {
    yield put(notifyAdminWalkthroughError(error?.response?.data));
    if (error?.response?.data) {
      setShow(false);
    }
  }
}

function* getAllApartmentTypes() {
  try {
    const response = yield call(getAllApartmentTypesService);
    yield put(getAllApartmentTypesSuccess(response.data));
  } catch (error) {
    yield put(getAllApartmentTypesError(error?.response?.data));
  }
}

function* getWalkByApartment({ payload: { apartmentType } }) {
  try {
    const response = yield call(getWalkByApartmentService, apartmentType);
    yield put(getWalkByApartmentSuccess(response.data));
  } catch (error) {
    yield put(getWalkByApartmentError(error?.response?.data));
  }
}

export function* watchDeleteProperty() {
  yield takeEvery(DELETE_PROPERTY, deleteProperty);
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
  yield takeEvery(GET_PROPERTY_SUBCATEGORY, getPropertySubcategory);
}

export function* watchGetDuplicateProperty() {
  yield takeEvery(DUPLICATE_UNIT_PROPERTY, getDuplicateUnit);
}

export function* watchPutUnitProperty() {
  yield takeEvery(PUT_UNIT_PROPERTY, putUnitProperty);
}

export function* watchUpdateUnitProperty() {
  yield takeEvery(UPDATE_UNIT, updateUnitProperty);
}

export function* watchNotifyAdminWalkthrough() {
  yield takeEvery(NOTIFY_ADMIN_WALKTHROUGH, notifyAdminWalkthrough);
}

export function* watchGetAllApartmentTypes() {
  yield takeEvery(GET_ALL_APARTMENT_TYPES, getAllApartmentTypes);
}

export function* watchGetWalkByApartment() {
  yield takeEvery(GET_WALKTHROUGH_BY_APARTMENT, getWalkByApartment);
}

function* PropertiesSaga() {
  yield all([
    fork(watchFetchProperties),
    fork(watchFetchEachProperties),
    fork(watchCreateProperties),
    fork(watchGetPropertyTypes),
    fork(watchGetPropertySubcategory),
    fork(watchGetDuplicateProperty),
    fork(watchPutUnitProperty),
    fork(watchUpdateUnitProperty),
    fork(watchDeleteProperty),
    fork(watchNotifyAdminWalkthrough),
    fork(watchGetAllApartmentTypes),
    fork(watchGetWalkByApartment),
  ]);
}

export default PropertiesSaga;
