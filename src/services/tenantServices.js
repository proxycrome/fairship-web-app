import HttpService from './HttpService';



export const fetchTenantService = (tenantId) =>{
    const http = new HttpService();
    const initialurl = `property-owner/company-agents/get-tenants/${tenantId}`;
    return http.getData(initialurl);
  }