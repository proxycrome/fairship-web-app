import HttpService from './HttpService';

export const fetchBanksService = () => {
    const http = new HttpService();
    const url = "banks";
    return http.getData(url);
}

export const postAccountService = (formData) => {
    const http = new HttpService();
    const url = "auth/account-details/create";
    return http.postDataWithToken(formData, url);
}

export const getAccountsService = () => {
    const http = new HttpService();
    const url = "auth/account-details/property-owner-or-agent-details";
    return http.getData(url);
}

export const getTransactionsService = () => {
    const http = new HttpService();
    const url = "auth/transactions/property-owner-or-agent-transactions";
    return http.getData(url);
}

export const postTransactionService = (formData) => {
    const http = new HttpService();
    const url = "/auth/transactions/create";
    return http.postDataWithToken(formData, url);
}

export const deleteAccountService = (accountId) => {
    const http = new HttpService();
    let url = `auth/account-details/${accountId}`;
    return http.deleteData(url);
  };