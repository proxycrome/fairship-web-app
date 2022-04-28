import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_RENTAL_RECOMMENDATION,PUT_TENANT_RECOMMENDATION, PUT_DATA_RECOMMENDATION, DILIGENCE_RECOMMENDATION } from './actionTypes';
import { 
   fetchRentalRecommendationSuccessful,
   fetchRentalRecommendationError,
   PutTenantRecommendationSuccessful,
   PutTenantRecommendationError,
   PutDataRecommendationSuccessful,
   PutDataRecommendationError,
   DiligenceRecommendationSuccessful,
   DiligenceRecommendationError } from './actions';

import { fetchRentalRecommendation, PutTenantRecommendationService, PutDataTenantRecommendationService, DiligenceRecommendationService } from '../../services/rentalServices';

function* fetchRecommendation({rentalId}) {
  
  try {
    const response = yield call(fetchRentalRecommendation,rentalId);
    yield put(fetchRentalRecommendationSuccessful(response.data));
    
  } catch (error) {
    
    yield put(fetchRentalRecommendationError(error?.response?.data));
  }
}

export function* watchFetchRentalRecommendation() {
  yield takeEvery(FETCH_RENTAL_RECOMMENDATION, fetchRecommendation);
}


function* PutTenantRecommendation({payload:{tenantId, data}}) {
  
  try {
    const response = yield call(PutTenantRecommendationService,tenantId, data);
    yield put(PutTenantRecommendationSuccessful(response?.data));
  } catch (error) {
    
    yield put(PutTenantRecommendationError(error?.response?.data));
  }
}

export function* watchPutTenantRecommendation() {
  yield takeEvery(PUT_TENANT_RECOMMENDATION, PutTenantRecommendation);
}


function* PutDataTenantRecommendation({payload:{data}}) {
 
  try {
    const response = yield call(PutDataTenantRecommendationService,data);
    yield put(PutDataRecommendationSuccessful(response?.data));
    
    
  } catch (error) {
    
    yield put(PutDataRecommendationError(error?.response?.data));
  }
}

export function* watchPutDataTenantRecommendation() {
  yield takeEvery(PUT_DATA_RECOMMENDATION, PutDataTenantRecommendation);
}

function* PutDiligenceTenantRecommendation({payload:{data}}) {
    
  try {
    const response = yield call(DiligenceRecommendationService,data);
    yield put(DiligenceRecommendationSuccessful(response?.data));
    
  } catch (error) {
    
    yield put( DiligenceRecommendationError(error?.response?.data));
    console.log(error?.response)
  }
}

export function* watchPutDiligenceTenantRecommendation() {
  yield takeEvery(DILIGENCE_RECOMMENDATION, PutDiligenceTenantRecommendation);
}


function* RentalPreviewRecommendationSaga() {
  yield all([fork(watchFetchRentalRecommendation),fork(watchPutTenantRecommendation),
     fork(watchPutDataTenantRecommendation), fork(watchPutDiligenceTenantRecommendation)]);
}

export default RentalPreviewRecommendationSaga;
