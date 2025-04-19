import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "redux";

// Import slices
import cartSlice from "./reducers/cartSlice";
import registrationSlice from "./reducers/registrationSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import compareSlice from "./reducers/compareSlice";
import stepSlice from "./reducers/stepSlice";
import filterReducer from "./reducers/filterReducer";
import themeSlice from "./reducers/themeSlice";

// Configure persist for each slice separately
const persistConfigCart = { key: "cart", storage };
const persistConfigRegistration = { key: "registration", storage };
const persistConfigWishlist = { key: "wishlist", storage };
const persistConfigCompare = { key: "compare", storage };
const persistConfigStep = { key: "step", storage };
const persistConfigFilter = { key: "filter", storage };
const persistConfigTheme = { key: "theme", storage };

// Wrap each reducer with persistReducer
const persistedCartReducer = persistReducer(persistConfigCart, cartSlice);
const persistedRegistrationReducer = persistReducer(
  persistConfigRegistration,
  registrationSlice
);
const persistedWishlistReducer = persistReducer(
  persistConfigWishlist,
  wishlistSlice
);
const persistedCompareReducer = persistReducer(
  persistConfigCompare,
  compareSlice
);
const persistedStepReducer = persistReducer(persistConfigStep, stepSlice);
const persistedFilterReducer = persistReducer(
  persistConfigFilter,
  filterReducer
);
const persistedThemeReducer = persistReducer(persistConfigTheme, themeSlice);

// Combine reducers
const rootReducer = combineReducers({
  cart: persistedCartReducer,
  registration: persistedRegistrationReducer,
  wishlist: persistedWishlistReducer,
  compare: persistedCompareReducer,
  step: persistedStepReducer,
  filter: persistedFilterReducer,
  theme: persistedThemeReducer,
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persistor
export const persistor = persistStore(store);

