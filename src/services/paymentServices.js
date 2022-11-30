import HttpService from './HttpService';

export const getPaymentGatewayService = () => {
    const http = new HttpService();
    const url = "auth/payment-gateways";

    return http.getData(url);
}

export const verifyTransactionService = (transRef) => {
    const http = new HttpService();
    const url = `auth/payment-verification/${transRef}`;

    return http.postDataWithToken(null, url);
}