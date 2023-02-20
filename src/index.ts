#!/usr/bin/env node

// https://code.visualstudio.com/updates/v1_75#_profiles

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L50
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L138
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/userDataProfileImportExportService.ts#L74

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/extensionsResource.ts#L21
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/extensionsResource.ts#L45
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/platform/extensionManagement/common/extensionManagement.ts#L194
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/extensionRecommendations/common/workspaceExtensionsConfig.ts#L25

// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/settingsResource.ts#L20

// https://nodejs.org/dist/latest-v18.x/docs/api/
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fspromisesreadfilepath-options
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options

import { Command } from "commander";
import { writeFileSync } from "fs";
import { readFile } from "fs/promises";
import JSON5 from "json5";
import type { JsonObject } from "type-fest";
import { DESCRIPTION, NAME, WIDTH } from "./constants";
import { assembleOutput, getFilename, getOutput } from "./utils";

// https://github.com/tj/commander.js/#declaring-program-variable
// https://github.com/tj/commander.js/#typescript
// https://github.com/tj/commander.js/blob/v10.0.0/lib/command.js#L71
// https://github.com/tj/commander.js#commands (`<required> or [optional]`)
// https://github.com/tj/commander.js#usage
const program = new Command()
  .name(NAME)
  .description(DESCRIPTION)
  .argument("<name>", "Profile name.")
  .helpOption("-h, --help", `Display help for ${NAME}.`)
  .configureHelp({ helpWidth: WIDTH })
  .parse(process.argv);

const profileName = program.args[0];
// console.log(profileName);

Promise.all([
  readFile("extensions.json", { encoding: "utf8" }),
  readFile("settings.json", { encoding: "utf8" }),
  readFile("versions.json", { encoding: "utf8" }),
]).then(([extensionsJson, settingsJson, versionsJson]) => {
  // https://bobbyhadz.com/blog/typescript-parse-json-string#using-a-type-assertion-to-type-the-result
  // https://github.com/json5/json5/blob/v2.2.3/lib/parse.d.ts
  // https://github.com/sindresorhus/type-fest#json
  const extensions = JSON5.parse<ExtensionsJson>(extensionsJson);
  const settings = JSON5.parse<JsonObject>(settingsJson);
  const versions = JSON5.parse<VersionsJson>(versionsJson);

  const output = assembleOutput(extensions, settings, versions, profileName);
  // console.log(output);

  writeFileSync(getFilename(profileName), getOutput(output));

  console.log("All done!");
});

// https://stackoverflow.com/a/22339262
// console.log(process.env);
// console.log(process.env.npm_package_version);
