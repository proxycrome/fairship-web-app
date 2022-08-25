import HttpService from './HttpService';

export const fetchInspectionsService = (payload) => {
  const http = new HttpService();
  let url = 'auth/inspection/all?limit=100000';
  if (payload) {
    url = `auth/inspection/all?approvalStatus=${payload}&limit=100000`;
  }
  return http.getData(url);
};
export const fetchEachInspectionService = (payload) => {
  const http = new HttpService();
  let url = `auth/inspection/${payload}`;
  return http.getData(url);
};



export const postInspectionService = (formData) => {
  // console.log(formData);
  const http = new HttpService();
  const url = 'auth/inspection';
  return http.postDataWithToken(formData, url);
};
