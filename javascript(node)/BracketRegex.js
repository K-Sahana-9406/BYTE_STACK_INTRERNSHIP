// Brackets Types & Usage
// 1. Basic Set [abc]

// Matches any one of the characters inside.

console.log("apple".match(/[aeiou]/)); // ["a"] → matches first vowel
console.log("cat".match(/[ct]/));      // ["c"] → matches c (t would match if c not there first)

// 2. Negated Set [^abc]

// Matches any character NOT in the set.
// (^ at the start = negation, inside [] only!)

console.log("dog".match(/[^aeiou]/));  // ["d"] → first non-vowel
console.log("123".match(/[^0-9]/));    // null → only digits present

// 3. Ranges

// [a-z] → any lowercase letter

// [A-Z] → any uppercase letter

// [0-9] → any digit

// [a-zA-Z0-9] → any alphanumeric character

console.log("xyz".match(/[a-z]/));   // ["x"]
console.log("G".match(/[A-Z]/));   // ["G"]
console.log("7".match(/[0-9]/));   // ["7"]

// 4. Combined Sets

// You can mix characters and ranges.

console.log("B".match(/[a-zA-Z]/));   // ["B"] → any letter
console.log("!".match(/[a-zA-Z0-9]/)); // null → not a letter or digit

// 5. Shorthand Equivalents

// Brackets can often be replaced with shorthand:

// [0-9] → \d (digit)

// [^0-9] → \D (non-digit)

// [a-zA-Z0-9_] → \w (word char)

// [^a-zA-Z0-9_] → \W (non-word char)

// [ \t\n\r] → \s (whitespace)

// [^ \t\n\r] → \S (non-whitespace)

console.log("5".match(/\d/));   // ["5"]
console.log(" ".match(/\s/));   // [" "]
console.log("!".match(/\W/));   // ["!"]

// 6. Special Characters Inside []

// . loses special meaning → [.] matches a literal dot.

// - inside range means “to” ([a-z]), but at start/end it's literal ([-a]).

// ^ only means "NOT" if first, else literal ([a^b] matches a, ^, or b).

console.log(".".match(/[.]/));    // ["."]
console.log("-".match(/[-a-z]/)); // ["-"]
console.log("a^b".match(/[a^b]/));  // ["^"]