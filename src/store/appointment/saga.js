import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_APPOINTMENT } from './actionTypes';
import { fetchAppointmentSuccessful, fetchAppointmentError } from './actions';

import { fetchAppointmentService } from '../../services/appointmentServices';

function* fetchAppointment() {
  try {
    const response = yield call(fetchAppointmentService);
    yield put(fetchAppointmentSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchAppointmentError(error?.response?.data));
  }
}

export function* watchFetchAppointment() {
  yield takeEvery(FETCH_APPOINTMENT, fetchAppointment);
}

function* AppointmentSaga() {
  yield all([fork(watchFetchAppointment)]);
}

export default AppointmentSaga;
