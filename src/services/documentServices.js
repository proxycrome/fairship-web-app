import HttpService from "./HttpService";

export const fetchDocumentsService = () => {
    const http = new HttpService();
    const url = 'auth/property-documents/property-owner-or-agent';
    return http.getData(url);
}