import { IProductSearch } from "@/types/product/productType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/products/data";
export const getProductApi = async (search: IProductSearch) => {
  try {
    const res = await axiosServices.post(`${basePath}`, search);
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
