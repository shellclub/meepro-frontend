import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  oldPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  newPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

export interface CounterState {
  items: Item[];
  orders: object[];
  isSwitchOn: boolean;
}

const defaultItems: Item[] = [
  {
    id: 1,
    title: "Women's wallet Hand Purse",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    newPrice: 50.0,
    oldPrice: 70.0,
    date: "",
    rating: 3,
    status: "Available",
    waight: "1 pcs",
    location: "in Store",
    brand: "Darsh Mart",
    sku: 12332,
    category: "",
    quantity: 1,
  },
  {
    id: 2,
    title: "Rose Gold Earring",
    date: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    rating: 4,
    newPrice: 60.0,
    oldPrice: 80.0,
    status: "Out Of Stock",
    waight: "200g Pack",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 64532,
    category: "",
    quantity: 1,
  },
  {
    id: 161,
    title: "Apple",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
    newPrice: 10.0,
    oldPrice: 12.0,
    date: "",
    waight: "5 pcs",
    rating: 2,
    status: "Available",
    location: "in Store, Online",
    brand: "Peoples Store",
    sku: 23445,
    category: "",
    quantity: 1,
  },
];

const defaultOrders: object[] = [
  {
    orderId: "65820",
    date: "2024-08-23T06:45:41.989Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 194.4,
    status: "Completed",
    products: [
      {
        id: 1,
        title: "Women's wallet Hand Purse",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
        newPrice: 50,
        oldPrice: 70,
        date: "",
        rating: 3,
        status: "Available",
        waight: "1 pcs",
        location: "in Store",
        brand: "Darsh Mart",
        sku: 12332,
        category: "",
        quantity: 1,
      },
      {
        id: 2,
        title: "Rose Gold Earring",
        date: "",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
        rating: 4,
        newPrice: 60,
        oldPrice: 80,
        status: "Out Of Stock",
        waight: "200g Pack",
        location: "Online",
        brand: "Bhisma Organice",
        sku: 64532,
        category: "",
        quantity: 1,
      },
      {
        id: 3,
        title: "Apple",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/21_1.jpg",
        newPrice: 10,
        oldPrice: 12,
        date: "",
        waight: "5 pcs",
        rating: 2,
        status: "Available",
        location: "in Store, Online",
        brand: "Peoples Store",
        sku: 23445,
        category: "",
        quantity: 1,
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "John",
      lastName: "Smith",
      address: "    My Street, Big town BG23 4YZ",
      city: "Shaghat",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "Armenia",
      stateName: "Syunik Province",
    },
  },
  {
    orderId: "31264",
    date: "2024-08-23T07:00:36.339Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 181.2,
    status: "Completed",
    products: [
      {
        title: "Multi Grain Combo Cookies",
        sale: "Sale",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
        category: "Cookies",
        waight: "10 kg",
        newPrice: 25,
        oldPrice: 30,
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23122,
        id: 52,
        quantity: 1,
        rating: 3,
        status: "Available",
      },
      {
        title: "Fresh Mango juice pack",
        sale: "",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
        category: "Foods",
        newPrice: 46,
        oldPrice: 65,
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23122,
        id: 53,
        quantity: 1,
        waight: "",
        rating: 2,
        status: "Available",
      },
      {
        title: "Mixed Nuts Berries Pack",
        sale: "Sale",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_2.jpg",
        category: "Dried Fruits",
        newPrice: 45,
        oldPrice: 56,
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23122,
        id: 51,
        quantity: 1,
        waight: "",
        rating: 4,
        status: "Available",
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "John",
      lastName: "Smith",
      address: "    My Street, Big town BG23 4YZ",
      city: "Shaghat",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "Armenia",
      stateName: "Syunik Province",
    },
  },
  {
    orderId: "47394",
    date: "2024-08-23T07:01:13.747Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 106.8,
    status: "Pending",
    products: [
      {
        title: "Fresh Organic Ginger Pack",
        sale: "",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/17_1.jpg",
        category: "Tuber root",
        newPrice: 2,
        oldPrice: 3,
        href: "",
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23456,
        id: 58,
        quantity: 1,
        waight: "100 g",
        rating: 2,
        status: "Available",
      },
      {
        title: "Natural Hub Cherry Karonda",
        sale: "New",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_2.jpg",
        category: "Foods",
        newPrice: 49,
        oldPrice: 65,
        href: "",
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23456,
        id: 56,
        quantity: 1,
        waight: "1 kg",
        rating: 4,
        status: "Available",
      },
      {
        title: "Fresh Mango juice pack",
        sale: "",
        image:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
        imageTwo:
          process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/25_1.jpg",
        category: "Fresh Fruit ",
        newPrice: 20,
        oldPrice: 21,
        href: "",
        location: "Online",
        brand: "Bhisma Organice",
        sku: 23456,
        id: 53,
        quantity: 1,
        waight: "",
        rating: 3,
        status: "Available",
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "John",
      lastName: "Smith",
      address: "    My Street, Big town BG23 4YZ",
      city: "Shaghat",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "Armenia",
      stateName: "Syunik Province",
    },
  },
];

const initialState: CounterState = {
  items: defaultItems,
  orders: defaultOrders,
  isSwitchOn:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("switch") || "false")
      : false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("products", JSON.stringify(state.items));
        }
      }
    },
    addOrder(state, action: PayloadAction<any>) {
      const newOrder = action.payload;
      const loginUser =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("login_user") || "{}")
          : {};
      const loginUserID = loginUser?.uid ?? "NOLOGIN";
      if (loginUserID) {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
        let userOrders = storedOrders[loginUserID] || defaultOrders;

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
        localStorage.setItem("products", JSON.stringify(state.items));
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
} = cartSlice.actions;

export default cartSlice.reducer;
