const yargs = require('yargs')
const log = require('./log')


// Customize yargs version
yargs.version('1.1.0')

//Add command
yargs.command({
    command: 'post',
    describe: 'Add a new note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            alias: 'b',
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        log.debug(`Adding new note! \n\n${argv.title} \n     ${argv.body}`)
    }
})

//Create remove command
yargs.command({
    command: 'delete',
    describe: 'Remove a note',
    handler: () => {
        log.warning('Removing the note')
    }
})

//List command
yargs.command({
    command: 'page',
    describe: 'ok',
    handler: () => log.debug('Listing notes')
})

//Read command
yargs.command({
    command: 'get',
    describe: 'ok',
    handler: () => log.debug('Get a note')
})

yargs.parse()
module.exports = yargs