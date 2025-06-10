import type { Linter } from 'eslint'
import prettierConfig from 'eslint-config-prettier'
import tsEslint from 'typescript-eslint'

import basic from './basic'

export default tsEslint.config(basic, prettierConfig, {
  extends: [tsEslint.configs.recommended],
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description', 'ts-expect-error': 'allow-with-description' },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}) as Linter.Config
