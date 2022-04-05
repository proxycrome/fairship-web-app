import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';

import Properties from './properties/reducer';
// import Agent from './Agent/reducer';
import Inspections from './inspection/reducer';
import Agents from './agent/reducer';

import Rental from './Rental/reducer';
import PreviewReducer from './Rental/previewReducer';
import Tenant from './Tenants/reducer';

// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,

    Properties,
    
    Inspections,

    Rental,
    PreviewReducer,
    Tenant,


    // Authentication
    Account,
    Agents,
    // Login,
    // Forget

});

export default rootReducer;