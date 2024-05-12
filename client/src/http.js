import axios from "axios";

const http = axios.create({
  baseURL:"https://10.0.2.2:12581",
  // timeout:5000,
  headers: {
    "Content-type": "application/json",
    // "Accept": "application/json"
  },
  // withCredentials: true
})


export default http;