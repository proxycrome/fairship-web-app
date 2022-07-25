import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { POST_NEW_PASSWORD } from './actionTypes';

import { postNewPasswordSuccessful, postNewPasswordError } from './actions';

import { postNewPasswordService } from '../../services/settingsService';

function* postNewPassword({payload: {formData}}) {
    try {
      const response = yield call(postNewPasswordService, formData);
      yield put(postNewPasswordSuccessful(response.data));
    } catch (error) {
      yield put(postNewPasswordError(error?.response?.data));
    }
}

export function* watchPostNewPassword() {
    yield takeEvery(POST_NEW_PASSWORD, postNewPassword)
}

function* SettingsSaga() {
    yield all([
      fork(watchPostNewPassword),
    ]);
}

export default SettingsSaga;