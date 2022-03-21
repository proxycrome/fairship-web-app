import HttpService from './HttpService';

export const getAgentsService = () => {
  const http = new HttpService();
  const url = 'auth/users/all?role=AGENT';
  return http.getData(url);
};

export const postAgentService = (data) => {
    const http = new HttpService();
    const url = 'property-owner/create-agents';
    return http.postDataWithToken(data, url);
}

export const getLandlordAgentsService = (landlordId) => {
    const http = new HttpService();
    const url = "property-owner/all-agents/" + landlordId;
    return http.getDataWithoutToken(url);
}