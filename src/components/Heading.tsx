import React from "react";

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="heading__high-grey">{text}</h1>;
};

export default Heading;
