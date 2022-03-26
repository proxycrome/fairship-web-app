import {
  FETCH_AGENT,
  FETCH_AGENT_SUCCESSFUL,
  FETCH_AGENT_ERROR,

} from './actionTypes.js';

// Fetch Agent
export const fetchAgent = () => {
  return {
    type: FETCH_AGENT,
  };
};

export const fetchAgentSuccessful = (message) => {
  return {
    type: FETCH_AGENT_SUCCESSFUL,
    payload: message,
  };
};

export const fetchAgentError = (error) => {
  return {
    type: FETCH_AGENT_ERROR,
    payload: error,
  };
};
