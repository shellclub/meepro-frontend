import { getProductApi } from "@/app/api/product/productApi";
import { IProduct, IProductSearch } from "@/types/product/productType";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = (search: IProductSearch, userType?: string) => {
  return useQuery<IProduct[], Error>({
    queryKey: ["GET_PRODUCT", search, userType],
    queryFn: async () => await getProductApi(search, userType),
  });
};

export default useGetProduct;
