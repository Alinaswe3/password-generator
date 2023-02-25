import React from "react";

const Slider: React.FC<{ min: string; max: string; classes: string }> = ({
  min,
  max,
  classes,
}) => {
  return <input type="range" min={min} max={max} className={classes} />;
};

export default Slider;
