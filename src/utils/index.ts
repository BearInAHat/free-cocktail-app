export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const uncapitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);

export const removeSlashes = (str: string): string => str.replace(/\//g, "");
