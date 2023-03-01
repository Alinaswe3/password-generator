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
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../utils/constants";
import { Store } from "react-notifications-component";

const ConfigurePassword = () => {
  const context = useContext(PasswordContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [charLength, setCharLength] = useState<number>(MIN_PASSWORD_LENGTH);
  const [strengthVal, setStrengthVal] = useState<number>(
    DEFAULT_STRENGTH_VALUE
  );

  const generatePassword = async () => {
    if (!navigator.onLine) {
      Store.addNotification({
        id: "no-internet",
        title: "No internet connection!",
        message: "Please connect to the internet and try again.",
        type: "danger",
        insert: "top",
        container: "top-full",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 0,
          click: true,
          showIcon: true,
        },
      });
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
      Store.addNotification({
        id: "error",
        title: "Something went wrong!",
        message:
          "An error occurred while generating password. Please try again.",
        type: "danger",
        insert: "top",
        container: "top-full",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 0,
          click: true,
          showIcon: true,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const requestPassword = async (
    passwordLength: number = MIN_PASSWORD_LENGTH,
    includeNumbers: boolean = false,
    includeSymbols: boolean = false
  ) => {
    const response = await fetch(
      `${
        // @ts-ignore
        import.meta.env.VITE_API_URL
      }?length=${passwordLength}&exclude_numbers=${!includeNumbers}&exclude_special_chars=${!includeSymbols}`,
      {
        method: "GET",
        // @ts-ignore
        headers: {
          // @ts-ignore
          "Content-Type": "application/json",
          // @ts-ignore
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      }
    );
    const { random_password: password } = await response.json();
    return password;
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
