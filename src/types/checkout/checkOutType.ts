export interface ICreateOrder {
  order_item: IOrderItem[];
  payment: IPayment;
  address_id: string;
  total_amount: number;
  comment: string;
}
export interface IOrderItem {
  variant_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface IPayment {
  payment_method: string;
  amount: number;
  paid_date: string;
  paid_time: string;
  file: File;
}
