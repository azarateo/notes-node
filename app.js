console.log('Starting app.js file');
//Node and third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//My modules
const notes = require('./notes.js');
//Variables
const argvector = yargs.argv;
var command = argvector._[0];
//Output presenting used commands
console.log('Command: '+command);
console.log(process.argv);
console.log(argvector);
//Main app logic
if(command === 'add'){
  console.log('Adding new note');
  var note = notes.addNote(argvector.title,argvector.body);
  if(typeof note === 'object'){
    console.log('Note inserted');
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else{
    console.log('Note not inserted');
  }
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
