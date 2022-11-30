import HttpService from './HttpService';

export const getAgentsService = (landlordID) => {
  const http = new HttpService();
  let url = 'auth/users/all?role=AGENT&limit=100';
  if (landlordID) {
    url = `property-owner/all-agents/${landlordID}?page=0&size=10
      `;
  }
  return http.getData(url);
};

export const postAgentService = (data) => {
  const http = new HttpService();
  const url = 'property-owner/create-agents';
  return http.postDataWithToken(data, url);
};

export const getLandlordAgentsService = (landlordId) => {
  const http = new HttpService();
  const url = `property-owner/all-agents/${landlordId}?size=1000000`;
  return http.getData(url);
};

export const fetchAgentService = (email) => {
  const http = new HttpService();
  const url = `auth/${email}/users`;
  return http.getData(url);
};

export const getCompanyAgentsService = (companyId) => {
  const http = new HttpService();
  const url = `auth/company-agents/${companyId}?limit=1000000`;
  return http.getData(url);
};
