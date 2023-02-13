// https://code.visualstudio.com/updates/v1_75#_profiles

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L50
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L138

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/extensionsResource.ts#L21
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/extensionsResource.ts#L45
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/platform/extensionManagement/common/extensionManagement.ts#L194

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/extensionRecommendations/common/workspaceExtensionsConfig.ts#L25

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/userDataProfileImportExportService.ts#L74

// https://nodejs.org/dist/latest-v18.x/docs/api/
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fspromisesreadfilepath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options

import { Command } from "commander";
import { writeFileSync } from "fs";
import { readFile } from "fs/promises";
import JSON5 from "json5";

const NAME = "code-profiler";

const getExtensionsFromRecommendations = (recommendations: string[]) => {
  const extensions = recommendations.map((rec) => ({
    identifier: { id: rec },
  }));
  return extensions;
};

// https://github.com/tj/commander.js/#declaring-program-variable
// https://github.com/tj/commander.js/#typescript
// https://github.com/tj/commander.js/blob/v10.0.0/lib/command.js#L71
// https://github.com/tj/commander.js#commands (`<required> or [optional]`)
// https://github.com/tj/commander.js#usage
const program = new Command()
  .name(NAME)
  .description(
    "A Node.js CLI to generate a Profile file for VS Code from a .vscode folder."
  )
  .argument("<name>", "Profile name.")
  .helpOption("-h, --help", `Display help for ${NAME}.`)
  .parse(process.argv);

const profileName = program.args[0];
// console.log(profileName);

Promise.all([
  readFile("extensions.json", { encoding: "utf8" }),
  readFile("settings.json", { encoding: "utf8" }),
]).then(([extensionsJson, settingsJson]) => {
  const extensions = JSON5.parse(extensionsJson);
  const settings = JSON5.parse(settingsJson);

  const output = {
    name: profileName,
    extensions: JSON.stringify(
      getExtensionsFromRecommendations(extensions.recommendations)
    ),
  };
  // console.log(output);

  writeFileSync(`${profileName}.code-profile`, JSON.stringify(output));
});

// https://stackoverflow.com/a/22339262
// console.log(process.env);
// console.log(process.env.npm_package_version);

console.log("All done!");
