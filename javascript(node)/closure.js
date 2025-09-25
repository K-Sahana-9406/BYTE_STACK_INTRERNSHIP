// Definition of Closure

// A closure is created when a function “remembers” the variables from its outer scope, even after that outer function has finished executing.
// 👉 In simple words:
// A function inside another function that can access the outer function’s variables.

// 🔹 Why Closures?

// Closures are useful for:
// Data privacy (like private variables in OOP).
// Remembering state between function calls.
// Creating function factories.
// Example : 1
function outer() {
  let message = "Hello Sahana"; // outer variable

  function inner() {
    console.log(message); // inner function can access outer variable
  }

  return inner;
}

let myFunc = outer(); // outer() returns inner
myFunc(); // call inner op:Hello Sahana

// example 2

function counter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

let inc = counter();

console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3

// Example 3: 
function multiply(x) {
  return function (y) {
    return x * y;  // remembers 'x'
  };
}

let double = multiply(2);
let triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
