import React from "react";

const Container: React.FC<{ children: any }> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
