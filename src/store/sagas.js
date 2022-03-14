import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import appointment from './appointment/saga';
// import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import InspectionsSaga from './inspection/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        accountSaga(),
        appointment(),
        // forgetSaga(),
        LayoutSaga(),
        InspectionsSaga()
    ])
}