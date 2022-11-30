import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  getPaymentGatewayService,
  verifyTransactionService,
} from "../../services/paymentServices";
import {
  getPaymentGatewaysError,
  getPaymentGatewaysSuccess,
  verifyTransactionError,
  verifyTransactionSuccess,
} from "./actions";
import { GET_PAYMENT_GATEWAYS, VERIFY_TRANSACTION } from "./actionTypes";

function* getPaymentGateways() {
  try {
    const response = yield call(getPaymentGatewayService);
    yield put(getPaymentGatewaysSuccess(response.data));
    //   console.log(response.data)
  } catch (error) {
    //   console.log(error?.response?.data);
    yield put(getPaymentGatewaysError(error?.response?.data));
  }
}

function* verifyTransaction({ payload: { transRef, setShow } }) {
  try {
    const response = yield call(verifyTransactionService, transRef);
    yield put(verifyTransactionSuccess(response.data));
    if (response) {
      setShow(false);
    }
    //   console.log(response.data)
  } catch (error) {
    //   console.log(error?.response?.data);
    yield put(verifyTransactionError(error?.response?.data));
    if (error?.response?.data) {
      setShow(false);
    }
  }
}

export function* watchGetPaymentGateways() {
  yield takeEvery(GET_PAYMENT_GATEWAYS, getPaymentGateways);
}

export function* watchVerifyTransaction() {
  yield takeEvery(VERIFY_TRANSACTION, verifyTransaction);
}

function* PaymentSaga() {
  yield all([fork(watchGetPaymentGateways), fork(watchVerifyTransaction)]);
}

export default PaymentSaga;
