import Heading from "./Heading";
import React from "react";

const PasswordLength: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="password__length">
      <p className="body__text">Character Length</p>
      <Heading text={value} textStyle={"heading__large make-green"} />
    </div>
  );
};

export default PasswordLength;
