import { useState, useContext, useEffect } from "react";
import Checkbox from "./Checkbox";
import { PasswordContext } from "../App";

const PasswordOptions = () => {
  const { state, setState } = useContext(PasswordContext);

  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  useEffect(() => {
    if (setState)
      setState({
        ...state,
        includeNumber: includeNumbers,
        includeLower: isLowercase,
        includeUpper: isUppercase,
        includeSymbol: includeSymbols,
      });
  }, [isLowercase, isUppercase, includeSymbols, includeNumbers]);

  return (
    <div className="password__options">
      <Checkbox
        text={"Include Uppercase Letters"}
        id={"iul"}
        setter={setIsUppercase}
      />
      <Checkbox
        text={"Include Lowercase Letters"}
        id={"ill"}
        setter={setIsLowercase}
      />
      <Checkbox text={"Include Numbers"} id={"in"} setter={setIncludeNumbers} />
      <Checkbox text={"Include Symbols"} id={"is"} setter={setIncludeSymbols} />
    </div>
  );
};

export default PasswordOptions;
