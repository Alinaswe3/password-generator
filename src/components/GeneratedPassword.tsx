import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { useContext } from "react";
import { PasswordContext } from "../App";

const GeneratedPassword = () => {
  const context = useContext(PasswordContext);
  const { password } = context.state;
  return (
    <div className="card__generate-password">
      <p className="heading__large">{password}</p>
      <button className="button__clear">
        <HiOutlineDocumentDuplicate size="2.4rem" color="#a4ffaf" />
      </button>
    </div>
  );
};

export default GeneratedPassword;
