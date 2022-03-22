import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import appointment from './appointment/saga';
import properties from './properties/saga';
import agent from './Agent/saga';
// import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        
        accountSaga(),
        appointment(),
        properties(),
        agent(),
        // forgetSaga(),
        LayoutSaga()
    ])
}