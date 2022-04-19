import HttpService from './HttpService';

export const fetchPropertiesService = (payload) => {
  console.log(payload);
  const http = new HttpService();
  let url = 'auth/properties?limit=100&entityLevel=COLLECTIVE_ENTITY';
  if (payload?.type === 'general') {
    url = `properties?limit=100`;
  } else if (payload?.type === 'unit_entity') {
    url = 'auth/properties?limit=100&entityLevel=UNIT_ENTITY';
  } else if (payload?.type === 'all_user_properties') {
    url = 'auth/properties-all-levels?limit=100';
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
  if (unitId.type === "collective") {
    url = `auth/collective-entity-properties/property-units/${unitId.id}`;
  } else if(unitId.type === "unitEntity"){
    url = `auth/single-entity-properties`;
  }
  return http.postDataWithToken(data, url);
};
