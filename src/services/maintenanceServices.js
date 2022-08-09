import HttpService from './HttpService';

export const getAllServicesServer = () => {
  const http = new HttpService();
  const url = 'auth/booked-services/property-owner-or-agent';
  return http.getData(url);
};

export const getServiceTypesService = () => {
    const http = new HttpService();
    const url = 'auth/service-types?status=ACTIVE';
    return http.getData(url);
}

export const postMaintenanceReqService = (formData) => {
  const http = new HttpService();
  const url = 'auth/property-owner-or-agent/create-maintenance';
  return http.postDataWithToken(formData, url);
}

export const getMaintenanceReqService = () => {
  const http = new HttpService();
  const url = '/auth/property-maintenance/property-owner-or-agent';
  return http.getData(url);
}

export const fetchServiceServer = (bookedServiceId, requestType) => {
  const http = new HttpService();
  const url = `auth/booked-services-/${bookedServiceId}?requestType=${requestType}`;
  return http.getData(url);
}

export const fetchMaintenanceService = (id) => {
  const http = new HttpService();
  const url = `auth/property-maintenance/${id}`;
  return http.getData(url);
}

export const getServiceProvidersService = (serviceName) => {
  const http = new HttpService();
  const url = `auth/auth/service-providers?limit=100000&serviceType=${serviceName}`;
  return http.getData(url);
}