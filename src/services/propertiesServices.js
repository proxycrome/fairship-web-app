import HttpService from './HttpService';

export const fetchPropertiesService = () => {
  const http = new HttpService();
  const url = 'auth/properties?limit=100';
  return http.getData(url);
};

export const createPropertiesService = (payload) => {
  console.log(payload);
  const http = new HttpService();
  const url = 'auth/collective-entity-properties';
  return http.postDataWithToken(payload, url);
};
