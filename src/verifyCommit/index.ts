// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts
// docs: Documentation only changes
// feat
// fix
// wip: Work in progress
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// perf: performance improvements
// chore: gitignore changes
import chalk from 'chalk'
import { readFileSync } from 'node:fs'
import path from 'node:path'

const verifyCommit = () => {
  const msgPath = path.resolve('.git/COMMIT_EDITMSG')
  const msg = readFileSync(msgPath, 'utf-8').trim()

  const commitRE =
    /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

  if (!commitRE.test(msg)) {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n${chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )}
      ${chalk.green(`[revert: ?]<type>[(scope)?]: [<emoji>]<message>`)}
      ${chalk.green(`feat(compiler): add 'comments' feature`)}
      ${chalk.green(`fix(compiler): fix a bug`)}
      ${chalk.green(`docs(compiler): add some docs`)}
      ${chalk.green(`style(compiler): format some code(white space, formatting, missing semicolon)`)}
      ${chalk.green(`refactor(compiler): refactor some code`)}
      ${chalk.green(`test(compiler): add some tests`)}
      ${chalk.green(`chore(compiler): Made some changes to the scaffolding`)}
      ${chalk.green(`Other commit types: perf, workflow, build, ci, typos, types, wip, release, dep\n`)}
      ${chalk.blue(`See https://github.com/vuejs/core/blob/main/.github/commit-convention.md\n`)}`,
    )
    process.exit(1)
  }
}

export default verifyCommit
