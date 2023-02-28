import React, { useState } from "react";
import { MIN_PASSWORD_LENGTH } from "../utils/constants";

const Slider: React.FC<{
  min: number;
  max: number;
  classes: string;
  updateVal: any;
}> = ({ min, max, classes, updateVal }) => {
  const [slideValue, setSlideValue] = useState(MIN_PASSWORD_LENGTH);

  const moveSlide = (event: any) => {
    const target = event.target;

    const min = target.min;
    const max = target.max;
    const value: any = target.value;

    setSlideValue(value);

    target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "% 100%";

    updateVal(event);
  };
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={slideValue}
      className={classes}
      onChange={moveSlide}
    />
  );
};

export default Slider;
