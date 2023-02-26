import Checkbox from "./Checkbox";

const PasswordOptions = () => {
  return (
    <div className="password__options">
      <Checkbox text={"Include Uppercase Letters"} id={"iul"} />
      <Checkbox text={"Include Lowercase Letters"} id={"ill"} />
      <Checkbox text={"Include Numbers"} id={"in"} />
      <Checkbox text={"Include Symbols"} id={"is"} />
    </div>
  );
};

export default PasswordOptions;
