import { getUserAddressApi } from "@/app/api/user/userAddressApi";
import { IUserAddress } from "@/types/user/userType";
import { useQuery } from "@tanstack/react-query";

export const useGetUserAddress = () => {
  return useQuery<IUserAddress[], Error>({
    queryKey: ["GET_USER_ADDRESS"],
    queryFn: async () => await getUserAddressApi(),
  });
};
