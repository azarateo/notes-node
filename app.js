console.log('Starting app.js file');
//Node and third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//My modules
const notes = require('./notes.js');
const argvector = yargs.argv;

var command = process.argv[2];
console.log('Command: '+command);
console.log(process.argv);
console.log(argvector);

if(command === 'add'){
  console.log('Adding new note');
  notes.addNote(argvector.tittle,argvector.body);
}else if(command === 'list'){
  console.log('Listing all notes');
}else if(command === 'read'){
  console.log('Fetching specific note');
}else if(command === 'remove'){
  console.log('Removing note');
}
else{
  console.log("The argument is not a known command. Try 'add', 'list', 'read' or 'remove'");
}
