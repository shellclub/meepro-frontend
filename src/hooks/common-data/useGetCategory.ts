import { getCategoryApi } from "@/app/api/common-data/commonDataApi";
import { ICommonCategory } from "@/types/common-data/commonDataType";
import { useQuery } from "@tanstack/react-query";

const useGetCategory = () => {
  return useQuery<ICommonCategory[], Error>({
    queryKey: ["GET_CATEGORY"],
    queryFn: async () => await getCategoryApi(),
  });
};

export default useGetCategory;
