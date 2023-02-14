# code-profiler

A Node.js CLI to generate a [Profile file](https://code.visualstudio.com/updates/v1_75#_profiles) for VS Code from a `.vscode` folder. It supports `extensions.json` and `settings.json` files.

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
