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

const versionsJson: VersionsJson = {
  "antfu.icons-carbon": "0.2.6",
  "astro-build.houston": "0.0.8",
  "miguelsolorio.symbols": "0.0.9",
};

const codeProfile: CodeProfile = {
  name: "Test",
  settings:
    '{"settings":"{\\n    \\"workbench.colorTheme\\": \\"Houston\\",\\n    \\"workbench.iconTheme\\": \\"symbols\\",\\n    \\"workbench.productIconTheme\\": \\"icons-carbon\\"\\n}"}',
  extensions:
    '[{"identifier":{"id":"antfu.icons-carbon"},"version":"0.2.6"},{"identifier":{"id":"astro-build.houston"},"version":"0.0.8"},{"identifier":{"id":"miguelsolorio.symbols"},"version":"0.0.9"}]',
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
    const extensions = getExtensionsFromRecommendations(
      extensionsJson,
      versionsJson
    );
    expect(extensions).toEqual(codeProfile.extensions);
  });
});

describe("assembleOutput", () => {
  it("joins the different parts of a Profile file into a single object", () => {
    const codeProfileOutput = assembleOutput(
      extensionsJson,
      settingsJson,
      versionsJson,
      "Test"
    );

    // https://jestjs.io/docs/expect#toequalvalue
    expect(codeProfileOutput).toEqual(codeProfile);
  });
});
