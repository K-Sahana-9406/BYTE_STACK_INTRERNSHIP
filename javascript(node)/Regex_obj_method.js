// 1. test()

// Purpose: Checks if the regex matches the string.

// Returns: true or false (Boolean).

console.log(/\d{3}/.test("12345")); // true (because "123" exists)
console.log(/\d{3}/.test("ab"));    // false (no 3 digits in a row)

// 🔹 2. exec()

// Purpose: Executes the regex on a string.

// Returns: An array with match info (or null if no match).

// Array includes: matched text, index where found, and input 
// string.

let result = /\d{3}/.exec("Order number: 12345");
console.log(result);  
// ["123", index: 14, input: "Order number: 12345"]


// ⚡ If the regex has the g (global) flag, exec() remembers the lastIndex and can be used repeatedly in a loop.

// 🔹 3. compile() (deprecated in modern JS)

// Used to (re)compile a regex. Rarely used now.

let regex = /\d+/;
regex.compile("\\w+"); // recompiled to match words.it is in older js only
// Modern Alternative

// Instead of compile(), you just create a new regex:

let regex1 = /\d+/;      // old pattern (digits)
regex1 = /\w+/;          // new pattern (word chars)

// 🔹 String Methods That Use Regex

// Even though they are string methods, they internally rely 
// on regex:

// a) match()

// Returns array of matches (or null).

console.log("123 456".match(/\d+/));     // ["123"]
console.log("123 456".match(/\d+/g));    // ["123", "456"]

// b) matchAll()

// Returns iterator of all matches (more detailed than match()).

for (let m of "123 456".matchAll(/\d+/g)) {
  console.log(m);
}
// ["123", index: 0, input: "123 456"]
// ["456", index: 4, input: "123 456"]

// c) replace()

// Replaces matches with new text.

console.log("I have 123".replace(/\d+/, "456"));   // I have 456
console.log("I have 123 and 789".replace(/\d+/g, "#")); // I have # and #

// d) split()

// Splits string based on regex.

console.log("one,two;three".split(/[,;]/));  
// ["one", "two", "three"]

// e) search()

// Returns the index of the first match (or -1).

console.log("Order 123".search(/\d+/));  // 6
console.log("No numbers".search(/\d+/)); // -1
