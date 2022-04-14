import React from 'react';
import { Redirect } from 'react-router-dom';

// Authentication related pages
// import Login from '../pages/Authentication/Login';
// import Logout from '../pages/Authentication/Logout';
// import Register from '../pages/Authentication/Register';
// import ForgetPwd from '../pages/Authentication/ForgetPassword';
// import AuthLockScreen from '../pages/Authentication/AuthLockScreen';

// import Maintenance1 from '../pages/Utility/Maintenance';
// import CommingSoon from '../pages/Utility/CommingSoon';
// import Error404 from '../pages/Utility/Error404';
// import Error500 from '../pages/Utility/Error500';

// Inner Authentication
// import Login1 from '../pages/AuthenticationInner/Login';
import WelcomePage from '../pages/OptiApp/Authentication/WelcomePage';

// Opti FairShip App
import Dashboard1 from '../pages/OptiApp/Dashboard';
import Accounting from '../pages/OptiApp/Accounting';
import Agent from '../pages/OptiApp/Agent';
import Appointment from '../pages/OptiApp/Appointment';
import Chats from '../pages/OptiApp/Chats';
import Documents from '../pages/OptiApp/Documents';
import Inspection from '../pages/OptiApp/Inspection';
import Maintenance from '../pages/OptiApp/Maintenance';
import PowerMonitory from '../pages/OptiApp/PowerMonitory';
import Profile from '../pages/OptiApp/Profile';

// import UnitProperties from '../pages/OptiApp/Properties/UnitProperties';
import ListingProperties from '../pages/OptiApp/Properties/Listing';

import ListingPreview from '../pages/OptiApp/Properties/ListPreview';

import UnitProperties from '../pages/OptiApp/Properties/unitProperty';
import PreviewUnitProperties from '../pages/OptiApp/Properties/unitProperty/PreviewUnitProperty';


import CreateUnitProperties from '../pages/OptiApp/Properties/unitProperty/CreateUnitProperty';

import Properties from '../pages/OptiApp/Properties/index';
import PreviewProperties from '../pages/OptiApp/Properties/PropertyCard';
import CreateProperty from '../pages/OptiApp/Properties/CreateProperty';
import Settings from '../pages/OptiApp/Settings';
import Items from '../pages/OptiApp/Inspection/Items';
import Service from '../pages/OptiApp/Services';
import KeysMeters from '../pages/OptiApp/Inspection/Keys&Meters';

// fairShip Route
import Opti_Register from '../pages/OptiApp/Authentication/Register/WelcomeLandlord';
import Opti_agentRegister from '../pages/OptiApp/Authentication/Register/AgentRegistry';
import Opti_AccountActivation from '../pages/OptiApp/Authentication/ValidationPage';

import Opti_Login from '../pages/OptiApp/Authentication/Login';
import Opti_ChangePassword from '../pages/OptiApp/Authentication/ChangePaassword';
import Opti_ForgetPassword from '../pages/OptiApp/Authentication/ForgetPassword';
import Tenants from '../pages/OptiApp/Tenants';
// OptiTenants
import Opti_Welcome from '../pages/OptiApp/Authentication/WelcomePage';
import OptiRentalApplication from '../pages/OptiApp/Rental';
import AgentPreview from '../pages/OptiApp/Agent/Preview';
// import MaintenancePreview from '../pages/OptiApp/Maintenance/MaintenanceSummary';
import ServicePreview from '../pages/OptiApp/Maintenance/ServiceSummary';
import Preview from '../pages/OptiApp/Rental/Preview';

const authProtectedRoutes = [
  //FairShip Board
  { path: '/dashboard', component: Dashboard1 },
  { path: '/properties', component: Properties },
  { path: '/property/:id', component: PreviewProperties },
  { path: '/create_property', component: CreateProperty },

  { path: '/unit_properties', component: UnitProperties },
  { path: '/unit_property/:id', component: PreviewUnitProperties },
  { path: '/create_unit_property', component: CreateUnitProperties },

  { path: '/agents', component: Agent },
  { path: '/agentpreview/:email', component: AgentPreview },
  { path: '/listing_properties', component: ListingProperties },
  { path: '/list/:id', component: ListingPreview },
  { path: '/accounting', component: Accounting },
  { path: '/documents', component: Documents },
  { path: '/tenants', component: Tenants },
  { path: '/maintenance', component: Maintenance },
  { path: '/serviceSummary/:bookedServiceId', component: ServicePreview },
  { path: '/service', component: Service },
  { path: '/chats', component: Chats },
  { path: '/appointments', component: Appointment },
  { path: '/rental_application', component: OptiRentalApplication },
  { path: '/inspection', component: Inspection },
  { path: '/items', component: Items },
  { path: '/keys_meters', component: KeysMeters },

  { path: '/settings', component: Settings },
  { path: '/PowerMonitory', component: PowerMonitory },
  { path: '/Profile', component: Profile },
  { path: '/preview/:id', component: Preview },

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to="/login" /> },
];

const publicRoutes = [
  // { path: '/logout', component: Logout },
  { path: '/welcome_page', component: WelcomePage },
  { path: '/activation', component: Opti_AccountActivation },
  { path: '/login', component: Opti_Login },
  { path: '/forget_password', component: Opti_ForgetPassword },
  { path: '/change_password', component: Opti_ChangePassword },
  { path: '/landLord_register', component: Opti_Register },
  { path: '/agent_register', component: Opti_agentRegister },
  { path: '/register', component: Opti_Welcome },
];

export { authProtectedRoutes, publicRoutes };
