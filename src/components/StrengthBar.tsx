import Heading from "./Heading";
import React, { useEffect, useState } from "react";

const StrengthBar: React.FC<{
  strengthValue: number;
}> = ({ strengthValue }) => {
  const [name, setName] = useState("too weak!");

  const colorRed = "#f64a4a";
  const colorOrange = "#fb7c58";
  const colorGreen = "#a4ffaf";
  const colorYellow = "#f8c065";
  const colorWhite = "#e6e5ea";
  const veryDark = "#18171f";

  const lightBars = (value: number) => {
    console.log("I ran");
    let strengthColor = colorRed;

    if (value > 4 || value < 1) return;

    for (let x = 1; x <= 4; x++) {
      const element: any = document.querySelector(`.strength__level-${x}`);
      element.style.backgroundColor = veryDark;
      element.style.border = `0.2rem solid ${colorWhite}`;
    }

    if (value === 1) {
      strengthColor = colorRed;
      setName("too weak!");
    } else if (value === 2) {
      strengthColor = colorYellow;
      setName("weak");
    } else if (value === 3) {
      strengthColor = colorYellow;
      setName("medium");
    } else if (value === 4) {
      strengthColor = colorGreen;
      setName("strong");
    }

    for (let x = 1; x <= value; x++) {
      const element: any = document.querySelector(`.strength__level-${x}`);
      element.style.backgroundColor = strengthColor;
      element.style.border = `0.2rem solid ${strengthColor}`;
    }
  };

  useEffect(() => {
    lightBars(strengthValue);
  }, [strengthValue]);

  return (
    <div className="strength__container">
      <p className="strength__text  body__text-grey">strength</p>
      <div className="strength__levels">
        <p className="strength__text heading__small strength__text-title">
          {name}
        </p>
        <span className="strength__level strength__level-1"></span>
        <span className="strength__level strength__level-2"></span>
        <span className="strength__level strength__level-3"></span>
        <span className="strength__level strength__level-4"></span>
      </div>
    </div>
  );
};

export default StrengthBar;
