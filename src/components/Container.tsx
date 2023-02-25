import React from "react";
import Heading from "./Heading";

const Container: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="container">
      <Heading
        text="Password Generator"
        textStyle="heading__large-grey center-in-grid-horizontal"
      />
      {children}
    </div>
  );
};

export default Container;
