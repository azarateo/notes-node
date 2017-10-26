// var obj = {
//   name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
// // console.log(stringObj);
//
// var personString = '{"name":"Alejandro","age":39}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');
var originalNote = {
  title : 'My title',
  body: 'The body of the note'
};

var objString = JSON.stringify(originalNote);
fs.writeFileSync('notes.js',objString);

var noteString = fs.readFileSync('notes.js');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log('The title of the note:',note.title);
console.log('Notes body:',note.body);
