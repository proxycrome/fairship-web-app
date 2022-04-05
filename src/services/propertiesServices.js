import HttpService from './HttpService';

export const fetchPropertiesService = () => {
  const http = new HttpService();
  const url = 'auth/properties?limit=100';
  return http.getData(url);
};

export const createPropertiesService = (payload) => {
  const http = new HttpService();
  const url = 'auth/single-entity-properties';
  return http.postDataWithToken(payload, url);
};
