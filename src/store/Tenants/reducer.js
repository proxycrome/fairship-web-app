import {
    FETCH_TENANT,
    FETCH_TENANT_SUCCESSFUL,
    FETCH_TENANT_ERROR,
  } from './actionTypes';
  
  const initialState = {
    tenant: {},
    tenantError: null,
    loading: false,
  };
  
  const Tenant = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TENANT:
        state = {
          ...state,
          tenant: {},
          tenantError: null,
          loading: true,
        };
        break;
      case FETCH_TENANT_SUCCESSFUL:
        state = {
          ...state,
          tenant: action.payload,
          loading: false,
        };
        console.log(state.tenant)
        break;
      case FETCH_TENANT_ERROR:
        state = {
          ...state,
          loading: false,
          tenantError: action.payload,
        };
        break;
  
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default Tenant;