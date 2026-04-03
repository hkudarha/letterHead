export const onlyLetters = (value) =>
  value.replace(/[^a-zA-Z\s]/g, "");

export const onlyNumbers = (value, maxLength) =>
  value.replace(/\D/g, "").slice(0, maxLength);

export const latLongRestrict = (value) =>
  value.replace(/[^0-9.-]/g, "");

export const onlyDigits = (value) => value.replace(/\D/g, "");

export const alphanumeric = (value) =>
  value.replace(/[^a-zA-Z0-9]/g, "");

export const noSpecialCharacters = (value) =>
    value.replace(/[^a-zA-Z0-9\s]/g, "");


