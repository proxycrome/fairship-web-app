import HttpService from './HttpService';

export const fetchRentalService = (payload) => {
  const http = new HttpService();
  let url = 'auth/rent-applications';
  if(payload){
    url = `auth/rent-applications?filter=${payload}&limit=100000`
  }
  return http.getData(url);
};

// export const fetchRentalService2 = () => {
//   const http = new HttpService();
//   const url = 'auth/rent-applications';
//   return http.getData(url);
// };

// export const fetchRentalService3 = () => {
//   const http = new HttpService();
//   const url = 'auth/rent-applications?filter=EXITED';
//   return http.getData(url);
// };


export const fetchRentalRecommendation = (rentalId) =>{
  const http = new HttpService();
  const initialurl = `auth/rent-applications/details/${rentalId}`;
  return http.getData(initialurl);
}



export const PutTenantRecommendationService = (tenantId, data) => {
  const http = new HttpService();
  const initialurl = `auth/rent-applications/tenant-recommendation-form/${tenantId}`;
  return http.putData(data, initialurl);
}


export const PutDataTenantRecommendationService = (data) => {
  const http = new HttpService();
  const initialurl = 'auth/review-rent-application';
  return http.postDataWithToken(data, initialurl);
}


export const DiligenceRecommendationService = (data) => {
  const http = new HttpService();
  // const initialurl = `auth/rent-applications/due-diligence-form/${tenantId}`;
  const initialurl = 'auth/rent-applications/move-tenant-in';
  return http.postDataWithToken(data, initialurl);
}
