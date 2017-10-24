console.log('Starting app.js file');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//Using os from Node

// const info = os.userInfo();
// fs.appendFile('greetings.txt',`Hello ${info.username} . You are ${notes.age}`,function (err){
//
//   if(err){
//     console.log('error writing the file');
//   }else{
//     console.log('File was written');
//   }
// });

// var res = notes.addNote();
// var add = notes.add(3,-8);
// console.log(res);
// console.log(add);

//Using loDash to verify types
// console.log(_.isString(0));
// console.log(_.isString('Upax'));

console.log(_.uniq(['alejo',6,6,5,4,3,2,1,2]));
