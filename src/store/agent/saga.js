import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { GET_ALL_AGENTS, POST_AGENT, GET_LANDLORD_AGENTS } from "./actionTypes";

import {
  getAgentsSuccessful,
  getAgentsFailure,
  postAgentSuccessful,
  postAgentFailure,
  getLandlordAgentsSuccess,
  getLandlordAgentsFailure,
} from "./actions";

import {
  getAgentsService,
  getLandlordAgentsService,
  postAgentService,
} from "../../services/agentServices";

function* getAgents() {
  try {
    const response = yield call(getAgentsService);
    yield put(getAgentsSuccessful(response.data));
  } catch (error) {
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

export function* watchgetAgents() {
  yield takeEvery(GET_ALL_AGENTS, getAgents);
}

export function* watchpostAgent() {
  yield takeEvery(POST_AGENT, postAgent);
}

export function* watchgetLandlordAgents() {
  yield takeEvery(GET_LANDLORD_AGENTS, getLandlordAgents);
}

function* AgentsSaga() {
  yield all([fork(watchgetAgents), fork(watchpostAgent), fork(watchgetLandlordAgents)]);
}

export default AgentsSaga;
