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

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    // 对响应数据做处理
    return response;
  },
  error => {
    console.log('error', error);
    // 对响应错误做处理
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.log(error.request);
    } else {
      // 发送请求时出了点问题
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  },
);
export default http;
