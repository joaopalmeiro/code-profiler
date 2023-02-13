// https://code.visualstudio.com/updates/v1_75#_profiles
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L50
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/common/userDataProfile.ts#L138
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/workbench/services/userDataProfile/browser/extensionsResource.ts#L21
// https://github.com/microsoft/vscode/blob/1.75.0/src/vs/platform/extensionManagement/common/extensionManagement.ts#L194

import { Command } from "commander";

const NAME = "code-profiler";

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
console.log(profileName);

// https://stackoverflow.com/a/22339262
// console.log(process.env);
// console.log(process.env.npm_package_version);

console.log("All done!");
