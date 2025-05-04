import { getProductDataStockByListIdApi } from "@/app/api/product/productApi";
import { IProductById, IProductStock } from "@/types/product/productType";
import { useQuery } from "@tanstack/react-query";

const useGetProductStockByListId = (id: string[]) => {
  return useQuery<IProductStock, Error>({
    queryKey: ["GET_PRODUCT_STOCK_BY_LIST_ID", id],
    queryFn: async () => {
      if (!id) return null; // Return null or some default data
      return await getProductDataStockByListIdApi(id);
    },
    enabled: !!id,
  });
};

export default useGetProductStockByListId;
