import { getProductApi } from "@/app/api/product/productApi";
import { IProduct, IProductSearch } from "@/types/product/productType";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = (search: IProductSearch) => {
  return useQuery<IProduct[], Error>({
    queryKey: ["GET_PRODUCT", search],
    queryFn: async () => await getProductApi(search),
  });
};

export default useGetProduct;
