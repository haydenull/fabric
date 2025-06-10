import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/cli.ts',
    'src/eslint/index.ts',
    'src/eslint/basic.ts',
    'src/eslint/react.ts',
    'src/eslint/ts.ts',
    'src/eslint/vue.ts',
    'src/prettier/index.ts',
    'src/cz/index.ts',
  ],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
})
