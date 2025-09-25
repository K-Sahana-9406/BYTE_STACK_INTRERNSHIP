// 1. What is a Callback Function?

// A callback is simply:
// 👉 A function that is passed as an argument to another function, and executed later.

// Example:

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sahana", sayBye);


// Output:

// Hello, Sahana
// Goodbye!


// Here:

// sayBye is a callback because it is passed into greet and executed inside it.

// 🔹 2. What is a Higher-Order Function?

// A higher-order function (HOF) is a function that:

// Takes another function as an argument OR

// Returns a function.

// 👉 Since callbacks are passed to functions, the function that accepts them is a higher-order function.

// Example:

function higherOrder(fn) {
  console.log("Inside higher-order function");
  fn(); // calling the callback
}

higherOrder(function() {
  console.log("I am the callback function");
});


// Output:

// Inside higher-order function
// I am the callback function

// 🔹 3. Built-in Examples of Callbacks in JavaScript

// JavaScript uses callbacks a lot!

// a) setTimeout (executes callback after a delay)
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// b) forEach (loops with callback)
let numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num * 2);
});


// Output:

// 2
// 4
// 6

// c) map (transforms array with callback)
let numbers1 = [1, 2, 3];
let squares = numbers1.map(function(num) {
  return num * num;
});
console.log(squares); // [1, 4, 9]

// 🔹 4. Higher-Order Function Returning Another Function

// A function can also return a function (still higher-order):

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

let double = multiplier(2);
console.log(double(5));  // 10

let triple = multiplier(3);
console.log(triple(5));  // 15