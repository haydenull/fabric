import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import czConfig from './dist/cz/index.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const packages = fs.readdirSync(path.join(__dirname, 'src'))

/** @type { import('cz-git').UserConfig['prompt'] } */
export default {
  ...czConfig,
  scopes: [...packages],
}
