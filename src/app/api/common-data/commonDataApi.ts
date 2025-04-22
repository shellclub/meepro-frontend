import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/common-data";
export const getCategoryApi = async () => {
  try {
    const res = await axiosServices.get(`${basePath}/category`);
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
