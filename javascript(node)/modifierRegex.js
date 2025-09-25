//Modifiers
// Modifiers (also called flags) are special characters you add after the closing slash of your regex:
// /pattern/flags
// They change how the regex engine searches.
// 🔹 List of Regex Modifiers
// 1. i → Case-Insensitive
// Makes the regex ignore uppercase/lowercase differences.
// ✅ Example:

let str1 = "Hello hello";
console.log(str1.match(/hello/));   // ["hello"] → only lowercase
console.log(str1.match(/hello/i));  // ["Hello"] → matches case-insensitive

// 2. g → Global Search

// Finds all matches, not just the first one.

// Without g, regex stops after the first match.

// ✅ Example:

let str2 = "Hello hello Hello";
console.log(str2.match(/Hello/));   // ["Hello"] → only first match
console.log(str2.match(/Hello/g));  // ["Hello","Hello"] → all matches

// 3. m → Multiline Mode

// Changes how ^ (start) and $ (end) behave.

// Normally, ^ matches only start of string, $ only end of string.

// With m, they match at start/end of each line.

// ✅ Example:

let str3 = "Hello\nWorld";
console.log(str3.match(/^World/));   // null (because "World" is not at start of full string)
console.log(str3.match(/^World/m));  // ["World"] → matches start of 2nd line

// 4. s → Dotall Mode

// Normally . matches any character except newline.

// With s, . also matches newline (\n).

// ✅ Example:

let str4 = "Hello\nWorld";
console.log(str4.match(/Hello.World/));   // null (dot does not cross newline)
console.log(str4.match(/Hello.World/s));  // ["Hello\nWorld"]

// 5. u → Unicode Mode

// Makes regex treat pattern as Unicode-aware.

// Useful for emojis, special characters, non-English scripts.

// ✅ Example:

let str5 = "😊";
console.log(/\u{1F60A}/.test(str5));      // false (without u flag)
console.log(/\u{1F60A}/u.test(str5));     // true (with u flag)

// 6. y → Sticky Search

// Similar to g, but it matches only from the current lastIndex position.

// Does not search ahead in the string.

// ✅ Example:

let str6 = "Hello Hello";
let regex = /Hello/y;

regex.lastIndex = 0;
console.log(regex.exec(str6));  // ["Hello"]

regex.lastIndex = 6;
console.log(regex.exec(str6));  // ["Hello"]

regex.lastIndex = 5;
console.log(regex.exec(str6));  // null (must match exactly at position 5)

// 🔹 Combining Modifiers

// You can use multiple together.

// ✅ Example:

let str7 = "Hello hello HELLO";
console.log(str7.match(/hello/gi)); // ["Hello","hello","HELLO"]