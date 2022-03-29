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
} from './actionTypes';


const initialState = {
    agents: null,
    loading: false,
    agentsError: null,
    postAgentData: null,
    postAgentError: null,
    landlordAgents: null,
    landlordAgentsError: null,
    agent: null,
    agentError: null
}

const Agents = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_AGENTS:
        case POST_AGENT:
        case GET_LANDLORD_AGENTS:
        case FETCH_AGENT:
            state = {
                ...state,
                loading: true,
                agentsError: null,
            };
        break;

        case GET_ALL_AGENTS_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                agents: action.payload,
                agentsError: null,
            };
        break;

        case GET_ALL_AGENTS_FAILURE:
            state = {
                ...state,
                loading: false,
                agentsError: action.payload,
                agents: null,
            };
        break;

        case POST_AGENT_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                agentsError: null,
                postAgentData: action.payload,
                postAgentError: null,
            }
        break;

        case POST_AGENT_FAILURE:
            state = {
                ...state,
                loading: false,
                agentsError: null,
                postAgentError: action.payload,
                postAgentData: null,
            }
        break;

        case GET_LANDLORD_AGENTS_SUCCESS:
            state = {
                ...state,
                loading: false,
                landlordAgents: action.payload,
                landlordAgentsError: null,
                agentsError: null,
                postAgentError: null,
                agentError: null
            }
        break;

        case GET_LANDLORD_AGENTS_FAILURE:
            state = {
                ...state,
                loading: false,
                landlordAgents: null,
                landlordAgentsError: action.payload,
                agentsError: null,
                postAgentError: null,
                agentError: null
            }
        break;

        case FETCH_AGENT_SUCCESS:
            state = {
                ...state,
                loading: false,
                agent: action.payload,
                landlordAgentsError: null,
                agentsError: null,
                postAgentError: null,
                agentError: null
            }
        break;

        case FETCH_AGENT_FAILURE:
            state = {
                ...state,
                loading: false,
                agent: null,
                landlordAgentsError: null,
                agentsError: null,
                postAgentError: null,
                agentError: action.payload
            }
        break;

        default:
            state = { ...state };
        break;
    }
    return state;
}

export default Agents;