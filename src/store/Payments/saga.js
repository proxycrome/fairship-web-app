import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  getAgentSubFeeService,
  getPaymentGatewayService,
  verifyTransactionService,
} from "../../services/paymentServices";
import {
  getAgentSubFeeError,
  getAgentSubFeeSuccess,
  getPaymentGatewaysError,
  getPaymentGatewaysSuccess,
  verifyTransactionError,
  verifyTransactionSuccess,
} from "./actions";
import {
  GET_AGENT_SUB_FEE,
  GET_PAYMENT_GATEWAYS,
  VERIFY_TRANSACTION,
} from "./actionTypes";

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

function* getAgentSubFee() {
  try {
    const response = yield call(getAgentSubFeeService);
    yield put(getAgentSubFeeSuccess(response.data));
    //   console.log(response.data)
  } catch (error) {
    //   console.log(error?.response?.data);
    yield put(getAgentSubFeeError(error?.response?.data));
  }
}

export function* watchGetPaymentGateways() {
  yield takeEvery(GET_PAYMENT_GATEWAYS, getPaymentGateways);
}

export function* watchVerifyTransaction() {
  yield takeEvery(VERIFY_TRANSACTION, verifyTransaction);
}

export function* watchGetAgentSubFee() {
  yield takeEvery(GET_AGENT_SUB_FEE, getAgentSubFee);
}

function* PaymentSaga() {
  yield all([
    fork(watchGetPaymentGateways),
    fork(watchVerifyTransaction),
    fork(watchGetAgentSubFee),
  ]);
}

export default PaymentSaga;
