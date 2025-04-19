"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./index";
import React from "react";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;
