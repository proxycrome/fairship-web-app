import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
 updateProfileSuccessful,
 updateProfileError
} from './actions'

import {
  UPDATE_PROFILE
} from './actionTypes'

import { putUpdateApi} from '../../services/putUpdateApiServices';


function* putUpdate({payload:{formSent}}) {
    try {
      const response = yield call(putUpdateApi, formSent);
      yield put(updateProfileSuccessful(response.data));
    } catch (error) {
      yield put(updateProfileError(error?.response?.data));
    }
  }
  
  export function* watchputUpdate() {
    yield takeEvery( UPDATE_PROFILE, putUpdate);
  }

  function* ProfileSaga() {
    yield all([fork(watchputUpdate)]);
  }


  export default ProfileSaga;
  