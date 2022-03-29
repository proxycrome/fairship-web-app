import {
  FETCH_AGENT,
  FETCH_AGENT_SUCCESSFUL,
  FETCH_AGENT_ERROR,
} from './actionTypes';

const initialState = {
  agents: null,
  agentError: null,
  loading: false,
};

const Agent = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AGENT:
      state = {
        ...state,
        agents: null,
        agentError: null,
        loading: true,
      };
      break;
    case FETCH_AGENT_SUCCESSFUL:
      state = {
        ...state,
        agents: action.payload,
        loading: false,
      };
      break;
    case FETCH_AGENT_ERROR:
      state = {
        ...state,
        loading: false,
        agentError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Agent;
