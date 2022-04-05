import HttpService from './HttpService';



export const fetchTenantService = (tenantId) =>{
    console.log(tenantId)
    const http = new HttpService();
    const initialurl = `property-owner/company-agents/get-tenants/${tenantId}`;
    return http.getDataWithoutToken(initialurl);
  }