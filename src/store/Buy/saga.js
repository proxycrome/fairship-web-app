import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
  GET_BUY_APPLICATIONS,
  GET_EACH_BUY_APPLICATION,
  REVIEW_APPLICATION,
  REVIEW_GUARANTOR,
  REVIEW_OFFER,
} from './actionTypes';

import {
  getBuyApplicationsError,
  getBuyApplicationsSuccess,
  getEachBuyApplicationError,
  getEachBuyApplicationSuccess,
  reviewApplicationError,
  reviewApplicationSuccess,
  reviewGuarantorError,
  reviewGuarantorSuccess,
  reviewOfferError,
  reviewOfferSuccess,
} from './actions';

import {
  getBuyApplicationsService,
  getEachBuyApplicationService,
  reviewApplicationService,
  reviewGuarantorService,
  reviewOfferService,
} from '../../services/buyServices';

function* getBuyApplications() {
  try {
    const response = yield call(getBuyApplicationsService);
    yield put(getBuyApplicationsSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    yield put(getBuyApplicationsError(error?.response?.data));
    // console.log(error?.response)
  }
}

function* getEachBuyApplication({ payload }) {
  try {
    const response = yield call(getEachBuyApplicationService, payload);
    yield put(getEachBuyApplicationSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    yield put(getEachBuyApplicationError(error?.response?.data));
    // console.log(error?.response)
  }
}

function* reviewApplication({ payload }) {
  try {
    const response = yield call(reviewApplicationService, payload);
    yield put(reviewApplicationSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    yield put(reviewApplicationError(error?.response?.data));
    // console.log(error?.response)
  }
}

function* reviewOffer({ payload }) {
  try {
    const response = yield call(reviewOfferService, payload);
    yield put(reviewOfferSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    yield put(reviewOfferError(error?.response?.data));
    // console.log(error?.response)
  }
}

function* reviewGuarantor({ payload }) {
    try {
      const response = yield call(reviewGuarantorService, payload);
      yield put(reviewGuarantorSuccess(response.data));
      // console.log(response.data);
    } catch (error) {
      yield put(reviewGuarantorError(error?.response?.data));
      // console.log(error?.response)
    }
  }

export function* watchGetBuyApplicationsService() {
  yield takeEvery(GET_BUY_APPLICATIONS, getBuyApplications);
}

export function* watchGetEachBuyApplicationService() {
  yield takeEvery(GET_EACH_BUY_APPLICATION, getEachBuyApplication);
}

export function* watchReviewApplicationService() {
  yield takeEvery(REVIEW_APPLICATION, reviewApplication);
}

export function* watchReviewOfferService() {
    yield takeEvery(REVIEW_OFFER, reviewOffer);
}

export function* watchReviewGuarantorService() {
    yield takeEvery(REVIEW_GUARANTOR, reviewGuarantor);
}

function* BuyApplicationSaga() {
  yield all([
    fork(watchGetBuyApplicationsService),
    fork(watchGetEachBuyApplicationService),
    fork(watchReviewApplicationService),
    fork(watchReviewOfferService),
    fork(watchReviewGuarantorService),
  ]);
}

export default BuyApplicationSaga;
