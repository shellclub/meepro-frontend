import { IProductFilter, IProductSearch } from "@/types/product/productType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/products/data";
export const getProductApi = async (
  search: IProductSearch,
  userType?: string
) => {
  try {
    let path = "";
    if (userType && userType == "B2B") {
      path = "/b2b";
    }
    const res = await axiosServices.post(`${basePath}${path}`, search);
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

export const getProductDataByIdApi = async (id: string) => {
  try {
    const res = await axiosServices.get(`${basePath}/${id}`);
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

export const getProductDataStockByListIdApi = async (id: string[]) => {
  try {
    const payload = {
      id: id,
    };
    const res = await axiosServices.post(`${basePath}/check-stock`, payload);
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

export const getProductFilterApi = async (
  search: IProductFilter,
  userType?: string
) => {
  try {
    let path = "";
    if (userType && userType == "B2B") {
      path = "/b2b";
    }
    const res = await axiosServices.post(`${basePath}/filter${path}`, search);
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
