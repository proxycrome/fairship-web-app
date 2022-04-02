import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';

import Properties from './properties/reducer';
import Rental from './Rental/reducer';
import PreviewReducer from './Rental/previewReducer';
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
    Rental,
    PreviewReducer,
    // Authentication
    Account,
    Agents,
    Maintenance,
    // Login,
    // Forget

});

export default rootReducer;