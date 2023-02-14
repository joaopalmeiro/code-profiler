import { getFilename } from "./utils";

// https://jestjs.io/docs/expect

describe("getFilename", () => {
  it("generates a filename with the right extension", () => {
    const filename = getFilename("Test");
    expect(filename).toEqual("Test.code-profile");
  });
});
