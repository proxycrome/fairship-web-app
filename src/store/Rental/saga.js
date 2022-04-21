import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_RENTAL, FETCH_RENTAL2, FETCH_RENTAL3 } from './actionTypes';
import { fetchRentalSuccessful, fetchRentalError, fetchRentalSuccessful2 ,fetchRentalError2, 
    fetchRentalSuccessful3, fetchRentalError3 } from './actions';

import { fetchRentalService, fetchRentalService2, fetchRentalService3 } from '../../services/rentalServices';

function* fetchRental({payload}) {
  try {
    const response = yield call(fetchRentalService, payload);
    yield put(fetchRentalSuccessful(response.data));
  } catch (error) {
    
    yield put(fetchRentalError(error?.response?.data));
  }
}

export function* watchFetchRental() {
  yield takeEvery(FETCH_RENTAL, fetchRental);
}

// function* fetchRental2() {
//   try {
//     const response = yield call(fetchRentalService2);
//     yield put(fetchRentalSuccessful2(response.data));
    
//   } catch (error) {
    
//     yield put(fetchRentalError2(error?.response?.data));
//   }
// }

// export function* watchFetchRental2() {
//   yield takeEvery(FETCH_RENTAL2, fetchRental2);
// }

// function* fetchRental3() {
//   try {
//     const response = yield call(fetchRentalService3);
//     yield put(fetchRentalSuccessful3(response.data));
    
//   } catch (error) {
    
//     yield put(fetchRentalError3(error?.response?.data));
//   }
// }

// export function* watchFetchRental3() {
//   yield takeEvery(FETCH_RENTAL3, fetchRental3);
// }



function* RentalSaga() {
  yield all([fork(watchFetchRental)]);
}
//, fork(watchFetchRental2), fork(watchFetchRental3)

export default RentalSaga;
