# code-profiler

[![npm](https://img.shields.io/npm/v/code-profiler)](https://www.npmjs.com/package/code-profiler)

A Node.js CLI to generate a [Profile file](https://code.visualstudio.com/updates/v1_75#_profiles) for VS Code from a `.vscode` folder. It supports `extensions.json` and `settings.json` files, as well as a custom `versions.json` file for defining extension versions.

## Installation

```bash
npx code-profiler
```

or

```bash
npm install -g code-profiler
```

## Usage

```bash
npx code-profiler
```

or

```bash
code-profiler
```

and

```text
Usage: code-profiler [options] <name>

Generate a Profile file for VS Code from a .vscode folder. This tool supports
extensions.json and settings.json files, as well as a custom versions.json file
for defining extension versions.

Arguments:
  name        Profile name.

Options:
  -h, --help  Display help for code-profiler.
```

### Considerations

- `code-profiler` expects the `extensions.json` and `settings.json` files to be in the current working directory.
- `code-profiler` generates the output file in the current working directory.
- After importing a profile, reload VS Code, as the extension versions may differ from the ones you have installed.

## Development

```bash
nvm install && nvm use && node --version
```

```bash
npm install
```

```bash
npm run dev -- --help
```

```bash
npm run dev -- Python
```

```bash
npm run test
```

```bash
npm run lint
```

```bash
npm run build
```

```bash
npm pack --dry-run
```

```bash
npm link
```

```bash
code-profiler --help
```

```bash
code-profiler Python
```

Update the [Usage](#usage) section with information on how to use the CLI if needed.

## Deployment

```bash
npm version patch
```

or

```bash
npm version minor
```

or

```bash
npm version major
```

```bash
git tag
```

```bash
git push --follow-tags
```

## References

- https://blog.logrocket.com/building-typescript-cli-node-js-commander/
- https://dylanyoung.dev/insights/building-your-first-node-js-cli/ + https://github.com/dylanyoung-dev/first-node-cli
- https://github.com/antfu/vscode-settings
- https://github.com/bennycode/ts-node-starter
- https://github.com/apollographql/typescript-repo-template
- https://devimalplanet.com/guide-how-to-create-a-nodejs-cli-command-line-interface
- https://github.com/tailwindlabs/tailwindcss-container-queries
- https://github.com/ahmadawais/create-node-cli
- https://github.com/sindresorhus/boxen-cli
- https://github.com/sindresorhus/capture-website-cli
- https://www.npmjs.com/package/generator-code
