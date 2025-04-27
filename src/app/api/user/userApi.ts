import { ICreateUser } from "@/types/user/userType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/user";
export const userRegisterApi = async (payload: ICreateUser) => {
  try {
    const res = await axiosServices.post(`${basePath}/register`, payload);
    return res?.data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err);
      throw Promise.reject(err);
    } else {
      console.error(err);
      throw Promise.reject(err);
    }
  }
};

export const getUserProfileApi = async () => {
  try {
    const res = await axiosServices.get(`${basePath}/profile`);
    return res?.data.data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err);
      throw Promise.reject(err);
    } else {
      console.error(err);
      throw Promise.reject(err);
    }
  }
};

export const getUserAllApi = async () => {
  try {
    const res = await axiosServices.get(`${basePath}/get-all`);
    return res?.data.data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err);
      throw Promise.reject(err);
    } else {
      console.error(err);
      throw Promise.reject(err);
    }
  }
};
