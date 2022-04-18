import React from "react";

const Button = (props) => {
  const { text, type, onClick } = props;
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className="bg-green-500 text-white py-3 px-7 rounded-full"
    >
      {text}
    </button>
  );
};

export default Button;
