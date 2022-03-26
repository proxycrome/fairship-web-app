import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';
import Inspections from './inspection/reducer';
import Agents from './agent/reducer';
import Maintenance from './Maintenance/reducer';
// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,
    Inspections,
    // Authentication
    Account,
    Agents,
    Maintenance,
    // Login,
    // Forget

});

export default rootReducer;