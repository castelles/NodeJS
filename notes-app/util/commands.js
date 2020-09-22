const yargs = require('yargs')
const notes = require('../notes')
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
    handler: argv => {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'delete',
    describe: 'Remove a note',
    builder: {
        title: {
            alias: 't',
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string',
        }
    },
    handler: argv => {
        notes.delete(argv.title)
    }
})

//List command
yargs.command({
    command: 'page',
    describe: 'ok',
    handler: () => {
        log.good('Listing notes\n')
        notes.list()
    }
})

//Read command
yargs.command({
    command: 'get',
    describe: 'ok',
    handler: () => log.debug('Get a note')
})

yargs.parse()
module.exports = yargs