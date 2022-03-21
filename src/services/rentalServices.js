import HttpService from './HttpService';

export const fetchRentalService = () => {
  const http = new HttpService();
  const url = 'auth/rent-applications';
  return http.getData(url);
};

export const fetchRentalRecommendation = ({rentalId}) =>{
  const http = new HttpService();
  const initialurl = 'auth/rent-applications/';
  const id = `${rentalId}`;
  const url = initialurl + id;
  return http.getData(url);
}


export const PutTenantRecommendation = (rentalId, data) => {
  const http = new HttpService();
  const initialurl = 'auth/rent-applications/tenant-recommendation-form/';
  const id = `${rentalId}`;
  const url = initialurl + id;
  return http.putData(data, url);
}

