// 1. if statement

// Executes a block of code if a condition is true.


// Example:
let age2 = 18;

if (age2 >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.

// 2. if...else statement

// Executes one block if condition is true, another block if false.



// Example:
let age1 = 16;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are a minor.

// 3. if...else if...else

// Tests multiple conditions in order.



// Example:
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Output: Grade B

// 4. Ternary Operator ? :

// Short form of if...else.


// Example:
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// 5. switch statement

// Tests a variable against multiple cases.
// Use break to stop after a match.

// Example:
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday