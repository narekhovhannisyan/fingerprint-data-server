'use strict'

const { ProcessEnvVariableError } = require('../util').Errors

const REQUIRED_VARIABLES = [
  'PG_CONNECTION_STRING_MAIN'
]

module.exports = {

  /**
   * @public
   * @description Check process variables for `production` mode.
   * @throws Will throw `ProcessEnvVariableError` error if required environment variable is missing.
   */
  check: () => {
    if (process.env.NODE_ENV === 'production') {
      REQUIRED_VARIABLES.forEach(variable => {
        if (!process.env[variable]) {
          throw new ProcessEnvVariableError(`Missing '${variable}' required environment variable.`)
        }
      })
    }
  }
}
