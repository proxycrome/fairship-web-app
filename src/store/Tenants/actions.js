import {
    FETCH_TENANT,
    FETCH_TENANT_SUCCESSFUL,
    FETCH_TENANT_ERROR,
  } from './actionTypes.js';


  export const fetchTenant = (tenantId) => {
    return {
      type: FETCH_TENANT,
      tenantId
    };
  };
  
  export const fetchTenantSuccessful = (data) => {
    return {
      type: FETCH_TENANT_SUCCESSFUL,
      payload: data,
    };
  };
  
  
  export const fetchTenantError = (error) => {
    return {
      type: FETCH_TENANT_ERROR,
      payload: error,
    };
  };