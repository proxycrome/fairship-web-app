import { POST_NEW_PASSWORD, POST_NEW_PASSWORD_SUCCESSFUL, POST_NEW_PASSWORD_ERROR, CLEAR_MESSAGES } from "./actionTypes";

const initialState = {
    successMessage: null,
    loading: false,
    error: null,
}

const Settings = (state = initialState, action) => {
    switch(action.type){
        case POST_NEW_PASSWORD:
            state = {
                ...state,
                loading: true,
                successMessage: null,
                error: null,
            }
        break;

        case POST_NEW_PASSWORD_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                successMessage: action.payload,
                error: null,
            }
        break;

        case POST_NEW_PASSWORD_ERROR:
            state = {
                ...state,
                loading: false,
                successMessage: null,
                error: action.payload
            }
        break;

        case CLEAR_MESSAGES:
            state = {
                ...state,
                loading: false,
                successMessage: null,
                error: null,
            }
        break;    

        default:
            state = {...state};
        break;
    }
    return state;
}

export default Settings