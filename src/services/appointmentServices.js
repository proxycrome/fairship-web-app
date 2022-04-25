import HttpService from './HttpService';

export const fetchAppointmentService = () => {
  const http = new HttpService();
  const url = 'auth/appointment-booking?includeExpiredAppointments=true';
  return http.getData(url);
};

export const putAcceptAppointmentService = (payload) => {
  const http = new HttpService();
  const url = 'auth/appointment-booking/review';
  return http.putData(payload, url);
}

export const putRejectAppointmentService = (payload) => {
  const http = new HttpService();
  const url = 'auth/appointment-booking/review';
  return http.putData(payload, url);
}