console.log('Strating notes.js');
const fs = require('fs');
// fetchNotes Method
var fetchNotes = () => {
  var notes = [];
  try{
    var notesString = fs.readFileSync('notesData.json');
    notes = JSON.parse(notesString);
  }catch(err){
    console.log('notesData.json was not opened');
    console.log(err);
    console.log('Creating first note');
  }
  return notes;
}
// saveNotes method
var saveNotes = (notes) => {
  fs.writeFileSync('notesData.json',JSON.stringify(notes));
}
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
};
// removeNote method
var removeNote = (title) => {
  console.log('Removing note with title:',title);
};

//file interface, available methods or exports
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
