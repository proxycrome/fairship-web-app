import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_RENTAL_RECOMMENDATION,PUT_TENANT_RECOMMENDATION } from './actionTypes';
import { 
   fetchRentalRecommendationSuccessful,
   fetchRentalRecommendationError,
   PutTenantRecommendationSuccessful,
   PutTenantRecommendationError } from './actions';

import { fetchRentalRecommendation } from '../../services/rentalServices';

function* fetchRecommendation({rentalId}) {
  try {
    const response = yield call(fetchRentalRecommendation,rentalId);
    yield put(fetchRentalRecommendationSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchRentalRecommendationError(error?.response?.data));
  }
}

export function* watchFetchRentalRecommendation() {
  yield takeEvery(FETCH_RENTAL_RECOMMENDATION, fetchRecommendation);
}


function* PutTenantRecommendation({payload:{rentalId, data}}) {
  try {
    const response = yield call(PutTenantRecommendation,{rentalId, data});
    yield put(PutTenantRecommendationSuccessful(response.data.rentalId));
  } catch (error) {
    console.log(error.response);
    yield put(PutTenantRecommendationError(error?.response?.data));
  }
}

export function* watchPutTenantRecommendation() {
  yield takeEvery(PUT_TENANT_RECOMMENDATION, PutTenantRecommendation);
}


function* RentalPreviewRecommendationSaga() {
  yield all([fork(watchFetchRentalRecommendation, watchPutTenantRecommendation)]);
}

export default RentalPreviewRecommendationSaga;
