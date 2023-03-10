import React from 'react';
import { Redirect } from 'react-router-dom';

import WelcomePage from '../pages/OptiApp/Authentication/WelcomePage';

// Opti FairShip App
import Dashboard1 from '../pages/OptiApp/Dashboard';
import Accounting from '../pages/OptiApp/Accounting';
import Agent from '../pages/OptiApp/Agent';
import Appointment from '../pages/OptiApp/Appointment';
import Chats from '../pages/OptiApp/Chats';
import Documents from '../pages/OptiApp/Documents';
import Inspection from '../pages/OptiApp/Inspection';
import PreviewInspection from '../pages/OptiApp/Inspection/PreviewCopy';
import create_inspection from '../pages/OptiApp/Inspection/MoveIn';
import Maintenance from '../pages/OptiApp/Maintenance';
import MaintenanceSummary from '../pages/OptiApp/Maintenance/MaintenanceSummary';
import ServiceRequest from '../pages/OptiApp/Maintenance/ServiceRequest';
import PowerMonitory from '../pages/OptiApp/PowerMonitory';
import Profile from '../pages/OptiApp/Profile';


import ListingProperties from '../pages/OptiApp/Properties/Listing';

import ListingPreview from '../pages/OptiApp/Properties/ListPreview';

import UnitProperties from '../pages/OptiApp/Properties/unitProperty';
import PreviewUnitProperties from '../pages/OptiApp/Properties/unitProperty/PreviewUnitProperty';

import CreateUnitProperties from '../pages/OptiApp/Properties/unitProperty/CreateUnitProperty';
import AddMoreUnit from '../pages/OptiApp/Properties/addMoreUnit';
import ChangePassword from '../pages/OptiApp/ChangePassword';

import Properties from '../pages/OptiApp/Properties/index';
import UpdateProperty from '../pages/OptiApp/Properties/editUnitProperty';
import UpdateSingleUnitProperty from '../pages/OptiApp/Properties/editSingleUnitProperty';
import PreviewProperties from '../pages/OptiApp/Properties/PropertyCard';
import CreateProperty from '../pages/OptiApp/Properties/CreateProperty';
import Settings from '../pages/OptiApp/Settings';
import Items from '../pages/OptiApp/Inspection/Items';
import Service from '../pages/OptiApp/Services';
import KeysMeters from '../pages/OptiApp/Inspection/Keys&Meters';
import AcceptAppointment from '../pages/OptiApp/Appointment/AcceptAppointment';
import RejectAppointment from '../pages/OptiApp/Appointment/RejectAppointment';
import WalkThroughPage from '../pages/OptiApp/Properties/walkThroughPayment';

// fairShip Route
import Opti_Register from '../pages/OptiApp/Authentication/Register/index';
import Opti_agentRegister from '../pages/OptiApp/Authentication/Register/AgentWelcomePage';
import Opti_AccountActivation from '../pages/OptiApp/Authentication/ValidationPage';

import Opti_Login from '../pages/OptiApp/Authentication/Login';
import Opti_ChangePassword from '../pages/OptiApp/Authentication/ChangePaassword';
import Opti_ForgetPassword from '../pages/OptiApp/Authentication/ForgetPassword';
import Tenants from '../pages/OptiApp/Tenants';
// OptiTenants
import Opti_Welcome from '../pages/OptiApp/Authentication/WelcomePage';
import Opti_Privacy from '../pages/OptiApp/Authentication/privacy';
import RentalApplication from '../pages/OptiApp/Rental';
import BuyApplication from '../pages/OptiApp/Buy';
import BuyPreview from '../pages/OptiApp/Buy/Preview/Preview';
import AgentPreview from '../pages/OptiApp/Agent/Preview';
// import MaintenancePreview from '../pages/OptiApp/Maintenance/MaintenanceSummary';
import ServicePreview from '../pages/OptiApp/Maintenance/ServiceSummary';
import Preview from '../pages/OptiApp/Rental/Preview';
import CreateMaintenance from '../pages/OptiApp/Maintenance/CreateMaintenace';
import LeaseTermination from '../pages/OptiApp/LeaseTermination';
import PreviewLeaseTermination from '../pages/OptiApp/LeaseTermination/Preview';
import Privacy from '../pages/OptiApp/Authentication/Register/Privacy';
import Tos from '../pages/OptiApp/Authentication/Register/Tos';

const authProtectedRoutes = [
  //FairShip Board
  { path: '/dashboard', component: Dashboard1 },
  { path: '/change-password', component: ChangePassword },
  { path: '/properties', component: Properties },
  { path: '/update_unit/:id', component: UpdateProperty },
  
  { path: '/property/:id', component: PreviewProperties },
  { path: '/create_property', component: CreateProperty },

  { path: '/unit_properties', component: UnitProperties },
  { path: '/unit_property/:id', component: PreviewUnitProperties },
  { path: '/create_unit_property', component: CreateUnitProperties },
  { path: '/update_single_unit/:id', component: UpdateSingleUnitProperty},
  { path: '/create_more_unit/:id', component: AddMoreUnit},
  { path: '/walkthrough/:id', component: WalkThroughPage},

  { path: '/agents', component: Agent },
  { path: '/agentpreview/:email', component: AgentPreview },
  { path: '/listing_properties', component: ListingProperties },
  { path: '/list/:id', component: ListingPreview },
  { path: '/accounting', component: Accounting },
  { path: '/documents', component: Documents },
  { path: '/tenants', component: Tenants },
  { path: '/maintenance', component: Maintenance },
  { path: '/maintenanceSummary/:id', component: MaintenanceSummary },
  { path: '/createMaintenance', component: CreateMaintenance },
  { path: '/serviceRequest' , component: ServiceRequest},
  { path: '/serviceSummary/:bookedServiceId', component: ServicePreview },
  { path: '/service', component: Service },
  { path: '/chats', component: Chats },
  { path: '/appointments', component: Appointment },
  { path: '/accept_appointment/:appointId', component: AcceptAppointment },
  { path: '/reject_appointment/:appointId', component: RejectAppointment },
  { path: '/rental_application', component: RentalApplication },
  { path: '/buy_application', component: BuyApplication },
  { path: '/buy_preview/:id', component: BuyPreview },
  { path: '/inspection', component: Inspection },
  { path: '/previewInspection/:id', component: PreviewInspection },
  
  { path: '/create_inspection/:id', component: create_inspection },
  { path: '/lease-termination', component: LeaseTermination },
  { path: '/previewLeaseTermination/:id', component: PreviewLeaseTermination },
  
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
  // { path: '/privacy', component: Opti_Privacy },
  { path: '/activation', component: Opti_AccountActivation },
  { path: '/login', component: Opti_Login },
  { path: '/forget_password', component: Opti_ForgetPassword },
  { path: '/change_password', component: Opti_ChangePassword },
  { path: '/landLord_register', component: Opti_Register },
  { path: '/agent_register', component: Opti_agentRegister },
  { path: '/register', component: Opti_Welcome },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Tos },
];

export { authProtectedRoutes, publicRoutes };
