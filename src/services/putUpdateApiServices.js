import HttpService from './HttpService';

export const putUpdateApi = (formSent) => {
  const http = new HttpService();
  const initialurl = '/auth/users';
  return http.putData(formSent, initialurl);
};
