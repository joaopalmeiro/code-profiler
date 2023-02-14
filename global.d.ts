// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html#reference-example
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
// https://github.com/sindresorhus/type-fest/blob/v3.5.7/source/primitive.d.ts
// https://github.com/sindresorhus/type-fest/blob/v3.5.7/source/basic.d.ts
// https://stackoverflow.com/questions/45420448/how-to-import-external-type-into-global-d-ts-file
// https://github.com/Folkwise-io/DevCollective.io/tree/2a9fc9855d5b29bb45e31237095a0fb0d1b05b5f
// https://medium.com/mintbean-io/how-i-organize-my-typescript-types-d9ae7f3ac30f

type ExtensionsJson = {
  readonly recommendations: string[];
};

type CodeProfile = {
  readonly name: string;
  readonly settings: string;
  readonly extensions: string;
};
