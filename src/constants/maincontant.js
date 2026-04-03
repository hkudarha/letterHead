import axios from "axios";
import store from "../redux/store";
import { logout } from "../redux/slice/authSlice";
import logo from "../assets/logo.png";

export const mainContant = {
  appName: "ZMT Star",
  appURL: "",
  logo: logo,
  contactNo: "+91 8962813397",
  email: "hkudarha@gmail.com",
  address:
    "Noida Sector 62, Gautam Buddha Nagar, Uttar Pradesh, India - 201309",

  telegram_link: "https://t.me/YourTelegramUsername",
  instagram_link: "https://www.instagram.com/YourInstagramUsername",
  facebook_link: "https://www.facebook.com/YourFacebookUsername",
  twitter_link: "https://twitter.com/YourTwitterUsername",
  linkedin_link: "https://www.linkedin.com/in/YourLinkedinUsername",
  youtube_link: "https://www.youtube.com/channel/YourYoutubeChannelID",
};

export const backendConfig = {
  // base: "http://192.168.29.89:5069/api",
  // origin: "http://192.168.29.89:5069",

  base: "https://api.zmt.starchainlabs.online/api",
  origin: "https://api.zmt.starchainlabs.online",
};
 
export const Axios = axios.create({
  baseURL: backendConfig.base,
});

Axios.interceptors.request.use(
  (config) => {
    const state = store.getState();

    const token =
      state?.auth?.token ||
      state?.auth?.user?.token ||
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);


Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(logout());

      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");

      Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "Your session has expired. Please login again.",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/login";
      });
    }

    return Promise.reject(error);
  },
);
