import type { JsonObject } from "type-fest";
import { OUTPUT_EXTENSION } from "./constants";

export const getFilename = (name: string): string => {
  return `${name}.${OUTPUT_EXTENSION}`;
};

export const getSettings = (
  settings: JsonObject,
  indentation: number = 4
): string => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  return JSON.stringify({
    settings: JSON.stringify(settings, null, indentation),
  });
};

export const getExtensionsFromRecommendations = (
  extensions: ExtensionsJson,
  versions: VersionsJson
): string => {
  const extensionsForProfile = extensions.recommendations.map((rec) => ({
    identifier: { id: rec },
    version: versions[rec],
  }));

  return JSON.stringify(extensionsForProfile);
};

export const assembleOutput = (
  extensions: ExtensionsJson,
  settings: JsonObject,
  versions: VersionsJson,
  profileName: string
): CodeProfile => {
  return {
    name: profileName,
    settings: getSettings(settings),
    extensions: getExtensionsFromRecommendations(extensions, versions),
  };
};

export const getOutput = (output: CodeProfile): string => {
  return JSON.stringify(output);
};
