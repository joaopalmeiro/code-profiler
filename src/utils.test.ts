import type { JsonObject } from "type-fest";
import {
  assembleOutput,
  getExtensionsFromRecommendations,
  getFilename,
  getSettings,
} from "./utils";

// https://jestjs.io/docs/expect

const extensionsJson: ExtensionsJson = {
  recommendations: [
    "antfu.icons-carbon",
    "astro-build.houston",
    "miguelsolorio.symbols",
  ],
};

const settingsJson: JsonObject = {
  "workbench.colorTheme": "Houston",
  "workbench.iconTheme": "symbols",
  "workbench.productIconTheme": "icons-carbon",
};

const codeProfile: CodeProfile = {
  name: "Test",
  settings:
    '{"settings":"{\\n    \\"workbench.colorTheme\\": \\"Houston\\",\\n    \\"workbench.iconTheme\\": \\"symbols\\",\\n    \\"workbench.productIconTheme\\": \\"icons-carbon\\"\\n}"}',
  extensions:
    '[{"identifier":{"id":"antfu.icons-carbon"}},{"identifier":{"id":"astro-build.houston"}},{"identifier":{"id":"miguelsolorio.symbols"}}]',
};

describe("getFilename", () => {
  it("generates a filename with the right extension", () => {
    const filename = getFilename("Test");
    expect(filename).toEqual("Test.code-profile");
  });
});

describe("getSettings", () => {
  it("generates a string of settings ready for the output", () => {
    const settings = getSettings(settingsJson);
    expect(settings).toEqual(codeProfile.settings);
  });
});

describe("getExtensionsFromRecommendations", () => {
  it("generates a string of extensions ready for the output", () => {
    const extensions = getExtensionsFromRecommendations(extensionsJson);
    expect(extensions).toEqual(codeProfile.extensions);
  });
});

describe("assembleOutput", () => {
  it("joins the different parts of a Profile file into a single object", () => {
    const codeProfileOutput = assembleOutput(
      extensionsJson,
      settingsJson,
      "Test"
    );

    // https://jestjs.io/docs/expect#toequalvalue
    expect(codeProfileOutput).toEqual(codeProfile);
  });
});
