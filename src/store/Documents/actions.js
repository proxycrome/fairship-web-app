import { FETCH_DOCUMENTS, FETCH_DOCUMENTS_ERROR, FETCH_DOCUMENTS_SUCCESS } from "./actionTypes"


export const fetchDocuments = () => {
    return {
        type: FETCH_DOCUMENTS,
    }
};

export const fetchDocumentsSuccess = (data) => {
    return {
        type: FETCH_DOCUMENTS_SUCCESS,
        payload: data,
    }
};

export const fetchDocumentsError = (error) => {
    return {
        type: FETCH_DOCUMENTS_ERROR,
        payload: error,
    }
}