import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import appointment from './appointment/saga';
import rentalsaga from './Rental/saga';
import previewSaga from './Rental/previewSaga';
// import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        accountSaga(),
        appointment(),
        rentalsaga(),
        previewSaga(),
        // forgetSaga(),
        LayoutSaga()
    ])
}