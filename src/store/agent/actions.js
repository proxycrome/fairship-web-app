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
} from './actionTypes'


export const getAgents = () => {
    return {
        type: GET_ALL_AGENTS,
    }
}

export const getAgentsSuccessful = (data) => {
    return {
        type: GET_ALL_AGENTS_SUCCESSFUL,
        payload: data
    }
}

export const getAgentsFailure = (error) => {
    return {
        type: GET_ALL_AGENTS_FAILURE,
        payload: error
    }
}

export const postAgents = (formData) => {
    return {
        type: POST_AGENT,
        payload: {formData}
    }
} 

export const postAgentSuccessful = (data) => {
    return {
        type: POST_AGENT_SUCCESSFUL,
        payload: data
    }
}

export const postAgentFailure = (error) => {
    return {
        type: POST_AGENT_FAILURE,
        payload: error
    }
}

export const getLandlordAgents = (landlordId) => {
    return {
        type: GET_LANDLORD_AGENTS,
        payload: {landlordId}
    }
}

export const getLandlordAgentsSuccess = (data) => {
    return {
        type: GET_LANDLORD_AGENTS_SUCCESS,
        payload: data
    }
}

export const getLandlordAgentsFailure = (error) => {
    return {
        type: GET_LANDLORD_AGENTS_FAILURE,
        payload : error
    }
}

export const fetchAgent = (agentEmail) => {
    return {
        type: FETCH_AGENT,
        payload: { agentEmail }
    }
}

export const fetchAgentSuccess = (data) => {
    return {
        type: FETCH_AGENT_SUCCESS,
        payload: data
    }
}

export const fetchAgentFailure = (error) => {
    return {
        type: FETCH_AGENT_FAILURE,
        payload: error
    }
}