import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';
import Properties from './properties/reducer';
import Inspections from './inspection/reducer';
import Agents from './Agent/reducer';
import Maintenance from './Maintenance/reducer';
// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,
    Properties,
    Inspections,
    // Authentication
    Account,
    Agents,
    Maintenance,
    // Login,
    // Forget

});

export default rootReducer;