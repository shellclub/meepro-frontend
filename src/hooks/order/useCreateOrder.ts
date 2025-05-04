import { useMutation } from "@tanstack/react-query";
import { createOrderApi } from "@/app/api/order/orderApi";
import { ICreateOrder } from "@/types/checkout/checkOutType";
import { IApiResponse } from "@/types/common";

export default function useCreateOrder() {
  return useMutation({
    mutationKey: ["CREATE_ORDER"],
    mutationFn: async (newPayload: ICreateOrder): Promise<IApiResponse> =>
      await createOrderApi(newPayload),
  });
}
// export default function useCreateAddress() {
//   return useMutation({
//     mutationKey: ["CRATE_ADDRESS"],
//     mutationFn: async (newPayload: ICreateUserAddress): Promise<IApiResponse> =>
//       await createAddressApi(newPayload),
//   });
// }
