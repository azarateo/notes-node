console.log('Strating notes.js');
const fs = require('fs');

var addNote = (title,body) => {
  console.log('Adding note with title:',title,' and body:',body);
  var notes = getAll();
  var note = {
    title: title,
    body: body
  };
  var duplicates = notes.filter((element)=>{return element.title === title});
  if(duplicates.length===0){
    notes.push(note);
    fs.writeFileSync('notesData.json',JSON.stringify(notes));
  }else{
    console.log('A note with that title already exists');
  }
};

var getAll = () => {
  console.log('Getting all notes');
  try{
    var notesString = fs.readFileSync('notesData.json');
    notes = JSON.parse(notesString);
  }catch(err){
    console.log('notesData.json was not opened');
    console.log(err);
    console.log('Creating first note');
  }
  return notes;
};

var readNote = (title) => {
  console.log('Getting note with title:',title);
};
var removeNote = (title) => {
  console.log('Removing note with title:',title);
};
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
