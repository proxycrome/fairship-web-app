import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { FETCH_COUNTRY, FETCH_LGA, FETCH_STATE } from "./actionTypes";

import {
  fetchCountryError,
  fetchCountrySuccess,
  fetchLgaError,
  fetchLgaSuccess,
  fetchStateError,
  fetchStateSuccess,
} from "./actions";

import {
  fetchCountryService,
  fetchLgaService,
  fetchStateService,
} from "../../services/locationServices";

function* fetchCountry() {
  try {
    const response = yield call(fetchCountryService);
    yield put(fetchCountrySuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error?.response);
    yield put(fetchCountryError(error?.response?.data));
  }
}

function* fetchState({ payload: { countryId } }) {
  try {
    const response = yield call(fetchStateService, countryId);
    yield put(fetchStateSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error?.response);
    yield put(fetchStateError(error?.response?.data));
  }
}

function* fetchLga({ payload: { stateId } }) {
  try {
    const response = yield call(fetchLgaService, stateId);
    yield put(fetchLgaSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error?.response);
    yield put(fetchLgaError(error?.response?.data));
  }
}

export function* watchFetchCountry() {
  yield takeEvery(FETCH_COUNTRY, fetchCountry);
}

export function* watchFetchState() {
  yield takeEvery(FETCH_STATE, fetchState);
}

export function* watchFetchLga() {
  yield takeEvery(FETCH_LGA, fetchLga);
}

function* LocationSaga() {
  yield all([
    fork(watchFetchCountry),
    fork(watchFetchState),
    fork(watchFetchLga),
  ]);
}

export default LocationSaga;
