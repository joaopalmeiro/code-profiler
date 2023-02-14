import { OUTPUT_EXTENSION } from "./constants";

export const getFilename = (name: string): string => {
  return `${name}.${OUTPUT_EXTENSION}`;
};
