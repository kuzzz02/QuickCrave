import axios from 'axios';
axios.defaults.disableSSLVerification = true;
const http = axios.create({
  baseURL: 'https://8.130.37.157:12581',
  // timeout:5000,
  headers: {
    'Content-type': 'application/json'
  },
  validateStatus: false,
  // withCredentials: true
});

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error', error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  },
);
export default http;
