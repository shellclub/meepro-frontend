import { IUser } from "./../user/userType";
import { IUserAddress } from "../user/userType";

export interface IOrder {
  id?: string;
  user_id?: string;
  order_status?: string;
  total_amount?: string;
  payment_status?: string;
  created_at?: string;
  updated_at?: string;
  address_id?: string | null;
  commnet?: string | null;
  order_no?: string;
  order_item?: IOrderItem[];
  payment?: IPayment;
  order_status_dict?: IStatusDict;
  user_address?: IUserAddress;
}

export interface IOrderItem {
  id?: string;
  product_id?: string;
  title?: string;
  sale?: string;
  image?: string;
  imageTwo?: string;
  category?: string;
  unit_price?: number;
  location?: string;
  brand?: string;
  sku?: string;
  rating?: number;
  weight?: number;
  description?: string;
  option?: string;
  quantity?: number;
  total_price?: number;
}

export interface IPayment {
  payment_method?: string;
  check_slip_code?: string;
  check_slip_status?: boolean;
  check_slip_message?: string;
  paid_date?: string;
  paid_time?: string;
  amount?: number;
}

export interface IStatusDict {
  category?: string;
  key?: string;
  value?: string;
}
