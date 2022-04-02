import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_RENTAL_RECOMMENDATION,PUT_TENANT_RECOMMENDATION, PUT_DATA_RECOMMENDATION } from './actionTypes';
import { 
   fetchRentalRecommendationSuccessful,
   fetchRentalRecommendationError,
   PutTenantRecommendationSuccessful,
   PutTenantRecommendationError,
   PutDataRecommendationSuccessful,
   PutDataRecommendationError } from './actions';

import { fetchRentalRecommendation, PutTenantRecommendationService, PutDataTenantRecommendationService } from '../../services/rentalServices';

function* fetchRecommendation({rentalId}) {
  console.log(rentalId)
  try {
    const response = yield call(fetchRentalRecommendation,rentalId);
    yield put(fetchRentalRecommendationSuccessful(response.data));
    console.log(response.data)
  } catch (error) {
    console.log(error.response);
    yield put(fetchRentalRecommendationError(error?.response?.data));
  }
}

export function* watchFetchRentalRecommendation() {
  yield takeEvery(FETCH_RENTAL_RECOMMENDATION, fetchRecommendation);
}


function* PutTenantRecommendation({payload:{tenantId, data}}) {
  console.log(tenantId, data)
  try {
    const response = yield call(PutTenantRecommendationService,tenantId, data);
    yield put(PutTenantRecommendationSuccessful(response?.data));
    console.log(response)
  } catch (error) {
    console.log(error?.response);
    yield put(PutTenantRecommendationError(error?.response?.data));
  }
}

export function* watchPutTenantRecommendation() {
  yield takeEvery(PUT_TENANT_RECOMMENDATION, PutTenantRecommendation);
}


function* PutDataTenantRecommendation({payload:{data}}) {
  console.log(data)
  try {
    const response = yield call(PutDataTenantRecommendationService,data);
    yield put(PutDataRecommendationSuccessful(response?.data));
    console.log(response)
  } catch (error) {
    console.log(error?.response);
    yield put(PutDataRecommendationError(error?.response?.data));
  }
}

export function* watchPutDataTenantRecommendation() {
  yield takeEvery(PUT_DATA_RECOMMENDATION, PutDataTenantRecommendation);
}


function* RentalPreviewRecommendationSaga() {
  yield all([fork(watchFetchRentalRecommendation),fork(watchPutTenantRecommendation), fork(watchPutDataTenantRecommendation)]);
}

export default RentalPreviewRecommendationSaga;
