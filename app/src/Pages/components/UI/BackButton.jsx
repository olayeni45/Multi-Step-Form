import React from "react";
import { prevStep } from "../../../redux/slice/form-slice";
import { useDispatch } from "react-redux";

const BackButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="text-white pr-7"
      type="button"
      onClick={() => dispatch(prevStep())}
    >
      Back
    </button>
  );
};

export default BackButton;
