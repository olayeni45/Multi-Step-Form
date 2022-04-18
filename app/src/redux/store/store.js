import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../slice/step-slice";
import formReducer from "../slice/form-slice";

export const store = configureStore({
  reducer: {
    step: stepReducer,
    form: formReducer,
  },
});
