import HttpService from "./HttpService";

export const fetchCountryService = () => {
    const http = new HttpService();
    const url = 'country';
    return http.getData(url);
}

export const fetchStateService = (countryId) => {
    const http = new HttpService();
    const url = `state/${countryId}`;
    return http.getData(url);
}

export const fetchLgaService = (stateId) => {
    const http = new HttpService();
    const url = `/lga/${stateId}`;
    return http.getData(url);
}