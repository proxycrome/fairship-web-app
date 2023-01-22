import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import {
  DELETE_ACCOUNT,
  FETCH_BANKS,
  GET_ACCOUNTS,
  GET_TRANSACTIONS,
  POST_ACCOUNT,
  POST_TRANSACTION,
} from './actionTypes';

import {
  fetchBanksSuccessful,
  fetchBanksError,
  postAccountSuccessful,
  postAccountError,
  getAccountsSuccessful,
  getAccountError,
  getTransactionsSuccessful,
  getTransactionsError,
  postTransactionSuccessful,
  postTransactionError,
  deleteAccountSuccess,
  deleteAccountError,
} from './actions';

import {
  deleteAccountService,
  fetchBanksService,
  getAccountsService,
  getTransactionsService,
  postAccountService,
  postTransactionService,
} from '../../services/accountingService';

function* fetchBanks() {
  try {
    const response = yield call(fetchBanksService);
    yield put(fetchBanksSuccessful(response.data));
  } catch (error) {
    yield put(fetchBanksError(error?.reponse?.data));
  }
}

function* postAccount({ payload: { formData } }) {
  try {
    const response = yield call(postAccountService, formData);
    yield put(postAccountSuccessful(response.data));
  } catch (error) {
    yield put(postAccountError(error?.response?.data));
  }
}

function* getAccounts() {
  try {
    const response = yield call(getAccountsService);
    yield put(getAccountsSuccessful(response.data));
  } catch (error) {
    yield put(getAccountError(error?.response?.data));
  }
}

function* getTransactions() {
  try {
    const response = yield call(getTransactionsService);
    yield put(getTransactionsSuccessful(response.data));
  } catch (error) {
    yield put(getTransactionsError(error?.response?.data));
  }
}

function* postTransaction({ payload: { formData, closePage } }) {
  try {
    const response = yield call(postTransactionService, formData);
    yield put(postTransactionSuccessful(response.data));
    if(response){
      setTimeout(() => {
        closePage();
      }, 3000)
    }

  } catch (error) {
    yield put(postTransactionError(error?.response?.data));
  }
}

function* deleteAccount({ payload: { accountId } }) {
  try {
    const response = yield call(deleteAccountService, accountId);
    yield put(deleteAccountSuccess(response.data));
  } catch (error) {
    yield put(deleteAccountError(error?.response?.data));
  }
}

export function* watchFetchBanks() {
  yield takeEvery(FETCH_BANKS, fetchBanks);
}

export function* watchPostAccount() {
  yield takeEvery(POST_ACCOUNT, postAccount);
}

export function* watchGetAccounts() {
  yield takeEvery(GET_ACCOUNTS, getAccounts);
}

export function* watchGetTransactions() {
  yield takeEvery(GET_TRANSACTIONS, getTransactions);
}

export function* watchPostTransaction() {
  yield takeEvery(POST_TRANSACTION, postTransaction);
}

export function* watchDeleteAccount() {
  yield takeEvery(DELETE_ACCOUNT, deleteAccount);
}

function* AccountingSaga() {
  yield all([
    fork(watchFetchBanks),
    fork(watchPostAccount),
    fork(watchGetAccounts),
    fork(watchGetTransactions),
    fork(watchPostTransaction),
    fork(watchDeleteAccount),
  ]);
}

export default AccountingSaga;
