import HttpService from './HttpService';

export const fetchInspectionsService = () => {
  const http = new HttpService();
  const url = 'auth/inspection/all ';
  return http.getData(url);
};

export const postInspectionService = (formData) => {
  const http = new HttpService();
  const url = 'auth/inspection';
  return http.postDataWithToken(formData, url);
}