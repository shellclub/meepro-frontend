import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/advert";
export const getAdvertApi = async () => {
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
