import HttpService from './HttpService';

export const fetchleaseServices = () => {
  const d = new Date();

  d.setDate(d.getDate() + 30);
  // console.log(d.toLocaleDateString('es-CL'))

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  // console.log(currentDate.toLocaleDateString('es-CL'))
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?startDate=${d.toLocaleDateString(
    'es-CL'
  )}&endDate=${currentDate.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesSixty = () => {
  const m = new Date();

  m.setDate(m.getDate() + 60);
  // console.log(m.toLocaleDateString('es-CL'))

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 31);
  // console.log(currentDates.toLocaleDateString('es-CL'))
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?startDate=${m.toLocaleDateString(
    'es-CL'
  )}&endDate=${currentDates.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesTwenty = () => {
  const m = new Date();

  m.setDate(m.getDate() + 61);
  // console.log(m.toLocaleDateString('es-CL'))

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 120);
  // console.log(currentDates.toLocaleDateString('es-CL'))
  const http = new HttpService();
  const url = `/auth/expiring-lease/date-range?endDate=${m.toLocaleDateString(
    'es-CL'
  )}&startDate=${currentDates.toLocaleDateString('es-CL')}`;
  return http.getData(url);
};

export const fetchleaseServicesZero = () => {
  const m = new Date();

  m.setDate(m.getDate());
  // console.log(m.toLocaleDateString('es-CL'))

  const currentDates = new Date();
  currentDates.setDate(currentDates.getDate() + 365);
  // console.log(currentDates.toLocaleDateString('es-CL'))
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
