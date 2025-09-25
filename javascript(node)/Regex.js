// What is a Regular Expression (Regex)?
// A regular expression (regex) is a pattern used to match 
// strings.
//  In JavaScript, regex is represented by either:
let pattern = /abc/;      // Literal notation
let pattern2 = new RegExp("abc"); // Constructor
// Regex (Regular Expression) is a sequence of characters that forms a search pattern.
// It is used for string matching, searching, extracting, replacing, or validating text.
let str = "Hello World!";
console.log(/Hello/.test(str)); // true (matches "Hello")

