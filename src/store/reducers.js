import { combineReducers  } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Appointment from './appointment/reducer';
import Rental from './Rental/reducer';
import PreviewReducer from './Rental/previewReducer';
// import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // public
    Layout,
    Appointment,
    Rental,
    PreviewReducer,

    // Authentication
    Account,
    // Login,
    // Forget

});

export default rootReducer;