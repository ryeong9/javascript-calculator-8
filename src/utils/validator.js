import { ERROR_MESSAGES } from "../constants/errorMessages.js";

export function validateAndConvert(values) {
  return values.map((value) => {
    const num = Number(value);

    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (num < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    return num;
  });
}
