import HttpService from './HttpService';

export const LoginService = (payload) => {
  const http = new HttpService();
  const url = 'login';
  console.log(payload)
  return http.postData(payload, url);
};

export const loadUserServer = () => {
  const http = new HttpService();
  const url = 'auth/users';
  return http.getData(url);
};

export const RegisterService = (payload) => {
  console.log(payload);
  const http = new HttpService();
  const url = 'user';
  return http.postData(payload, url);
};

export const ActivateServices = (id) => {
  let payload = {
    id: id,
  };
  const http = new HttpService();
  const url = 'user/activate';
  return http.putData(payload, url);
};

export const ForgetPasswordServices = (payload) => {
  console.log(payload)
  const http = new HttpService();
  const url = 'user/forgotPassword';
  return http.postData(payload, url);
};

export const createNewPasswordServices = (payload) => {
  console.log(payload)
  const http = new HttpService();
  const url = 'user/setNewPassword';
  return http.postData(payload, url);
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
