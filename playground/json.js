// var obj = {
//   name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

var personString = '{"name":"Alejandro","age":39}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
