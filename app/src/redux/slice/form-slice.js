import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  describes: "",
  services: "",
  budget: 0,
  email: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { type, data } = action.payload;
      state[type] = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
