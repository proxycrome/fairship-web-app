import axios from 'axios';

const checkAuthTokens = () => {
  let authTokens = localStorage.getItem('fairshipToken')
    ? localStorage.getItem('fairshipToken')
    : null;
console.log(localStorage.getItem('fairshipToken'))
  return authTokens;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: checkAuthTokens() },
});

axiosInstance.interceptors.request.use(async (req) => {
  console.log(checkAuthTokens())
  if (checkAuthTokens()) {
    req.headers.Authorization = checkAuthTokens();
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/login`;
        // try {
        //   const rs = await refreshToken();
        //   const { result } = rs.data;
        //   localStorage.setItem('fairshipToken', JSON.stringify(result));
        //   axiosInstance.defaults.headers.Authorization = `Bearer ${result?.accessToken}`;
        //   return axiosInstance(originalConfig);
        // } catch (_error) {
        //   if (_error.response && _error.response.data) {
        //     return Promise.reject(_error.response.data);
        //   }
        //   return Promise.reject(_error);
        // }
      }
    }
    return Promise.reject(error);
  }
);

// function refreshToken() {
//   return axiosInstance.post('/auth/refreshToken', {
//     refreshToken: JSON.parse(localStorage.getItem('authTokens')).refreshToken,
//   });
// }

export default axiosInstance;
