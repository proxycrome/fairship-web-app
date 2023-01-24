import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';
import domain from '../domain';
// import { getAccessToken, verifyToken } from '../utils/utilities';

class HttpService {
  constructor() {
    this.baseUrl = `${domain}`;
  }

  postData = async (payload, url) => {
    return axios.post(this.baseUrl + url, payload);
  };

  postDataWithToken = async (formData, url) => {
    return axiosInstance.post(url, formData);
  };

  getData = async (url) => {
    return axiosInstance.get(url);
  };

  getDataWithoutToken = async (url) => {
    return axiosInstance.get(url);
  };

  putData = async (formData, url) => {
    return axiosInstance.put(url, formData);
  };

  putDataWithoutToken = async (formData, url) => {
    return axiosInstance.put(url, formData);
  };

  deleteData = async (url) => {
    return axiosInstance.delete(url);
  };
}
export default HttpService;
