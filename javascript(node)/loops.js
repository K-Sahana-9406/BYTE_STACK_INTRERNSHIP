// Types of Loops in JavaScript

// 1. for loop
// The most common loop. You define an initializer, 
// condition, and increment/decrement.

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
// Output: 1, 2, 3, 4, 5

// 2. while loop

// Runs as long as the condition is true.
let j= 1;
while (j<= 5) {
  console.log("Count:", i);
  j++;
}
// Output: 1, 2, 3, 4, 5

// 3. do...while loop

// Similar to while, but runs the code at least 
// once before checking the condition.
let i = 1;
do {
  console.log("Hello", i);
  i++;
} while (i <= 3);
// Output: Hello 1, Hello 2, Hello 3

// 4. for...in loop

// Used to iterate over object properties (keys).
const person = { name: "Sahana", age: 21, city: "Coimbatore" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
// Output:
// name : Sahana
// age : 21
// city : Coimbatore

// 5. for...of loop

// Used to iterate over iterable objects (arrays, strings, sets, maps).
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry

// 6. forEach() method (Array method, not a loop keyword)

// Used to iterate over arrays with a callback function.
const numbers = [1, 2, 3, 4];

numbers.forEach(num => {      
  console.log(num * 2);
});
// Output: 2, 4, 6, 8


const name = "JS";

// for...in → indexes
for (let index in name) {
  console.log(index); 
}
// 0
// 1

// for...of → characters
for (let char of name) {
  console.log(char);
}
// J
// S
