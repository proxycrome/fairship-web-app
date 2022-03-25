import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  CHECK_LOGIN,
  LOGOUT_USER,
  LOAD_USER,
  REGISTER_USER,
  ACTIVATE_USER,
  FORGET_USER,
  CREATE_NEW_PASSWORD,
  FETCH_DASHBOARD,
  FETCH_PROFILE,
} from './actionTypes';
import {
  apiError,
  authError,
  loginUserSuccessful,
  logoutUserSuccess,
  loadUserSuccessful,
  registerUserSuccessful,
  registerUserFailed,
  activateAccountSuccess,
  activateAccountFailed,
  forgetUserSuccessful,
  userForgetPasswordError,
  createNewPasswordError,
  createNewPasswordSuccessful,
  fetchDashboardSuccessful,
  fetchDashboardError,
  fetchProfileSuccessful,
  fetchProfileError,
} from './actions';

import {
  LoginService,
  loadUserServer,
  RegisterService,
  ActivateServices,
  ForgetPasswordServices,
  createNewPasswordServices,
  fetchDashboardService,
  fetchProfileService,
} from '../../services/authServices';

function* loadUserHandler() {
  try {
    const response = yield call(loadUserServer);
    yield put(loadUserSuccessful(response.data));
    localStorage.setItem('authUser', JSON.stringify(response.data.result));
  } catch (error) {
    console.log(error);
    yield put(authError(error?.response?.data));
  }
}

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(LoginService, user);
    yield put(loginUserSuccessful(response.data));
    yield call(loadUserHandler);
    history.push('/dashboard');
  } catch (error) {
    console.log(error);
    console.log(error.response);
    yield put(apiError(error?.response?.data.message));
  }
}

function* logoutUser() {
  try {
    localStorage.removeItem('fairshipToken');
    yield put(logoutUserSuccess());
  } catch (error) {
    yield put(apiError(error));
  }
}

function* registerUser({ payload: { userInfo } }) {
  try {
    const response = yield call(RegisterService, userInfo);
    console.log(response);
    yield put(registerUserSuccessful(response));
  } catch (error) {
    console.log(error);
    console.log(error?.response);
    yield put(registerUserFailed(error));
  }
}

function* activateUser({ payload: { id, history } }) {
  try {
    const response = yield call(ActivateServices, id);
    console.log(response);
    yield put(activateAccountSuccess(response));
    history.push('/login');
  } catch (error) {
    console.log(error);
    yield put(activateAccountFailed(error));
  }
}

function* forgetUser({ payload: { user, history } }) {
  try {
    const response = yield call(ForgetPasswordServices, {
      email: user.useremail,
    });
    if (response) {
      yield put(
        forgetUserSuccessful(
          'Reset link are send to your mailbox, check there first'
        )
      );
    }
  } catch (error) {
    console.log(error?.response?.data?.error?.error);
    yield put(userForgetPasswordError(error?.response?.data?.error?.error));
  }
}

// create new password
function* CreateNewPassword({ payload: { user, history } }) {
  try {
    const response = yield call(createNewPasswordServices, user);
    if (response) {
      yield put(
        createNewPasswordSuccessful(
          'Password successfully change, Please login with your new credentials'
        )
      );
    }
  } catch (error) {
    console.log(error?.response?.data?.error?.error);
    yield put(createNewPasswordError(error?.response?.data?.error?.error));
  }
}

// create new password
function* fetchDashboard() {
  try {
    const response = yield call(fetchDashboardService);
    yield put(fetchDashboardSuccessful(response));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(fetchDashboardError(error?.response?.data));
  }
}

function* fetchProfile() {
  try {
    const response = yield call(fetchProfileService);
    yield put(fetchProfileSuccessful(response));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(fetchProfileError(error?.response?.data));
  }
}

export function* watchUserLogin() {
  yield takeEvery(CHECK_LOGIN, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export function* watchLoadUser() {
  yield takeEvery(LOAD_USER, loadUserHandler);
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export function* watchAccountActivation() {
  yield takeEvery(ACTIVATE_USER, activateUser);
}
export function* watchUserForget() {
  yield takeEvery(FORGET_USER, forgetUser);
}

export function* watchCreateNewForget() {
  yield takeEvery(CREATE_NEW_PASSWORD, CreateNewPassword);
}

export function* watchFetchDashboard() {
  yield takeEvery(FETCH_DASHBOARD, fetchDashboard);
}

export function* watchFetchProfile() {
  yield takeEvery(FETCH_PROFILE, fetchProfile);
}

function* loginSaga() {
  yield all([
    fork(watchUserLogin),
    fork(watchUserLogout),
    fork(watchLoadUser),
    fork(watchUserRegister),
    fork(watchAccountActivation),
    fork(watchUserForget),
    fork(watchCreateNewForget),
    fork(watchFetchDashboard),
    fork(watchFetchProfile),
  ]);
}

export default loginSaga;
