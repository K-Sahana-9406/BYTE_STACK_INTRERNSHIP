// Equality in JavaScript
// JavaScript has two main types of equality:

// == → Loose Equality (Abstract Equality)
// === → Strict Equality

// 1. Loose Equality ==
// Compares values after type conversion.
// JavaScript will try to coerce the types to be the same before comparing.

// Examples:
console.log(5 == "5");    // true → string "5" converted to number 5
console.log(0 == false);  // true → false converted to number 0
console.log(null == undefined); // true → special case


// ❌ Can lead to unexpected results:

console.log("" == 0);      // true
console.log(" " == 0);     // true

// 2. Strict Equality ===
// Compares both value and type.
// No type coercion happens.

// Examples:
console.log(5 === "5");    // false → number vs string
console.log(0 === false);  // false → number vs boolean
console.log(null === undefined); // false → different types
console.log(5 === 5);      // true → same type & value

// ✅ Always prefer === in modern JS to avoid weird bugs.
// 3. Not Equal != and !==
// != → loose not equal (with type coercion)
// !== → strict not equal (no type coercion)

console.log(5 != "5");   // false → they are loosely equal
console.log(5 !== "5");  // true → different types

// 4. Special Cases

// NaN
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true → use isNaN to check


// Objects

// Objects are compared by reference, not by value.

let a1= { name: "Sahana" };
let b1 = { name: "Sahana" };
console.log(a1 == b1);  // false
console.log(a1 === b1); // false

let c = a1;
console.log(a1 === c); // true → same reference


// null and undefined

console.log(null == undefined);  // true
console.log(null === undefined); // false

// 5. Truthy/Falsy and Equality

// Loose equality may convert truthy/falsy values:

console.log(1 == true);   // true
console.log(0 == false);  // true
console.log("" == false); // true


