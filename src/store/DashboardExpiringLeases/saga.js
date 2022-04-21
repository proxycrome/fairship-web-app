import { takeEvery, call, put, all, fork } from "redux-saga/effects";
import { FETCH_EXPIRING, FETCH_EXPIRING_SIXTY, FETCH_EXPIRING_ONETWENTY} from './actionTypes'
import {
  fetchExpiringSuccessful, fetchExpiringError, fetchExpiringSuccessfulSixty,fetchExpiringErrorSixty, fetchExpiringSuccessfulOnetwenty,fetchExpiringErrorOnetwenty
} from './actions'

import { fetchleaseServices, fetchleaseServicesSixty, fetchleaseServicesTwenty } from "../../services/expiringLeasesServices";


function* fetchlease (){
    try{
      const response = yield call(fetchleaseServices)
      yield put(fetchExpiringSuccessful(response.data))
      console.log(response.data)
    }catch(error){
        yield put(fetchExpiringError(error?.response?.data))
    }
}


export function*  watchFetchlease(){
    yield takeEvery(FETCH_EXPIRING, fetchlease)
}

function* fetchleaseSixty (){
  try{
    const response = yield call(fetchleaseServicesSixty)
    yield put(fetchExpiringSuccessfulSixty(response.data))
    console.log(response.data)
  }catch(error){
      yield put(fetchExpiringErrorSixty(error?.response?.data))
  }
}


export function*  watchFetchleaseSixty(){
  yield takeEvery(FETCH_EXPIRING_SIXTY, fetchleaseSixty)
}

function* fetchleaseTwenty (){
  try{
    const response = yield call(fetchleaseServicesTwenty)
    yield put(fetchExpiringSuccessfulOnetwenty(response.data))
    console.log(response.data)
  }catch(error){
      yield put(fetchExpiringErrorOnetwenty(error?.response?.data))
  }
}


export function*  watchFetchleaseOnetwenty(){
  yield takeEvery(FETCH_EXPIRING_ONETWENTY, fetchleaseTwenty)
}



function* fetchleaseSaga() {
    yield all([fork(watchFetchlease), fork(watchFetchleaseSixty), fork(watchFetchleaseOnetwenty)]);
}



export default fetchleaseSaga;