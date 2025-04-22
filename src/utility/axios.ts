import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = () => typeof window === "undefined";

export interface IAxiosError extends AxiosError {}
export const isAxiosError = axios.isAxiosError;
const axiosServices = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
// interceptor for http
// axiosServices.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject((error.response && error.response.data) || "Wrong Services")
// );
axiosServices.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof window === "undefined") {
      const originalRequest = error.config;
      if (error?.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const res = error.response;
        redirect("/login");
      }
    } else {
      const originalRequest = error.config;
      if (error?.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosServices;
