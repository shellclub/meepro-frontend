import { getProductFilterApi } from "@/app/api/product/productApi";
import {
  IProductDataFilter,
  IProductFilter,
} from "@/types/product/productType";
import { useQuery } from "@tanstack/react-query";

const useGetProductFilter = (search: IProductFilter, userType?: string) => {
  return useQuery<IProductDataFilter, Error>({
    queryKey: ["GET_PRODUCT", search],
    queryFn: async () => await getProductFilterApi(search, userType),
  });
};

export default useGetProductFilter;
