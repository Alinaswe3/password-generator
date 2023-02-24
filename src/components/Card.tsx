import React from "react";

const Card: React.FC<{ children: any }> = ({children}) => {
  return <div className="card">{children}</div>;

};

export default Card;
