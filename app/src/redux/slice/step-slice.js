import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    jumpToStep: (state, action) => {
      state.step = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, jumpToStep } = stepSlice.actions;

export default stepSlice.reducer;
