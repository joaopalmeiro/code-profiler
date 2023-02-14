import type { JsonObject } from "type-fest";
import { OUTPUT_EXTENSION } from "./constants";

export const getFilename = (name: string): string => {
  return `${name}.${OUTPUT_EXTENSION}`;
};

export const getSettings = (settings: JsonObject): string => {
  return JSON.stringify({ settings: JSON.stringify(settings, null, 4) });
};

export const getExtensionsFromRecommendations = (
  extensions: ExtensionsJson
): string => {
  const extensionsForProfile = extensions.recommendations.map((rec) => ({
    identifier: { id: rec },
  }));

  return JSON.stringify(extensionsForProfile);
};

export const assembleOutput = (
  extensions: ExtensionsJson,
  settings: JsonObject,
  profileName: string
): CodeProfile => {
  return {
    name: profileName,
    settings: getSettings(settings),
    extensions: getExtensionsFromRecommendations(extensions),
  };
};

export const getOutput = (output: CodeProfile): string => {
  return JSON.stringify(output);
};
