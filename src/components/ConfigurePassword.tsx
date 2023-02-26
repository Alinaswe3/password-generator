import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Slider from "./Slider";
import PasswordLength from "./PasswordLength";
import PasswordOptions from "./PasswordOptions";
import StrengthBar from "./StrengthBar";
import Button from "./Button";

const ConfigurePassword = () => {
  return (
    <div className="configure-password">
      <PasswordLength value={"10"} />
      <Slider min="8" max="32" classes="slider" />
      <PasswordOptions />
      <StrengthBar strengthValue={4} />
      <Button classes="button__generate">
        generate <HiArrowRight size={"2rem"} />
      </Button>
    </div>
  );
};

export default ConfigurePassword;
