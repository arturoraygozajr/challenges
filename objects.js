
//{ firstName: 'Cade', lastName: 'Nichols', age: 28 }
function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
var cade = new Person('Cade', 'Nichols', 28);
console.log (cade)