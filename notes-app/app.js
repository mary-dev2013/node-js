
const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.inverse.green.bold('Sucess!')
console.log(greenMsg)
console.log(validator.isURL('https://mead.io'))

console.log(process.argv[2])