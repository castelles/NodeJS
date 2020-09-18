const chalk = require('chalk')

const log = console.log
const errorLog = chalk.bgRed.bold
const warningLog = chalk.yellow
const debugLog = chalk.blue
const successLog = chalk.green.bold

const error = message => {
    console.log(errorLog(message))
}

const warning = message => {
    console.log(warningLog(message))
}

const debug = message => {
    console.log(debugLog(message))
}

const good = message => {
    console.log(successLog(message))
}

module.exports = {
    error,
    warning,
    debug,
    good,
}