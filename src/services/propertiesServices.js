import HttpService from './HttpService';

export const fetchPropertiesService = (payload, collectiveId) => {
  // console.log(payload);
  const http = new HttpService();
  let url = 'auth/properties?limit=100&entityLevel=COLLECTIVE_ENTITY';
  if (payload?.type === 'general') {
    // url = 'properties?limit=100000';
    url = 'auth/properties?limit=100&entityLevel=UNIT_ENTITY'
  } else if (payload?.type === 'unit_entity') {
    url = 'auth/properties?limit=100&entityLevel=SINGLE_ENTITY';
  } else if (payload?.type === 'all_user_properties') {
    url = 'auth/properties-all-levels?limit=1000';
  } else if (payload?.type === 'collective_units') {
    url = `auth/collective-entity-properties/property-units/${collectiveId}`;
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
  if (unitId.type === 'collective') {
    url = `auth/collective-entity-properties/property-units/${unitId.id}`;
  } else if (unitId.type === 'unitEntity') {
    url = `auth/single-entity-properties`;
  }
  return http.postDataWithToken(data, url);
};

export const getPropertyTypesService = () => {
  const http = new HttpService();
  let url = 'property-types/main-categories';
  return http.getData(url);
};

export const getPropertySubcategoryService = (id) => {
  const http = new HttpService();
  let url = `property-types/sub-categories/${id}`;
  return http.getData(url);
};

export const duplicateUnitService = (id) => {
  const http = new HttpService();
  let url = `auth/property-units/duplicate/${id}`;
  return http.putData({}, url);
};
