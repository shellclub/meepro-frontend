import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  selectedCategory: string[];
  selectedWeight: string[];
  minPrice: number;
  maxPrice: number;
  sortOption: string;
  searchTerm: string;
  MinPrice: any;
  MaxPrice: any;
  range: { min: number; max: number };
  selectedBrands: string[];
  selectedColor: string[];
  selectedTags: string[];
}

const initialState: CounterState = {
  selectedCategory: [],
  selectedWeight: [],
  minPrice: 0,
  maxPrice: 250,
  range: { min: 0, max: 250 },
  sortOption: "",
  searchTerm: "",
  MinPrice: 0,
  MaxPrice: Infinity,
  selectedBrands: [],
  selectedColor: [],
  selectedTags: [],
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedWeight: (state, action: PayloadAction<string[]>) => {
      state.selectedWeight = action.payload;
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
    setSelectedColor: (state, action: PayloadAction<string[]>) => {
      state.selectedColor = action.payload;
    },
    setSelectedTags: (state, action: PayloadAction<string[]>) => {
      state.selectedTags = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedBrands,
  setSearchTerm,
  setSelectedColor,
  setSelectedTags,
  setSelectedWeight,
  setSortOption,
  setMaxPrice,
  setMinPrice,
  setPriceRange,
  setRange,
} = filterReducer.actions;

export default filterReducer.reducer;
