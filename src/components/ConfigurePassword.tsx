import React, { useContext, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Slider from "./Slider";
import PasswordLength from "./PasswordLength";
import PasswordOptions from "./PasswordOptions";
import StrengthBar from "./StrengthBar";
import Button from "./Button";
import { PasswordContext } from "../App";

const ConfigurePassword = () => {
  const context = useContext(PasswordContext);

  const [isLoading, setIsLoading] = useState(false);
  const [charLength, setCharLength] = useState(8);

  const generatePassword = async () => {
    const { includeUpper, includeLower, includeNumber, includeSymbol } =
      context.state;
    const setState = context.setState;

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

    setIsLoading(false);
  };

  const requestPassword = async (
    passwordLength: number = 8,
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
      <Slider min="8" max="32" classes="slider" updateVal={getSlideVal} />
      <PasswordOptions />
      <StrengthBar strengthValue={4} />
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
