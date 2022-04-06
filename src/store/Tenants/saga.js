import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_TENANT } from './actionTypes';
import { fetchTenantSuccessful, fetchTenantError } from './actions';

import { fetchTenantService } from '../../services/tenantServices';

function* fetchTenant({tenantId}) {
  try {
    const response = yield call(fetchTenantService,tenantId);
    yield put(fetchTenantSuccessful(response.data));
  } catch (error) {
    
    yield put(fetchTenantError(error?.response?.data));
  }
}

export function* watchFetchTenant() {
  yield takeEvery(FETCH_TENANT, fetchTenant);
}

function* TenantSaga() {
  yield all([fork(watchFetchTenant)]);
}

export default TenantSaga;