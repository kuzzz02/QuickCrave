import axios from 'axios';

const http = axios.create({
  baseURL: 'http://10.0.2.2:12581',
  // timeout: 10000,
  headers: {
    'Content-type': 'application/json',
  },
  // withCredentials: true
});

export default http;
