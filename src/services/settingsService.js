import HttpService from './HttpService';



export const postNewPasswordService = (formData) =>{
    const http = new HttpService();
    const url = "auth/users/change-password";

    return http.postDataWithToken(formData, url);
}

export const reviewUserService = (formData) =>{
    const http = new HttpService();
    const url = "auth/users/reviews";

    return http.postDataWithToken(formData, url);
}