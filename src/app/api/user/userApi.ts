import {
  ICreateUser,
  ICreateUserAddress,
  ICreateUserB2B,
} from "@/types/user/userType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/user";
export const userRegisterApi = async (payload: ICreateUser) => {
  try {
    const res = await axiosServices.post(`${basePath}/register/b2c`, payload);
    return res?.data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err);
      throw err;
    } else {
      console.error(err);
      throw err;
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

export const userRegisterB2BApi = async (payload: ICreateUserB2B) => {
  try {
    const formData = new FormData();

    // Append primitive fields
    formData.append("store_name", payload.store_name);
    formData.append("first_name", payload.first_name);
    formData.append("last_name", payload.last_name);
    formData.append("email", payload.email);
    formData.append("password", payload.password);
    formData.append("confirmPassword", payload.confirmPassword);
    formData.append("role_id", String(payload.role_id));
    formData.append("customer_type_id", String(payload.customer_type_id));

    if (payload.phone) {
      formData.append("phone", payload.phone);
    }
    // Append attachments
    payload.attachment.forEach((item, index) => {
      if (item.file) {
        formData.append(`attachment[${index}].file`, item.file);
      }
      formData.append(`attachment[${index}].description`, item.description);
    });
    formData.append("address", JSON.stringify(payload.address));
    const res = await axiosServices.post(`${basePath}/register/b2b`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res?.data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err);
      throw err;
    } else {
      console.error(err);
      throw err;
    }
  }
};
