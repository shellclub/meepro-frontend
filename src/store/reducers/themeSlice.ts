import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
  mode: "light" | "dark";
  direction: "LTR" | "RTL";
}

const getInitialState = (): ThemeState => {
  if (typeof window !== "undefined") {
    return {
      theme: localStorage.getItem("theme") || "color-primary",
      mode: (localStorage.getItem("mode") as "light" | "dark") || "light",
      direction: (localStorage.getItem("direction") as "LTR" | "RTL") || "LTR",
    };
  }
  return { theme: "color-primary", mode: "light", direction: "LTR" };
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: getInitialState(),
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") localStorage.setItem("theme", action.payload);
    },
    setDirection: (state, action: PayloadAction<"LTR" | "RTL">) => {
      state.direction = action.payload;
      if (typeof window !== "undefined") localStorage.setItem("direction", action.payload);
    },
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") localStorage.setItem("mode", state.mode);
    },
  },
});

export const { setTheme, toggleMode, setDirection } = themeSlice.actions;
export default themeSlice.reducer;
