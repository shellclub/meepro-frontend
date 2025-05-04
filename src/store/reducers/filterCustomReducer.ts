import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  selectedCategory: string[];
  minPrice: number;
  maxPrice: number;
  sortOption: string;
  searchTerm: string;
  MinPrice: any;
  MaxPrice: any;
  range: { min: number; max: number };
  selectedBrands: string[];
}

const initialState: CounterState = {
  selectedCategory: [],
  minPrice: 0,
  maxPrice: 10000,
  range: { min: 0, max: 10000 },
  sortOption: "",
  searchTerm: "",
  MinPrice: 0,
  MaxPrice: Infinity,
  selectedBrands: [],
};

export const filterCustomReducer = createSlice({
  name: "filterCustom",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    setRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.range = action.payload;
    },
    setSortOption: (state, action: PayloadAction<any>) => {
      state.sortOption = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setMinPrice: (state, action) => {
      state.MinPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.MaxPrice = action.payload;
    },
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedBrands,
  setSearchTerm,
  setSortOption,
  setMaxPrice,
  setMinPrice,
  setPriceRange,
  setRange,
} = filterCustomReducer.actions;

export default filterCustomReducer.reducer;
