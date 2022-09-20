import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { getPaymentGatewayService } from '../../services/paymentServices';
import { getPaymentGatewaysError, getPaymentGatewaysSuccess } from './actions';
import { GET_PAYMENT_GATEWAYS } from './actionTypes';


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
  
  export function* watchGetPaymentGateways() {
    yield takeEvery( GET_PAYMENT_GATEWAYS, getPaymentGateways);
  }

  function* PaymentSaga() {
    yield all([fork(watchGetPaymentGateways)]);
  }


  export default PaymentSaga;