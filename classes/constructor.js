// Person Constructor
function Cat(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

// THIS keyword outside of function is global scope and pertains to the Window object

const koa = new Cat('Koa Bear', 2);
const rocket = new Cat('Rocket Cat', 3);

// Prototypal Inheritance
Cat.prototype.greeting = function() {
  return `Hello ${this.name}! You are ${this.age} today!`
}

const output = koa.greeting();

console.log(output);