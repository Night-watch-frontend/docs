import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `OAuth ${import.meta.env.VITE_TOKEN}`,
  },
};

export const $api = axios.create(axiosConfig);

$api.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error.response)
);

$api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
