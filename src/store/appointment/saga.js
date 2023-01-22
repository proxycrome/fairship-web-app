import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import {
  FETCH_APPOINTMENT,
  PUT_ACCEPT_APPOINTMENT,
  PUT_REJECT_APPOINTMENT,
} from "./actionTypes";
import {
  fetchAppointmentSuccessful,
  fetchAppointmentError,
  putAcceptAppointmentSuccess,
  putAcceptAppointmentError,
  putRejectAppointmentSuccess,
  putRejectAppointmentError,
} from "./actions";

import {
  fetchAppointmentService,
  putAcceptAppointmentService,
  putRejectAppointmentService,
} from "../../services/appointmentServices";

function* fetchAppointment() {
  try {
    const response = yield call(fetchAppointmentService);
    yield put(fetchAppointmentSuccessful(response.data));
  } catch (error) {
    yield put(fetchAppointmentError(error?.response?.data));
  }
}

function* putAcceptAppointment({ payload }) {
  try {
    const response = yield call(putAcceptAppointmentService, payload);
    yield put(putAcceptAppointmentSuccess(response.data));
  } catch (error) {
    yield put(putAcceptAppointmentError(error?.response?.data));
  }
}

function* putRejectAppointment({ payload }) {
  try {
    const response = yield call(putRejectAppointmentService, payload);
    yield put(putRejectAppointmentSuccess(response.data));
  } catch (error) {
    yield put(putRejectAppointmentError(error?.response?.data))
  }
}

export function* watchFetchAppointment() {
  yield takeEvery(FETCH_APPOINTMENT, fetchAppointment);
}

export function* watchPutAcceptAppointmant() {
  yield takeEvery(PUT_ACCEPT_APPOINTMENT, putAcceptAppointment);
}

export function* watchPutRejectAppointment() {
  yield takeEvery(PUT_REJECT_APPOINTMENT, putRejectAppointment);
}

function* AppointmentSaga() {
  yield all([
    fork(watchFetchAppointment),
    fork(watchPutAcceptAppointmant),
    fork(watchPutRejectAppointment),
  ]);
}

export default AppointmentSaga;
