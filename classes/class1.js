// How we'll be using classes:

class DataStructure() {
  constructor() {
      // what default properties should it have?
  }
  someInstanceMethod() {
      // what should each object created from this class be able to do?
  }
}

// We will be using the constructor and instance methods quite a bit!
// We will almost never be using static methods

// Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)

// RECAP:
// Classes are blueprints that when created make objects known as *instances*
// Classes are created with the *new* keyword
// The *constructor* function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the *static* keyword