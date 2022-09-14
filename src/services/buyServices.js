import HttpService from './HttpService';

export const getBuyApplicationsService = () => {
  const http = new HttpService();
  const url = 'agent/property-purchase-applications/all-purchases?size=100000';
  return http.getData(url);
};

export const getEachBuyApplicationService = (buyId) => {
  const http = new HttpService();
  const url = `auth/property-purchase-applications/details/${buyId}`;
  return http.getData(url);
};

export const reviewOfferService = (dataObj) => {
  const http = new HttpService();
  const url = 'agent/property-purchase-applications/review-offer';
  return http.putData(dataObj, url);
};

export const reviewApplicationService = (dataObj) => {
  const http = new HttpService();
  let url = 'agent/review-property-purchase-application';
  return http.postDataWithToken(dataObj, url);
};

export const reviewGuarantorService = (dataObj) => {
    const http = new HttpService();
    const url = 'auth/agent/accept-or-reject-guarantor';
    return http.putData(dataObj, url);
};