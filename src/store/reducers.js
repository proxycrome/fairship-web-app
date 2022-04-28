import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';

import Properties from './properties/reducer';
import Rental from './Rental/reducer';
import PreviewReducer from './Rental/previewReducer';

import Tenant from './Tenants/reducer';
import updateProfileReducer from './profile/reducer';


import Inspections from './inspection/reducer';
import Agents from './Agent/reducer';
import Maintenance from './Maintenance/reducer';
import fetchReducerExpiring from './DashboardExpiringLeases/reducer';
import Location from './location/reducer';

// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,
    Properties,
    Inspections,
    Rental,
    PreviewReducer,
    Location,

    Tenant,
    fetchReducerExpiring,


    // Authentication
    Account,
    Agents,
    Maintenance,
    updateProfileReducer
    // Login,
    // Forget

});

export default rootReducer;