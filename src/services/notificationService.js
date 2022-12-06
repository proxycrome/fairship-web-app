import HttpService from './HttpService';

export const getAllNotificationsService = () => {
    const http = new HttpService();
    const url = "notification";

    return http.getData(url);
}