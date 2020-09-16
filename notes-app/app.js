// const add = require("./utils")

// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// console.log(add(1,2))

const notes = require('./notes')
const validator = require('validator')
// import validator from 'validator';

console.log(notes())

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('http://example.com'))