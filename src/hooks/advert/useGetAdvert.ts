import { getAdvertApi } from "@/app/api/advert/advertApi";
import { IAdvertGroupedData } from "@/types/advert/advertType";
import { useQuery } from "@tanstack/react-query";

const useGetAdvert = () => {
  return useQuery<IAdvertGroupedData, Error>({
    queryKey: ["GET_ADVERT"],
    queryFn: async () => await getAdvertApi(),
  });
};

export default useGetAdvert;
