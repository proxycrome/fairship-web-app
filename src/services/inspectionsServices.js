import HttpService from './HttpService';

export const fetchInspectionsService = (payload) => {
  const http = new HttpService();
  let url = 'auth/inspection/all';
  if (payload) {
    url = `auth/inspection/all?approvalStatus=${payload}`;
  }
  return http.getData(url);
};

export const postInspectionService = (formData) => {
  console.log(formData);
  const http = new HttpService();
  const url = 'auth/inspection';
  return http.postDataWithToken(formData, url);
};
