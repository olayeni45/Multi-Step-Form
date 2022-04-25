import { createSlice } from "@reduxjs/toolkit";

const formViews = {
  1: {
    name: "name",
    step: "Step 1/5",
    heading: "Let's start with your name",
    subheading:
      "Please fill in the details below so that we can get in contact with you about our product.",
    progress: 1,
  },
  2: {
    name: "describe",
    step: "Step 2/5",
    heading: "What best describes you?",
    subheading: "Please let us know what type of business describes you.",
    progress: 2,
  },
  3: {
    name: "services",
    step: "Step 3/5",
    heading: "What services are you looking for?",
    subheading: "Please let us know what type of business describes you.",
    progress: 3,
  },
  4: {
    name: "budget",
    step: "Step 4/5",
    heading: "Please select your budget.",
    subheading: "Please let us know the budget for your project.",
    progress: 4,
  },
  5: {
    name: "email",
    step: "Step 5/5",
    heading: "Complete submission",
    subheading:
      "Thanks for taking the time to complete this form. Please enter your email below and we will be in contact within 24 hours.",
    progress: 5,
  },
};

const formData = {
  name: "",
  description: "",
  services: "",
  budget: 12500,
  email: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState: {
    view: formViews[1],
    data: formData,
  },
  reducers: {
    nextStep: (state, action) => {
      state.data = action.payload;
      state.view = formViews[(state.view.progress += 1)];
    },
    prevStep: (state, action) => {
      state.view = formViews[(state.view.progress -= 1)];
    },
    jumpToView: (state, action) => {
      state.view = formViews[(state.view.progress = action.payload)];
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, jumpToView } = formSlice.actions;

export default formSlice.reducer;
