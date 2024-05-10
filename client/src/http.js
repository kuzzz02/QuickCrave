import axios from "axios";

const http = axios.create({
  baseURL:"http://localhost:8000",
  timeout:1000,
  headers: {
    "Content-type": "application/json"
  },
  // withCredentials: true
})


export default http;