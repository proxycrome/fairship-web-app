import { FETCH_DOCUMENTS, FETCH_DOCUMENTS_ERROR, FETCH_DOCUMENTS_SUCCESS } from "./actionTypes";


const initialState = {
    loading: false,
    documents: null,
    docsError: null,
};

const Document = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTS:
            state = {
                ...state,
                loading: true,
                documents: null,
                docsError: null,
            }
            break;

        case FETCH_DOCUMENTS_SUCCESS:
            state = {
                ...state,
                loading: false,
                documents: action.payload,
                docsError: null,
            }
            break;

        case FETCH_DOCUMENTS_ERROR: 
            state = {
                ...state,
                loading: false,
                documents: null,
                docsError: action.payload,
            }
            break;    
    
        default:
            state = {...state}
            break;
    }

    return state;
}

export default Document;