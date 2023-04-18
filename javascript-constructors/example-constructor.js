function ExampleConstructor() {

}
console.log('value of ExampleConstructor prototype: ', ExampleConstructor.prototype);
console.log('typeof the prototype property of ExampleConstructor: ', typeof ExampleConstructor.prototype);

const exampleVar = new ExampleConstructor();
console.log('call ExampleConstructor with new and assign return value to a variable: ', exampleVar);
console.log('check if the value of exampleVar is an instanceof ExampleConstructor: ', exampleVar instanceof ExampleConstructor);
