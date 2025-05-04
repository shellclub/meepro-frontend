import { ICreateOrder } from "@/types/checkout/checkOutType";
import axiosServices, { isAxiosError } from "@/utility/axios";

const basePath = "/order/data";
export const createOrderApi = async (payload: ICreateOrder) => {
  try {
    const formData = new FormData();
    payload.order_item.forEach((item, index) => {
      formData.append(`order_item[${index}][variant_id]`, item.variant_id);
      formData.append(
        `order_item[${index}][quantity]`,
        item.quantity.toString()
      );
      formData.append(
        `order_item[${index}][unit_price]`,
        item.unit_price !== null && item.unit_price !== undefined
          ? `${item.unit_price}`
          : "0"
      );
      formData.append(
        `order_item[${index}][total_price]`,
        item.total_price.toString()
      );
    });

    // Append the payment details
    formData.append("payment[payment_method]", payload.payment.payment_method);
    formData.append("payment[amount]", payload.payment.amount.toString());
    formData.append("payment[paid_date]", payload.payment.paid_date);
    formData.append("payment[paid_time]", payload.payment.paid_time);

    // Append the address ID
    formData.append("address_id", payload.address_id);
    formData.append("total_amount", `${payload.total_amount}`);

    // Append the file if it exists
    if (payload.payment.file) {
      formData.append("file", payload.payment.file);
    }

    const res = await axiosServices.post(`${basePath}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
export const getOrderApi = async () => {
  try {
    const res = await axiosServices.get(`${basePath}/user`);
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

export const getOrderByIdApi = async (id: string) => {
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
