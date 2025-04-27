import { useMutation } from "@tanstack/react-query";

import { createAddressApi } from "@/app/api/user/userAddressApi";
import { IApiResponse } from "@/types/common";
import { ICreateUserAddress } from "@/types/user/userType";

export default function useCreateAddress() {
  return useMutation({
    mutationKey: ["CRATE_ADDRESS"],
    mutationFn: async (newPayload: ICreateUserAddress): Promise<IApiResponse> =>
      await createAddressApi(newPayload),
  });
}
