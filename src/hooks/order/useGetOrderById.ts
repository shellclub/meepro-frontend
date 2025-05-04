import { getOrderByIdApi } from "@/app/api/order/orderApi";
import { IOrder } from "@/types/order/orderType";
import { useQuery } from "@tanstack/react-query";

const useGetOrderById = (id: string) => {
  return useQuery<IOrder, Error>({
    queryKey: ["GET_ORDER_BY_ID", id],
    queryFn: async () => await getOrderByIdApi(id),
  });
};

export default useGetOrderById;
