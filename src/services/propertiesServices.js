import HttpService from './HttpService';

export const fetchPropertiesService = (payload) => {
  console.log(payload)
  const http = new HttpService();
  let url = 'auth/properties?limit=100&entityLevel=COLLECTIVE_ENTITY';
  if(payload){
    url = `properties?limit=100`
  }
  return http.getData(url);
};

export const fetchEachPropertiesService = (id) => {
  const http = new HttpService();
  const url = `properties/${id}`;
  return http.getData(url);
};

export const createPropertiesService = ({ data, unitId }) => {
  const http = new HttpService();
  let url = 'auth/collective-entity-properties';
  if (unitId) {
    url = `auth/collective-entity-properties/property-units/${unitId}`;
  }
  return http.postDataWithToken(data, url);
};
