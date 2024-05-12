import axios from "axios";

const http = axios.create({
  baseURL:"https://localhost:12581",
  // timeout:5000,
  headers: {
    "Content-type": "application/json",
    // "Accept": "application/json"
  },
  // withCredentials: true
})


export default http;