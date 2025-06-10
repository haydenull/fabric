#!/usr/bin/env node
import { Command } from 'commander'

import packageJSON from '../package.json'
import verifyCommit from './verifyCommit'

const program = new Command()

program.name('@haydenull/fabric').description("haydenull's code standard").version(packageJSON.version)

program
  .command('verify-commit')
  .description('verify commit message')
  .action(() => {
    verifyCommit()
  })

program.parse()
