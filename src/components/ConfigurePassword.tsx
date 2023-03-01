import React, { useContext, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { passwordStrength } from "check-password-strength";
import Slider from "./Slider";
import PasswordLength from "./PasswordLength";
import PasswordOptions from "./PasswordOptions";
import StrengthBar from "./StrengthBar";
import Button from "./Button";
import { PasswordContext } from "../App";
import {
  DEFAULT_STRENGTH_VALUE,
  ERROR_MESSAGE,
  ERROR_TITLE,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  NO_INTERNET_MESSAGE,
  NO_INTERNET_TITLE,
  TYPE_DANGER,
} from "../utils/constants";
import { popupNotification, requestPassword } from "../utils/helpers";

const ConfigurePassword = () => {
  const context = useContext(PasswordContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [charLength, setCharLength] = useState<number>(MIN_PASSWORD_LENGTH);
  const [strengthVal, setStrengthVal] = useState<number>(
    DEFAULT_STRENGTH_VALUE
  );

  const generatePassword = async () => {
    if (!navigator.onLine) {
      popupNotification(
        "no-internet",
        NO_INTERNET_TITLE,
        NO_INTERNET_MESSAGE,
        TYPE_DANGER
      );
      return;
    }

    const { includeUpper, includeLower, includeNumber, includeSymbol } =
      context?.state;
    const setState = context.setState;

    try {
      setIsLoading(true);

      let generatedPassword = await requestPassword(
        charLength,
        includeNumber,
        includeSymbol
      );

      if (includeUpper && !includeLower) {
        generatedPassword = generatedPassword.toUpperCase();
      }
      if (includeLower && !includeUpper) {
        generatedPassword = generatedPassword.toLowerCase();
      }

      setState({
        ...context.state,
        password: generatedPassword,
      });

      setStrengthVal(passwordStrength(generatedPassword).id + 1);
    } catch (e) {
      popupNotification("error", ERROR_TITLE, ERROR_MESSAGE, TYPE_DANGER);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getSlideVal = (event: any) => {
    setCharLength(event.target.value);
  };

  return (
    <div className="configure-password">
      <PasswordLength value={charLength + ""} />
      <Slider
        min={MIN_PASSWORD_LENGTH}
        max={MAX_PASSWORD_LENGTH}
        classes="slider"
        updateVal={getSlideVal}
      />
      <PasswordOptions />
      <StrengthBar strengthValue={strengthVal} />
      <Button classes="button__generate" clickFunc={generatePassword}>
        {isLoading ? (
          "generating..."
        ) : (
          <>
            generate <HiArrowRight />
          </>
        )}
      </Button>
    </div>
  );
};

export default ConfigurePassword;
