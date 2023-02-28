import React, { useEffect, useState } from "react";
import {
  COLOR_GREEN,
  COLOR_ORANGE,
  COLOR_RED,
  COLOR_VERY_DARK_GREY,
  COLOR_WHITE,
  COLOR_YELLOW,
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
} from "../utils/constants";

const StrengthBar: React.FC<{
  strengthValue: number;
}> = ({ strengthValue }) => {
  const [name, setName] = useState("too weak!");

  const lightBars = (value: number) => {
    let strengthColor = COLOR_RED;

    if (value > 4 || value < 1) return;

    for (let x = 1; x <= 4; x++) {
      const element: any = document.querySelector(`.strength__level-${x}`);
      element.style.backgroundColor = COLOR_VERY_DARK_GREY;
      element.style.border = `0.2rem solid ${COLOR_WHITE}`;
    }

    if (value === 1) {
      strengthColor = COLOR_RED;
      setName(LEVEL_1);
    } else if (value === 2) {
      strengthColor = COLOR_ORANGE;
      setName(LEVEL_2);
    } else if (value === 3) {
      strengthColor = COLOR_YELLOW;
      setName(LEVEL_3);
    } else if (value === 4) {
      strengthColor = COLOR_GREEN;
      setName(LEVEL_4);
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
