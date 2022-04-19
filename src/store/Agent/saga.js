import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { GET_ALL_AGENTS, POST_AGENT, GET_LANDLORD_AGENTS, FETCH_AGENT } from "./actionTypes";

import {
  getAgentsSuccessful,
  getAgentsFailure,
  postAgentSuccessful,
  postAgentFailure,
  getLandlordAgentsSuccess,
  getLandlordAgentsFailure,
  fetchAgentSuccess,
  fetchAgentFailure
} from "./actions";

import {
  getAgentsService,
  getLandlordAgentsService,
  postAgentService,
  fetchAgentService,
} from "../../services/agentServices";

function* getAgents({payload}) {
  try {
    const response = yield call(getAgentsService, payload);
    yield put(getAgentsSuccessful(response.data));
    console.log(response)
  } catch (error) {
    console.log(error)
    console.log(error.response)
    yield put(getAgentsFailure(error?.response?.data));
  }
}

function* postAgent({ payload: { formData } }) {
  try {
    const response = yield call(postAgentService, formData);
    yield put(postAgentSuccessful(response.data));
  } catch (error) {
    yield put(postAgentFailure(error?.response?.data));
  }
}

function* getLandlordAgents({payload: {landlordId}}) {
  try {
    const response = yield call(getLandlordAgentsService, landlordId);
    yield put(getLandlordAgentsSuccess(response.data));
  } catch (error) {
    yield put(getLandlordAgentsFailure(error?.response?.data));
  }
}

function* fetchAgent ({payload: {agentEmail}}) {
    try {
        const response = yield call(fetchAgentService, agentEmail);
        yield put(fetchAgentSuccess(response.data)); 
    } catch (error) {
      console.log(error.response)
        yield put(fetchAgentFailure(error?.response?.data));
    }
}

export function* watchgetAgents() {
  yield takeEvery(GET_ALL_AGENTS, getAgents);
}

export function* watchpostAgent() {
  yield takeEvery(POST_AGENT, postAgent);
}

export function* watchgetLandlordAgents() {
  yield takeEvery(GET_LANDLORD_AGENTS, getLandlordAgents);
}

export function* watchfetchAgent() {
    yield takeEvery(FETCH_AGENT, fetchAgent);
}

function* AgentsSaga() {
  yield all([
      fork(watchgetAgents), 
      fork(watchpostAgent), 
      fork(watchgetLandlordAgents),
      fork(watchfetchAgent)
    ])
}

export default AgentsSaga;
