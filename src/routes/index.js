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
import Properties from '../pages/OptiApp/Properties/index';
import CreateProperty from '../pages/OptiApp/Properties/CreateProperty';
import Settings from '../pages/OptiApp/Settings';
import Items from '../pages/OptiApp/Inspection/Items';
import Service from '../pages/OptiApp/Services';
import KeysMeters from '../pages/OptiApp/Inspection/Keys&Meters';

// fairShip Route
import Opti_Register from '../pages/OptiApp/Authentication/Register';
import Opti_Login from '../pages/OptiApp/Authentication/Login';
import Opti_ChangePassword from '../pages/OptiApp/Authentication/ChangePaassword';
import Opti_ForgetPassword from '../pages/OptiApp/Authentication/ForgetPassword';
import Tenants from '../pages/OptiApp/Tenants';
// OptiTenants
import Opti_Welcome from '../pages/OptiApp/Authentication/WelcomePage';
import OptiRentalApplication from '../pages/OptiApp/Rental';
import AgentPreview from '../pages/OptiApp/Agent/Preview';
import MaintenancePreview from '../pages/OptiApp/Maintenance/MaintenanceSummary';
import ServicePreview from '../pages/OptiApp/Maintenance/ServiceSummary';

const authProtectedRoutes = [
  //FairShip Board
  { path: '/dashboard', component: Dashboard1 },
  { path: '/properties', component: Properties },
  { path: '/create_property', component: CreateProperty },
  
  { path: '/agents', component: Agent },
  { path: '/agentpreview/:email', component: AgentPreview },
  // { path: '/unit_property', component: UnitProperties },
  { path: '/listing_properties', component: ListingProperties },
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

  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to="/login" /> },
];

const publicRoutes = [
  // { path: '/logout', component: Logout },
  { path: '/welcome_page', component: WelcomePage },
  { path: '/login', component: Opti_Login },
  { path: '/forget_password', component: Opti_ForgetPassword },
  { path: '/change_password', component: Opti_ChangePassword },
  { path: '/register', component: Opti_Register },
  { path: '/welcome', component: Opti_Welcome },
  // { path: '/login1', component: Login },
  // { path: '/forgot-password', component: ForgetPwd },
  // { path: '/register1', component: Register },
  // { path: '/auth-lock-screen', component: AuthLockScreen },

  // Authentication Inner
  // { path: '/auth-login', component: Login1 },

  // { path: '/pages-maintenance', component: Maintenance1 },
  // { path: '/pages-comingsoon', component: CommingSoon },
  // { path: '/pages-404', component: Error404 },
  // { path: '/pages-500', component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
