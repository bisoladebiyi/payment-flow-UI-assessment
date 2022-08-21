import React from "react";
import "../../styles/Button.module.scss"

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
