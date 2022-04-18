import React from "react";
import { prevStep } from "../../redux/slice/step-slice";
import { useDispatch } from "react-redux";

const Back = () => {
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

export default Back;
