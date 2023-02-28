import React from "react";

const Checkbox: React.FC<{ text: string; id: string; setter: any }> = ({
  text,
  id,
  setter,
}) => {
  const inverter: any = () => {
    setter((curState: boolean) => !curState);
  };

  return (
    <div className="checkbox__container">
      <input type="checkbox" id={id} onChange={inverter} />
      <label className="body__text" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
