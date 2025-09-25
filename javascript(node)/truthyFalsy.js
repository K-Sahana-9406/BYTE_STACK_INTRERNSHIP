// 🎯 What are Truthy and Falsy Values?

// In JavaScript, every value is either truthy or falsy when converted to a boolean (true or false).
// This happens automatically in places like if statements, loops, and logical operators.

// ❌ Falsy Values
// These are values that become false when converted to Boolean.
// 👉 There are only 7 falsy values in JavaScript:

// false
// 0 (zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN

// ✅ Truthy Values

// Everything else (that is not falsy) is truthy.

// Examples of truthy values:
// true
// Any non-zero number → 1, -5, 3.14
// Any non-empty string → "hello", "0", "false"
// Objects → {}, []
// Functions
// Dates
// Infinity → Infinity, -Infinity

// 📌 Special Cases to Remember

// 1.)"0" (string zero) is truthy (because it’s not empty).
// 2.)"false" (string) is truthy, even though it looks like false.
// 3.)Empty arrays [] and empty objects {} are truthy.

console.log(Boolean(""));    // false
console.log(Boolean(" "));   // true
console.log(Boolean(0));     // false
console.log(Boolean(123));   // true
console.log(Boolean([]));    // true
console.log(Boolean(null));  // false
