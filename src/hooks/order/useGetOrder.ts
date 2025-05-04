import { getOrderApi } from "@/app/api/order/orderApi";
import { IOrder } from "@/types/order/orderType";
import { useQuery } from "@tanstack/react-query";

const useGetOrder = () => {
  return useQuery<IOrder[], Error>({
    queryKey: ["GET_ORDER"],
    queryFn: async () => await getOrderApi(),
  });
};

export default useGetOrder;
