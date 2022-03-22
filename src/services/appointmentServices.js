import HttpService from './HttpService';

export const fetchAppointmentService = () => {
  const http = new HttpService();
  const url = 'auth/appointment-booking';
  return http.getData(url);
};

export const createAppointmentService = (paylaod) => {
  const http = new HttpService();
  const url = 'auth/appointment-booking';
  return http.postDataWithToken(paylaod,url);
};
