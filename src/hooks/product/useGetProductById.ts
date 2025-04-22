import { getProductDataByIdApi } from "@/app/api/product/productApi";
import { IProductById } from "@/types/product/productType";
import { useQuery } from "@tanstack/react-query";

const useGetProductById = (id: string) => {
  return useQuery<IProductById, Error>({
    queryKey: ["GET_PRODUCT_BY_ID", id],
    queryFn: async () => {
      if (!id) return null; // Return null or some default data
      return await getProductDataByIdApi(id);
    },
    enabled: !!id,
  });
};

export default useGetProductById;
