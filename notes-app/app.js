
const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')
const { describe } = require('yargs')

// customize yargs version 
yargs.version('1.1.0')
// crate add command  
yargs.command({
    command: 'add',
    describe: 'Add a new note ',
    handler: function (){
        console.log('Adding a new note')
    }
})
// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note ',
    handler: function (){
        console.log('Remove a new note')
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'List your note ',
    handler: function (){
        console.log('Listing out all notes')
    }
})

// Create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note ',
    handler: function (){
        console.log('Read a note')
    }
})

//add , remove, read , list 

console.log(yargs.argv)
