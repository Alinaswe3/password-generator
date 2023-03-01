import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import React, { useContext, useEffect, useState } from "react";
import { PasswordContext } from "../App";
import {
  DEFAULT_PASSWORD,
  NO_PASSWORD_MESSAGE,
  NO_PASSWORD_TITLE,
  TYPE_WARN,
} from "../utils/constants";
import { popupNotification } from "../utils/helpers";

const GeneratedPassword = () => {
  const context = useContext(PasswordContext);

  const [btnColor, setBtnColor] = useState<string>("#a4ffaf");
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);
  const [isPasswordCopied, setIsPasswordCopied] = useState<boolean>(false);

  let password = context.state?.password;

  useEffect(() => {
    if (password === DEFAULT_PASSWORD || !password) setHasGenerated(false);
    else setHasGenerated(true);
  }, [password]);

  const toggleWhiteBtn = () => {
    if (btnColor === "#a4ffaf") setBtnColor("#e6e5ea");
    else setBtnColor("#a4ffaf");
  };

  const closeEffects = () => {
    setIsPasswordCopied(false);
    toggleWhiteBtn();
  };

  const toggleCopied = () => {
    toggleWhiteBtn();
    setIsPasswordCopied(true);
  };

  const copyText = async () => {
    if (password === DEFAULT_PASSWORD) {
      popupNotification(
        "warn",
        NO_PASSWORD_TITLE,
        NO_PASSWORD_MESSAGE,
        TYPE_WARN
      );
    } else {
      await navigator.clipboard.writeText(password);
      toggleCopied();
    }
  };

  return (
    <div
      className="card__generate-password"
      onMouseEnter={toggleWhiteBtn}
      onMouseLeave={closeEffects}
    >
      <p
        className={`heading__large text__password ${
          hasGenerated ? "" : "make-grey"
        }`}
      >
        {password === "" || !password ? DEFAULT_PASSWORD : password}
      </p>
      <button
        className="button__clear"
        onMouseDown={toggleWhiteBtn}
        onMouseUp={toggleWhiteBtn}
        onClick={copyText}
      >
        <span className="copy__container">
          {isPasswordCopied ? (
            <>
              <p className="text__copied">copied</p>
              <HiOutlineDocumentDuplicate size="2.4rem" color={btnColor} />{" "}
            </>
          ) : (
            <HiOutlineDocumentDuplicate size="2.4rem" color={btnColor} />
          )}
        </span>
      </button>
    </div>
  );
};

export default GeneratedPassword;
