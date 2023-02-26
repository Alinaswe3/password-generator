import React from "react";

const Button: React.FC<{
  classes: string;
  children: any;
}> = ({ children, classes }) => {
  return <button className={classes}>{children}</button>;
};

export default Button;
