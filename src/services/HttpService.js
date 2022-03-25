import axios from 'axios';
// import { getAccessToken, verifyToken } from '../utils/utilities';

class HttpService {
  constructor() {
    this.token = localStorage.getItem('fairshipToken');
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }

  postData = async (payload, url) => {
    return axios.post(this.baseUrl + url, payload);
  };

  postDataWithToken = async (formData, url) => {
    return axios.post(this.baseUrl + url, formData, {
      headers: { Authorization: this.token },
    });
  };

  getData = async (url) => {
    return axios.get(this.baseUrl + url, {
      headers: { Authorization: this.token },
    });
  };

  getDataWithoutToken = async (url) => {
    return axios.get(this.baseUrl + url).then((res) => res);
  };

  putData = async (formData, url) => {
    return axios.put(this.baseUrl + url, formData, {
      headers: { Authorization: this.token },
    });
  };

  putDataWithoutToken = async (formData, url) => {
    return axios.put(this.baseUrl + url, formData);
  };

  deleteData = async (url) => {
    return axios.delete(this.baseUrl + url, {
      headers: { Authorization: this.token },
    });
  };
}
export default HttpService;
