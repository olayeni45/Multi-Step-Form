import React from "react";

const Button = (props) => {
  const { text, type, onClick, disabled } = props;
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || false}
      className={`${
        disabled && "disabled:opacity-40"
      } bg-green-500 text-white py-3 px-7 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
