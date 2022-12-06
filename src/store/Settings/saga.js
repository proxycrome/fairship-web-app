import { takeEvery, fork, put, all, call } from "redux-saga/effects";

import { POST_NEW_PASSWORD, REVIEW_USER } from "./actionTypes";

import {
  postNewPasswordSuccessful,
  postNewPasswordError,
  reviewUserSuccess,
  reviewUserError,
} from "./actions";

import {
  postNewPasswordService,
  reviewUserService,
} from "../../services/settingsService";
import { fetchMaintenance } from "../actions";

function* postNewPassword({ payload: { formData } }) {
  try {
    const response = yield call(postNewPasswordService, formData);
    yield put(postNewPasswordSuccessful(response.data));
  } catch (error) {
    yield put(postNewPasswordError(error?.response?.data));
  }
}

function* reviewUser({ payload: { formData, setShowReview, dispatch, id } }) {
  try {
    const response = yield call(reviewUserService, formData);
    yield put(reviewUserSuccess(response.data));
    if (response) {
      setShowReview(false);
      dispatch(fetchMaintenance(id));
    }
  } catch (error) {
    yield put(reviewUserError(error?.response?.data));
    setShowReview(false);
  }
}

export function* watchPostNewPassword() {
  yield takeEvery(POST_NEW_PASSWORD, postNewPassword);
}

export function* watchReviewUser() {
  yield takeEvery(REVIEW_USER, reviewUser);
}

function* SettingsSaga() {
  yield all([fork(watchPostNewPassword), fork(watchReviewUser)]);
}

export default SettingsSaga;
