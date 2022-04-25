import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slice/form-slice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
