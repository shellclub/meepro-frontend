import { ICreateUserAddress } from "@/types/user/userType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/user/address";

export const getUserAddressApi = async () => {
  try {
    const res = await axiosServices.get(`${basePath}`);
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

export const createAddressApi = async (payload: ICreateUserAddress) => {
  try {
    const res = await axiosServices.post(`${basePath}`, payload);
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
