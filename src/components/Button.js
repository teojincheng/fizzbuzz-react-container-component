import React from "react";

const Button = ({ onClickFunction, children, className }) => {
  return (
    <button className={className} onClick={onClickFunction}>
      {children}
    </button>
  );
};

export default Button;
