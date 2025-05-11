import { useMutation } from "@tanstack/react-query";

import { userRegisterB2BApi } from "@/app/api/user/userApi";
import { ICreateUserB2B } from "@/types/user/userType";
import { IApiResponse } from "@/types/common";
export default function useUserRegisterB2B() {
  return useMutation({
    mutationKey: ["USER_REGISTER_B2B"],
    mutationFn: async (newPayload: ICreateUserB2B): Promise<IApiResponse> =>
      await userRegisterB2BApi(newPayload),
  });
}
