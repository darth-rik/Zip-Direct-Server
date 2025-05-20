import crypto from "crypto";
export const generatePin = () => {
  const sixDigitPin = crypto.randomInt(100000, 1000000);

  return sixDigitPin.toString();
};
