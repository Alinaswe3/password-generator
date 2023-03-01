// Password values
import { NOTIFICATION_TYPE } from "react-notifications-component";

export const DEFAULT_PASSWORD = "P4$5W0rD!";
export const DEFAULT_STRENGTH_VALUE = 1;
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 32;
export const LEVEL_1 = "too weak!";
export const LEVEL_2 = "weak";
export const LEVEL_3 = "medium";
export const LEVEL_4 = "strong";

// Colors
export const COLOR_GREY = "#817D92";
export const COLOR_DARK_GREY = "#24232C";
export const COLOR_VERY_DARK_GREY = "#18171F";
export const COLOR_WHITE = "#E6E5EA";
export const COLOR_RED = "#F64A4A";
export const COLOR_ORANGE = "#FB7C58";
export const COLOR_YELLOW = "#F8CD65";
export const COLOR_GREEN = "#A4FFAF";

// Notification values
// ---- Notification info
export const NO_INTERNET_TITLE = "No internet connection!";
export const NO_INTERNET_MESSAGE =
  "Please connect to the internet and try again.";
export const ERROR_TITLE = "Something went wrong!";
export const ERROR_MESSAGE =
  "An error occurred while generating password. Please try again.";
export const NO_PASSWORD_TITLE = "No password generated!";
export const NO_PASSWORD_MESSAGE =
  "Please generate a password in order to copy to clipboard.";
// ---- Notification configuration
export const DEFAULT_DURATION = 7500;
export const TYPE_WARN: NOTIFICATION_TYPE = "warning";
export const TYPE_DANGER: NOTIFICATION_TYPE = "danger";
