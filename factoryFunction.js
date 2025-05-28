




// Factory functions in JavaScript are functions that return new objects. They provide an alternative
//  to using classes or constructor functions for creating multiple similar objects. 
//  Here's a clear breakdown to help you understand factory functions:

// 🔧 What is a Factory Function?
// A factory function is simply a regular function that returns an object.
//  It allows you to create multiple instances of similar objects with their own properties and methods.



function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const user1 = createUser("Alice", 30);
const user2 = createUser("Bob", 25);

user1.greet(); // Hi, my name is Alice and I'm 30 years old.
user2.greet(); // Hi, my name is Bob and I'm 25 years old.
