// const add = require("./utils")

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// console.log(add(1,2))

const notes = require('./notes')
const validator = require('validator')
const log = require('./util/log')
const commands = require('./util/commands')
const storage = require('./notes/storage')
// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('http://example.com'))

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

const fs = require('fs')

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
var json = {
    title: 'teste',
    json: bookJSON
}

// storage.save(json)

const jsonData = storage.read({
    title: 'teste'
})

log.good(jsonData.title)
