import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';
import Properties from './properties/reducer';
import Agent from './Agent/reducer';
// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,
    Properties,
    Agent,
    // Authentication
    Account,
    // Login,
    // Forget

});

export default rootReducer;