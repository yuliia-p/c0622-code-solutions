function ExampleConstructor() {

}
console.log('value of the prototype property of the ExampleConstructor: ', ExampleConstructor.prototype);
console.log(' typeof the prototype property of the ExampleConstructor: ', typeof ExampleConstructor());

var constr = new ExampleConstructor();
console.log('value of constr: ', constr);

var anotherVar = constr instanceof ExampleConstructor;
console.log(anotherVar);
