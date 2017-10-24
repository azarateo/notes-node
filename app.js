console.log('Starting app.js file');
//Node and third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//My modules
const notes = require('./notes.js');
const argvector = yargs.argv;

var command = argvector._[0];
console.log('Command: '+command);
console.log(process.argv);
console.log(argvector);

if(command === 'add'){
  console.log('Adding new note');
  notes.addNote(argvector.title,argvector.body);
}else if(command === 'list'){
  console.log('Listing all notes');
  notes.getAll();
}else if(command === 'read'){
  console.log('Fetching specific note');
  notes.readNote(argvector.title);
}else if(command === 'remove'){
  console.log('Removing note');
  notes.removeNote(argvector.title);
}
else{
  console.log("Unknown command. Try 'add', 'list', 'read' or 'remove'");
}
