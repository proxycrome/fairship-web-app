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