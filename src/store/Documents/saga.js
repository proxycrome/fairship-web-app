import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { FETCH_DOCUMENTS } from './actionTypes';

import { fetchDocumentsError, fetchDocumentsSuccess } from './actions';

import { fetchDocumentsService } from '../../services/documentServices';


function* fetchDocuments() {
    try {
        const response = yield call(fetchDocumentsService);
        yield put(fetchDocumentsSuccess(response.data));
    } catch (error) {
        yield put(fetchDocumentsError(error?.response?.data))
    }
}


export function* watchFetchDocuments() {
    yield takeEvery(FETCH_DOCUMENTS, fetchDocuments)
}

function* DocumentSaga() {
    yield all([
        fork(watchFetchDocuments),
    ])
}

export default DocumentSaga