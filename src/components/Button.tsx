import React from "react";

const Button: React.FC<{
  classes: string;
  children: any;
  clickFunc: any;
}> = ({ children, classes, clickFunc }) => {
  return (
    <button className={classes} onClick={clickFunc}>
      {children}
    </button>
  );
};

export default Button;
