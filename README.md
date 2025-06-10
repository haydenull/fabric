# @haydenull/fabric
A collection of configuration files containing prettier, eslint, tsconfig and more

## Usage

Install the package
```shell
pnpm add @haydenull/fabric eslint prettier -D
```

## ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) eslint-config

in `eslint.config.mjs`

```js
import haydenullLint from '@haydenull/fabric/eslint/react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  haydenullLint,
  globalIgnores(['public', 'dist']),
])
```

## ![Prettier](https://img.shields.io/badge/Prettier-1a2b34?style=for-the-badge&logo=prettier&logoColor=white) prettier

in `prettier.config.mjs`

```js
import haydenullPrettier from '@haydenull/fabric/prettier'

export default {
  ...haydenullPrettier,
  // docs: https://github.com/tailwindlabs/prettier-plugin-tailwindcss#sorting-classes-in-function-calls
  tailwindConfig: '.your-path/tailwind.config.js',
  tailwindFunctions: [], // ['cn', 'clsx']
}
```

If you use pnpm to manage dependencies, due to the hoisting mechanism of pnpm, you need to add the following configuration to `.npmrc` to lift `@trivago/prettier-plugin-sort-imports` and `prettier-plugin-*` dependencies to the global level:

```txt
public-hoist-pattern[]=@trivago/prettier-plugin-sort-imports
public-hoist-pattern[]=prettier-plugin-*
```

## ![Git](https://img.shields.io/badge/Git-e84e32?style=for-the-badge&logo=git&logoColor=white) verify commit

1. install [husky](https://typicode.github.io/husky/)
2. add commit-msg hook
```shell
# on Linux or Mac
echo "npx haydenull-fabric verify-commit" >> .husky/commit-msg
```

## ![TypeScript](https://img.shields.io/badge/TypeScript-3078c6?style=for-the-badge&logo=typescript&logoColor=white) tsconfig

in `tsconfig.json`
```json
{
  "extends": "@haydenull/fabric/tsconfig/tsconfig.json",
}
```

## ![czg](https://img.shields.io/badge/czg-1a2b34?style=for-the-badge&logo=cz-git&logoColor=white) [czg](https://cz-git.qbb.sh/cli/)

1. global install
```shell
npm install -g czg
```

2.in `cz.config.mjs`
```js
import haydenullCz from '@haydenull/fabric/cz'


export default {
  ...haydenullCz,
  scopes: [/** your scopes */],
}
```

## Recommended

### Use `lint-staged`

1. Install

```shell
pnpm add -D lint-staged
```

2. in `package.json`

```json
{
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "npx prettier --write",
      "npx eslint --fix"
    ]
  }
}
```

3. add git hooks

```shell
# on Linux or Mac
echo "npx lint-staged" >> .husky/pre-commit
```

### type check before commit

1. in `package.json`
```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```
2. add git hooks

```shell
# on Linux or Mac
echo "npm run typecheck" >> .husky/pre-commit
```

### spell check

Install [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) Plugin for VSCode.
