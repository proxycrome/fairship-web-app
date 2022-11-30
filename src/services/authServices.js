import HttpService from './HttpService';

export const LoginService = (payload) => {
  const http = new HttpService();
  const url = 'login';
  // console.log(payload)
  return http.postData(payload, url);
};

export const loadUserServer = () => {
  const http = new HttpService();
  const url = 'auth/users';
  return http.getData(url);
};

export const RegisterService = (payload) => {
  // console.log(payload);
  const http = new HttpService();
  const url = 'users';
  return http.postData(payload, url);
};

export const ActivateServices = (payload) => {
  const http = new HttpService();
  const url = 'users/verify-phone';
  return http.postData(payload, url);
};

export const ForgetPasswordServices = (email) => {
  // console.log(payload)
  const http = new HttpService();
  const url = `users/${email}/forgot-password`;
  return http.postData(null, url);
};

export const createNewPasswordServices = (payload) => {
  // console.log(payload)
  const http = new HttpService();
  const url = 'auth/users/change-password';
  return http.postDataWithToken(payload, url);
};

export const fetchDashboardService = () => {
  const http = new HttpService();
  const url = 'auth/dashboard-stats/agent-and-property-owner';
  return http.getData(url);
};


export const fetchProfileService = () => {
  const http = new HttpService();
  const url = 'auth/users';
  return http.getData(url);
};
