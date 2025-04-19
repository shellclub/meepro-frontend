import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  steps: boolean[];
}

const initialState: CounterState = {
  steps: [true, true, true, false, false],
};

export const stepSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    markStepAsDone: (state, action: PayloadAction<number>) => {
      state.steps[action.payload] = true;
    },
  },
});

export const { markStepAsDone } = stepSlice.actions;

export default stepSlice.reducer;
