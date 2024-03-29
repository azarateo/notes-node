console.log('Starting app.js file');
//Node and third party modules
const yargs = require('yargs');
//My modules
const notes = require('./notes.js');
//Variables
const argvector = yargs.argv;
let command = argvector._[0];
//Output presenting used commands
console.log('Command: ' + command);
console.log(process.argv);
console.log(argvector);
//Main app logic
if (command === 'add') {
    console.log('Adding new note');
    let note = notes.addNote(argvector.title, argvector.body);
    if (typeof note === 'object') {
        console.log('Note inserted');
        notes.logNote(note);
    } else {
        console.log('Note not inserted');
    }
}
else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll();
}
else if (command === 'read') {
    console.log('Fetching specific note');
    var note = notes.readNote(argvector.title);
    if(note){
        console.log('Note found:');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}
else if (command === 'remove') {
    console.log('Removing note');
    var noteRemoved = notes.removeNote(argvector.title);
    var message = noteRemoved ? 'Note was removed' : 'Note was not removed ';
    console.log(message);
}
else {
    console.log("Unknown command. Try 'add', 'list', 'read' or 'remove'");
}
