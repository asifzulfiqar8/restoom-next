import React from "react";

const Button = ({ text, ...rest }) => {
  return (
    <button className="bg-primary h-[50px] px-4 rounded-[10px] text-center">
      {text}
    </button>
  );
};

export default Button;
