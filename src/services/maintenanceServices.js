import HttpService from './HttpService';

export const getAllServicesCompletedService = () => {
  const http = new HttpService();
  const url = 'booked-services/list?status=COMPLETED';
  return http.getData(url);
};

export const getAllServicesPendingService = () => {
    const http = new HttpService();
    const url = 'booked-services/list?status=PENDING';
    return http.getData(url);
};

export const getServiceTypesService = () => {
    const http = new HttpService();
    const url = 'auth/service-types?status=ACTIVE';
    return http.getData(url);
}

export const postMaintenanceReqService = (formData) => {
  const http = new HttpService();
  const url = 'landlord/init-maintenance';
  return http.postDataWithToken(formData, url);
}

export const getMaintenanceReqService = () => {
  const http = new HttpService();
  const url = 'landlord/maintenance-list/153?size=100';
  return http.getData(url);
}

export const fetchServiceServer = (bookedServiceId) => {
  const http = new HttpService();
  const url = `auth/booked-services-/${bookedServiceId}`;
  return http.getData(url);
}