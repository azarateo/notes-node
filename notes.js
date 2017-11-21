console.log('Strating notes.js');
const fs = require('fs');
// fetchNotes Method
var fetchNotes = () =>  {
  var notes = [];
  try{
    var notesString = fs.readFileSync('notesData.json');
    notes = JSON.parse(notesString);
  }catch(err){
    console.log('notesData.json was not opened');
    console.log(err);
  }
  return notes;
};
// saveNotes method
var saveNotes = (notes) => {
  fs.writeFileSync('notesData.json',JSON.stringify(notes));
};
// addNote method
var addNote = (title,body) => {
  console.log('Adding note with title:',title,' and body:',body);
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };
  var duplicates = notes.filter((element)=>{return element.title === title});
  if(duplicates.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }else{
    console.log('Title already in use. No note was added');
  }
};
// getAll method
var getAll = () => {
  console.log('Getting all notes');

};
// readNote method
var readNote = (title) => {
  console.log('Getting note with title:',title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note)=>note.title === title);
  return filteredNotes[0];

};
// removeNote method
var removeNote = (title) => {
    console.log('Removing note with title:', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};
var logNote = (note) =>{
        debugger;
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
};
//

//file interface, available methods or exports
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
    logNote
};
