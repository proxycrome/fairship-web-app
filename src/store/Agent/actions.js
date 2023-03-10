import {
  GET_ALL_AGENTS,
  GET_ALL_AGENTS_SUCCESSFUL,
  GET_ALL_AGENTS_FAILURE,
  POST_AGENT,
  POST_AGENT_SUCCESSFUL,
  POST_AGENT_FAILURE,
  GET_LANDLORD_AGENTS,
  GET_LANDLORD_AGENTS_SUCCESS,
  GET_LANDLORD_AGENTS_FAILURE,
  FETCH_AGENT,
  FETCH_AGENT_SUCCESS,
  FETCH_AGENT_FAILURE,
  CLEAR_MESSAGES,
  GET_COMPANY_AGENTS,
  GET_COMPANY_AGENTS_SUCCESS,
  GET_COMPANY_AGENTS_ERROR,
  UPDATE_AGENT_SUB,
  UPDATE_AGENT_SUB_SUCCESS,
  UPDATE_AGENT_SUB_ERROR,
} from "./actionTypes";

export const getAgents = (id) => {
  return {
    type: GET_ALL_AGENTS,
    payload: id,
  };
};

export const getAgentsSuccessful = (data) => {
  return {
    type: GET_ALL_AGENTS_SUCCESSFUL,
    payload: data,
  };
};

export const getAgentsFailure = (error) => {
  return {
    type: GET_ALL_AGENTS_FAILURE,
    payload: error,
  };
};

export const postAgents = (formData) => {
  return {
    type: POST_AGENT,
    payload: { formData },
  };
};

export const postAgentSuccessful = (data) => {
  return {
    type: POST_AGENT_SUCCESSFUL,
    payload: data,
  };
};

export const postAgentFailure = (error) => {
  return {
    type: POST_AGENT_FAILURE,
    payload: error,
  };
};

export const getLandlordAgents = (landlordId) => {
  return {
    type: GET_LANDLORD_AGENTS,
    payload: { landlordId },
  };
};

export const getLandlordAgentsSuccess = (data) => {
  return {
    type: GET_LANDLORD_AGENTS_SUCCESS,
    payload: data,
  };
};

export const getLandlordAgentsFailure = (error) => {
  return {
    type: GET_LANDLORD_AGENTS_FAILURE,
    payload: error,
  };
};

export const fetchAgent = (agentEmail) => {
  return {
    type: FETCH_AGENT,
    payload: { agentEmail },
  };
};

export const fetchAgentSuccess = (data) => {
  return {
    type: FETCH_AGENT_SUCCESS,
    payload: data,
  };
};

export const fetchAgentFailure = (error) => {
  return {
    type: FETCH_AGENT_FAILURE,
    payload: error,
  };
};

export const getCompanyAgents = (id) => {
  return {
    type: GET_COMPANY_AGENTS,
    payload: { id },
  };
};

export const getCompanyAgentsSuccess = (data) => {
  return {
    type: GET_COMPANY_AGENTS_SUCCESS,
    payload: data,
  };
};

export const getCompanyAgentsError = (error) => {
  return {
    type: GET_COMPANY_AGENTS_ERROR,
    payload: error,
  };
};

export const updateAgentSub = (dispatch) => {
  return {
    type: UPDATE_AGENT_SUB,
    payload: {dispatch},
  };
};

export const updateAgentSubSuccess = (data) => {
  return {
    type: UPDATE_AGENT_SUB_SUCCESS,
    payload: data,
  };
};

export const updateAgentSubError = (error) => {
  return {
    type: UPDATE_AGENT_SUB_ERROR,
    payload: error,
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};
