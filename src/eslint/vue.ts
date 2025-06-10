import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import { isPackageExists } from 'local-pkg'

import basic from './basic'
import ts from './ts'

const isTsProject = isPackageExists('typescript')

if (!isTsProject) {
  console.warn('[@haydenull/fabric] TypeScript is not installed, fallback to JS only.')
}

export default defineConfig([isTsProject ? ts : basic, ...pluginVue.configs['flat/recommended']])
