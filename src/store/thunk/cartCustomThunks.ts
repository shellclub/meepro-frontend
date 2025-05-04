// cartCustomThunks.ts
import { getProductDataStockByListIdApi } from "@/app/api/product/productApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkProductStock = createAsyncThunk(
  "cart/checkProductStock",
  async (ids: string[], thunkAPI) => {
    try {
      const data = await getProductDataStockByListIdApi(ids);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to check stock");
    }
  }
);
