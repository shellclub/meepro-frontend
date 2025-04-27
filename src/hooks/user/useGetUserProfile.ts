import { getUserProfileApi } from "@/app/api/user/userApi";
import { IUserProfile } from "@/types/user/userType";

import { useQuery } from "@tanstack/react-query";

const useGetUserProfile = () => {
  return useQuery<IUserProfile, Error>({
    queryKey: ["GET_USER_PROFILE"],
    queryFn: async () => await getUserProfileApi(),
  });
};
