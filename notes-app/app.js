
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')


// customize yargs version 
yargs.version('1.1.0')
// crate add command  
yargs.command({
    command: 'add',
    describe: 'Add a new note ',
    builder: {
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body ',
            demandOption: true,
            type: 'string'

        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})
// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note ',
    builder: {
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})


// Create list command 
yargs.command({
    command: 'list',
    describe: 'List your note ',
    handler (){
        notes.listNotes()
        //console.log('Listing out all notes')
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


yargs.parse()
