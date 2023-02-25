import React from "react";

const Heading: React.FC<{ text: string; textStyle: string }> = ({
  text,
  textStyle,
}) => {
  return <h1 className={textStyle}>{text}</h1>;
};

export default Heading;
