import * as cases from "jsr:@wok/case";

export const pascalCase = (str: string): string => {
  const converted = cases.pascalCase(str);

  // split str into parts when finding digits
  const parts = converted.split(/(\d+)/);

  // capitalize the first letter of each part
  const capitalized = parts.map((part) =>
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join("");

  // remove all underscores
  const camelCased = capitalized.replace(/_/g, "");

  return camelCased;
};
