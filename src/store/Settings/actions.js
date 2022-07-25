import { CLEAR_MESSAGES, POST_NEW_PASSWORD, POST_NEW_PASSWORD_ERROR, POST_NEW_PASSWORD_SUCCESSFUL } from "./actionTypes";

export const postNewPassword = (formData) => {
    return {
        type: POST_NEW_PASSWORD,
        payload: {formData},
    }
};

export const postNewPasswordSuccessful = (data) => {
    return {
        type: POST_NEW_PASSWORD_SUCCESSFUL,
        payload: data,
    }
};

export const postNewPasswordError = (error) => {
    return {
        type: POST_NEW_PASSWORD_ERROR,
        payload: error,
    }
}

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES,
    }
}