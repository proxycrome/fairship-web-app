import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_RENTAL } from './actionTypes';
import { fetchRentalSuccessful, fetchRentalError } from './actions';

import { fetchRentalService } from '../../services/rentalServices';

function* fetchRental() {
  try {
    const response = yield call(fetchRentalService);
    yield put(fetchRentalSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchRentalError(error?.response?.data));
  }
}

export function* watchFetchRental() {
  yield takeEvery(FETCH_RENTAL, fetchRental);
}

function* RentalSaga() {
  yield all([fork(watchFetchRental)]);
}

export default RentalSaga;
