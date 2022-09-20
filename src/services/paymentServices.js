import HttpService from './HttpService';

export const getPaymentGatewayService = () => {
    const http = new HttpService();
    const url = "auth/payment-gateways";

    return http.getData(url);
}