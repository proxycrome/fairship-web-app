import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import appointment from './appointment/saga';

import properties from './properties/saga';
import RentalSaga from './Rental/saga';
import RentalPreviewRecommendationSaga from './Rental/previewSaga';
import ProfileSaga from './profile/saga';
// import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import InspectionsSaga from './inspection/saga';
import LocationSaga from './location/saga';
import SettingsSaga from './Settings/saga';

import TenantSaga from './Tenants/saga'

import AgentsSaga from './Agent/saga';
import MaintenanceSaga from './Maintenance/saga';
import fetchleaseSaga from './DashboardExpiringLeases/saga';
import AccountingSaga from './Accounting/saga';
import DocumentSaga from './Documents/saga';


export default function* rootSaga() {
    yield all([
        
        //public
        accountSaga(),
        appointment(),
        AccountingSaga(),
        DocumentSaga(),
        properties(),
        SettingsSaga(),
        // agent(),
        TenantSaga(),
        ProfileSaga(),
        fetchleaseSaga(),
        LocationSaga(),

        RentalSaga(),
        RentalPreviewRecommendationSaga(),
        // forgetSaga(),
        LayoutSaga(),
        InspectionsSaga(),
        AgentsSaga(),
        MaintenanceSaga()
    ])
}