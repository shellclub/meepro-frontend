import { useMutation } from "@tanstack/react-query";

import { userRegisterApi } from "@/app/api/user/userApi";
import { ICreateUser } from "@/types/user/userType";
import { IApiResponse } from "@/types/common";
export default function useUserRegister() {
  return useMutation({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (newPayload: ICreateUser): Promise<IApiResponse> =>
      await userRegisterApi(newPayload),
  });
}
