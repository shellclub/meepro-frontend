import { updateAddressByIdApi } from "@/app/api/user/userAddressApi";
import { IApiResponse } from "@/types/common";
import { ICreateUserAddress } from "@/types/user/userType";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateAddressById() {
  return useMutation({
    mutationKey: ["UPDATE_ADDRESS_BY_ID"],
    mutationFn: async ({
      id,
      newPayload,
    }: {
      id: string;
      newPayload: ICreateUserAddress;
    }): Promise<IApiResponse> => await updateAddressByIdApi(id, newPayload),
  });
}
