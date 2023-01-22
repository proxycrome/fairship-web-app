import {
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESSFUL,
    UPDATE_PROFILE_ERROR
} from './actionTypes'


export const updateProfile = (formSent) => {
    return {
        type: UPDATE_PROFILE,
        payload:{formSent}
        
    }
}

export const updateProfileSuccessful = (data) => {
    return {
        type: UPDATE_PROFILE_SUCCESSFUL,
        payload: data.message
    }
}

export const updateProfileError = (error) => {
    return {
        type: UPDATE_PROFILE_ERROR,
        payload: error
    }
}