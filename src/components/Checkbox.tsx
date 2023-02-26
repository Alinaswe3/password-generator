import React from "react";

const Checkbox: React.FC<{ text: string; id: string }> = ({ text, id }) => {
  return (
    <div className="checkbox__container">
      <input type="checkbox" id={id} />
      <label className="body__text" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
