// 🎯 What is this in JavaScript?

// this refers to the object that is currently executing the code.
// The value of this depends on how the function is called, not where it is defined.

// 1. Global Context

// In the global scope, this refers to the global object.
// In browser → window
// In Node.js → global

console.log(this); // Window in browser, {} or global in Node

// 2. Inside a Function (Non-Strict Mode)

// this inside a regular function refers to global object (window in browser).

function foo() {
  console.log(this);
}

foo(); // Window in browser


// In strict mode, this is undefined:

"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined

// 3. Inside an Object (Method)

// When a function is called as a method of an object, this refers to that object.

const person1 = {
  name: "Sahana",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person1.greet(); // Hello, Sahana

// 4. Inside a Constructor Function

// When using new, this refers to the newly created object.

function Person(name) {
  this.name = name;
}

const p1 = new Person("Reshmi");
console.log(p1.name); // Reshmi

// 5. Inside a Class

// Works the same as constructor functions.

class Person1 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, " + this.name);
  }
}

const p = new Person1("Sahana");
p.greet(); // Hi, Sahana

// 6. Arrow Functions

// Arrow functions don’t have their own this.

// They inherit this from the enclosing scope.

const person2 = {
  name: "Sahana",
  greet: function() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};

person2.greet(); // Sahana


// Normal function inside object would have needed bind(this) or storing self = this.

// 7. Explicit Binding

// call(), apply(), bind() can explicitly set this.

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "Sahana" };

greet.call(person, "Hello");  // Hello, Sahana
greet.apply(person, ["Hi"]);  // Hi, Sahana
const bound = greet.bind(person);
bound("Hey");                  // Hey, Sahana