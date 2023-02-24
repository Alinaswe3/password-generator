import React from "react";

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="heading">{text}</h1>;
};

export default Heading;
