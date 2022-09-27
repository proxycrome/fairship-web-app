import HttpService from './HttpService';

export const getLeaseTerminationsService = () => {
  const http = new HttpService();
  const url = 'auth/lease-termination-requests?limit=100000';
  return http.getData(url);
};

export const reviewLeaseTerminationService = (dataObj) => {
  const http = new HttpService();
  let url = 'auth/lease-termination-requests/review';
  return http.postDataWithToken(dataObj, url);
};

export const requestLeaseTerminationService = (dataObj) => {
  const http = new HttpService();
  let url = 'auth/lease-termination-requests';
  return http.postDataWithToken(dataObj, url);
};
