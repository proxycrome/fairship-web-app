
import HttpService from './HttpService';

export const fetchAgentService = () => {
  const http = new HttpService();
  const url = 'auth/users/all';
  return http.getData(url);
};