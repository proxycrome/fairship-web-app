import HttpService from './HttpService';

export const fetchPropertiesService = (payload, collectiveId) => {
  // console.log(payload);
  const http = new HttpService();
  let url = 'auth/properties?limit=100&entityLevel=COLLECTIVE_ENTITY';
  if (payload?.type === 'general') {
    url = `properties?limit=100000&status=ACTIVE${
      payload?.query.maxPrice ? `&maxPrice=${payload?.query.maxPrice}` : ''
    }${
      payload?.query.minPrice || payload?.query.minPrice === 0
        ? `&minPrice=${payload?.query.minPrice}`
        : ''
    }${
      payload?.query.saleOrRent
        ? `&saleOrRent=${payload?.query.saleOrRent}`
        : ''
    }${payload?.query.state ? `&state=${payload?.query.state}` : ''}${
      payload?.query.search ? `&search=${payload?.query.search}` : ''
    }`;
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

export const putSingleUnitPropertyService = ({ formData, propertyId }) => {
  const http = new HttpService();
  let url = `auth/single-entity-properties/${propertyId}`;
  return http.putData(formData, url);
};

export const updateUnitService = ({ data, unitId }) => {
  const http = new HttpService();
  let url = `/auth/property-units/${unitId}`;
  return http.putData(data, url);
};

export const deletePropertyService = (propertyId) => {
  const http = new HttpService();
  let url = `auth/properties/${propertyId}`;
  return http.deleteData(url);
};
