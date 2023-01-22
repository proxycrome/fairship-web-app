import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import {
  getAgentSubFeeService,
  getPaymentGatewayService,
  verifyTransactionService,
} from "../../services/paymentServices";
import { fetchMaintenance } from "../actions";
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
  } catch (error) {
    yield put(getPaymentGatewaysError(error?.response?.data));
  }
}

function* verifyTransaction({ payload: { transRef, setShow, dispatch, id } }) {
  try {
    const response = yield call(verifyTransactionService, transRef);
    yield put(verifyTransactionSuccess(response.data));
    if (response) {
      dispatch(fetchMaintenance(id));
      setShow(false);
    }
  } catch (error) {
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
  } catch (error) {
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
