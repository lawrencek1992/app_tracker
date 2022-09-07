import axios from "axios";
import { logout } from "./axios/users/Action";

const axiosService =  axios.create({
  baseURL: "http://localhost:8000/",
  // baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    // "Accept": "application/json",
  }
});

axiosService.interceptors.response.use(function (response) {
  console.log("response in axios config: ", response);
  return response;
}, function (error) {
  if (error.response === undefined) {
      return Promise.reject(error);
  }
  if (error.response.status === 401 || error.response.status === 403) {
      logout();
  } else {
      return Promise.reject(error);
  }
});

axiosService.defaults.xsrfHeaderName = "X-CSRFToken"
axiosService.defaults.xsrfCookieName = "csrftoken"
axiosService.defaults.withCredentials = true

export default axiosService;