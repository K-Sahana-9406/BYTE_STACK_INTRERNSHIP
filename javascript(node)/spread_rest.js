// 1. Spread Operator ...
// Purpose: “Spread” elements of an array or object into another
//  array/object or function arguments.
// Works with: arrays, objects, strings, function arguments.

// Syntax:
// ...iterable

// Examples:
// a) Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // spreads arr1 into arr2

console.log(arr2); // [1, 2, 3, 4, 5]

// b) Object
const obj1 = { name: "Sahana", age: 21 };
const obj2 = { ...obj1, city: "Coimbatore" };

console.log(obj2);
// { name: "Sahana", age: 21, city: "Coimbatore" }

// c) Function Arguments
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

// 🔹 2. Rest Operator ...

// Purpose: “Collect remaining elements” into an array.

// Usually used in function parameters or destructuring.

// Syntax:
// ...variableName

// Examples:
// a) Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// ✔ Here numbers is an array of all arguments.

// b) Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// c) Object Destructuring
const person = { name: "Sahana", age: 21, city: "Coimbatore" };
const { name, ...others } = person;

console.log(name);   // Sahana
console.log(others); // { age: 21, city: "Coimbatore" }
