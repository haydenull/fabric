import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import { isPackageExists } from 'local-pkg'

import basic from './basic'
import ts from './ts'

const isTsProject = isPackageExists('typescript')

if (!isTsProject) {
  console.warn('[@haydenull/fabric] TypeScript is not installed, fallback to JS only.')
}

export default defineConfig([
  isTsProject ? ts : basic,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...react.configs.flat.recommended,
    plugins: { react },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    },
  },
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
])
