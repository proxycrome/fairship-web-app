import HttpService from './HttpService';

export const fetchleaseServices = () => {
  const d = new Date();

  d.setDate(d.getDate() + 30);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?startDate=${d.toLocaleDateString(
    'es-CL'
  )}&endDate=${currentDate.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesSixty = () => {
  const m = new Date();

  m.setDate(m.getDate() + 60);

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 31);
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?startDate=${m.toLocaleDateString(
    'es-CL'
  )}&endDate=${currentDates.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesTwenty = () => {
  const m = new Date();

  m.setDate(m.getDate() + 61);

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 120);
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?endDate=${m.toLocaleDateString(
    'es-CL'
  )}&startDate=${currentDates.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesZero = () => {
  const m = new Date();

  m.setDate(m.getDate());

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 365);
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?endDate=${m.toLocaleDateString(
    'es-CL'
  )}&startDate=${currentDates.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchallrentServices = () => {
  const http = new HttpService();
  const api = '/auth/rent/rent-status?limit=10000';
  return http.getData(api);
};
