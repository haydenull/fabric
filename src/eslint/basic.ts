import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  /** 原 eslint:recommended
   * https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
   */
  js.configs.recommended,
  {
    // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-underscore-dangle': 'off',
      'prefer-object-spread': 'off',
    },
  },
])
