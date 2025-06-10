import type { Config } from 'prettier'

export default {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],
  // https://prettier.io/docs/en/options.html
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  printWidth: 120,
  proseWrap: 'never',
  endOfLine: 'lf',
  semi: false,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
} satisfies Config
