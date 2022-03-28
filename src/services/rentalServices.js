import HttpService from './HttpService';

export const fetchRentalService = () => {
  const http = new HttpService();
  const url = 'auth/rent-applications';
  return http.getData(url);
};

export const fetchRentalRecommendation = (rentalId) =>{
  console.log(rentalId)
  const http = new HttpService();
  const initialurl = `auth/rent-applications/details/${rentalId}`;
  return http.getData(initialurl);
}



export const PutTenantRecommendationService = (tenantId, data) => {
  console.log(tenantId)
  const http = new HttpService();
  const initialurl = `auth/rent-applications/tenant-recommendation-form/${tenantId}`;
  return http.putData(data, initialurl);
}


export const PutDataTenantRecommendationService = (data) => {
  const http = new HttpService();
  const initialurl = 'auth/review-rent-application';
  return http.postDataWithToken(data, initialurl);
}
