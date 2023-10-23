import axios from "axios";
import { getLocalStorage } from "@/helpers/handle-local-storage";

const api = axios.create({
  baseURL: process.env.apiHost
});

api.interceptors.request.use(async config => {
  const token = getLocalStorage('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;