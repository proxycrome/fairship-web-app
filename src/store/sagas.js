import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import appointment from './appointment/saga';
import properties from './properties/saga';
import agent from './agent/saga';
// import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import InspectionsSaga from './inspection/saga';
import AgentsSaga from './agent/saga';
import MaintenanceSaga from './Maintenance/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        
        accountSaga(),
        appointment(),
        properties(),
        agent(),
        // forgetSaga(),
        LayoutSaga(),
        InspectionsSaga(),
        AgentsSaga(),
        MaintenanceSaga()
    ])
}