import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { FETCH_AGENT } from './actionTypes';
import {
  fetchAgentSuccessful,
  fetchAgentError,
} from './actions';

import {
  fetchAgentService,
} from '../../services/agentServices';

function* fetchAgent() {
  try {
    const response = yield call(fetchAgentService);
    yield put(fetchAgentSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(fetchAgentError(error?.response?.data));
  }
}


export function* watchFetchAgent() {
  yield takeEvery(FETCH_AGENT, fetchAgent);
}

function* AgentSaga() {
  yield all([fork(watchFetchAgent)]);
}

export default AgentSaga;
