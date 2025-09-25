// Error Handling in JavaScript
// JavaScript provides try, catch, finally, throw to handle errors.

// 1. try...catch

// try → code that might throw an error
// catch → runs if an error occurs
// error object → contains information about the error

try {
  let result = riskyFunction(); // riskyFunction not defined
  console.log(result);
} catch (err) {
  console.log("An error occurred:", err.message);
}
// Output: An error occurred: riskyFunction is not defined

// try...catch...finally

// finally → always runs, whether an error occurs or not
// Useful for cleanup (closing files, stopping timers, etc.)

try {
  console.log("Inside try");
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("Finally always runs");
}
// Output:
// Inside try
// Caught: Something went wrong!
// Finally always runs

// throw

// Used to create custom errors.

let age = -5;

if (age < 0) {
  throw new Error("Age cannot be negative!");
}
// Program stops here if error is thrown

// Error Types in JavaScript

// Some common built-in errors:

// ReferenceError → variable not defined
// TypeError → wrong type or method on type
// SyntaxError → invalid JS syntax
// RangeError → value out of range
// EvalError → error in eval() (rare)

function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero!");
    return a / b;
  } catch (err) {
    return err.message;
  } finally {
    console.log("Division attempt completed.");
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero!
