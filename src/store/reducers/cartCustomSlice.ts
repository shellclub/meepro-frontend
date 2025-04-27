import { IProductCart } from "@/types/product/productType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: IProductCart[];
  orders: object[];
  isSwitchOn: boolean;
}

const initialState: CounterState = {
  items: [],
  orders: [],
  isSwitchOn:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("switch") || "false")
      : false,
};

export const cartCustomSlice = createSlice({
  name: "cartCustom",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProductCart[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<IProductCart>) {
      state.items.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartProducts", JSON.stringify(state.items));
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartProducts", JSON.stringify(state.items));
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.productQuantityCart = quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("cartProducts", JSON.stringify(state.items));
        }
      }
    },
    addOrder(state, action: PayloadAction<IProductCart>) {
      const newOrder = action.payload;
      const loginUser =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("login_user") || "{}")
          : {};
      const loginUserID = loginUser?.uid ?? "NOLOGIN";
      if (loginUserID) {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
        let userOrders = storedOrders[loginUserID] || [];
        if (newOrder) {
          userOrders = [...userOrders, newOrder];
          storedOrders[loginUserID] = userOrders;
          localStorage.setItem("orders", JSON.stringify(storedOrders));
        }
        state.orders = userOrders;
      }
    },
    setOrders(state, action: PayloadAction<any[]>) {
      state.orders = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartProducts", JSON.stringify(state.items));
      }
    },
    toggleSwitch: (state) => {
      state.isSwitchOn = !state.isSwitchOn;
      if (typeof window !== "undefined") {
        localStorage.setItem("switch", JSON.stringify(state.isSwitchOn));
      }
    },
    updateItemQuantity: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  setItems,
  addItem,
  removeItem,
  updateQuantity,
  addOrder,
  setOrders,
  clearCart,
  toggleSwitch,
  updateItemQuantity,
} = cartCustomSlice.actions;

export default cartCustomSlice.reducer;
