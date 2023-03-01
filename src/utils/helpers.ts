import { DEFAULT_DURATION, MIN_PASSWORD_LENGTH } from "./constants";
import { NOTIFICATION_TYPE, Store } from "react-notifications-component";

export const requestPassword = async (
  passwordLength: number = MIN_PASSWORD_LENGTH,
  includeNumbers: boolean = false,
  includeSymbols: boolean = false
) => {
  const test = `${
    // @ts-ignore
    import.meta.env.VITE_API_URL
  }?length=${passwordLength}&exclude_numbers=${!includeNumbers}&exclude_special_chars=${!includeSymbols}`;
  console.log(test);
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

export const popupNotification = (
  id: string,
  title: string,
  message: string,
  type: NOTIFICATION_TYPE,
  duration: number = DEFAULT_DURATION
) => {
  Store.addNotification({
    id: id,
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-full",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: duration,
      onScreen: true,
    },
  });
};
