console.log('Starting app.js file');
//Node and third party modules
const fs = require('fs');
const _ = require('lodash');
//My modules
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: '+command);
console.log(process.argv);

if(command === 'add'){
  console.log('Adding new note');
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
