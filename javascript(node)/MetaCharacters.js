// 🔹 Categories of MetaCharacters
// 1. Dot (.)

// Matches any single character except newline (\n).

// With s modifier, it matches newline too.

// // ✅ Example:

console.log("cat".match(/c.t/));   // ["cat"] → any char between c & t
console.log("cut".match(/c.t/));   // ["cut"]
console.log("ct".match(/c.t/));    // null (needs one char between)

// 2. Character Classes

// Shortcuts for common sets of characters.

// Meta	Equivalent	Meaning
// \d	[0-9]	digit
// \D	[^0-9]	non-digit
// \w	[a-zA-Z0-9_]	word char
// \W	[^a-zA-Z0-9_]	non-word char
// \s	[ \t\r\n\f]	whitespace
// \S	[^ \t\r\n\f]	non-whitespace

// ✅ Example:

console.log("123".match(/\d/g));   // ["1","2","3"]
console.log("abc!".match(/\W/));   // ["!"]
console.log("hi there".match(/\s/)); // [" "]

// 3. Anchors (Position Matchers)

// ^ → match at start of string/line

// $ → match at end of string/line

// \b → word boundary (between \w and \W)

// \B → non-word boundary

// ✅ Example:

console.log("Hello".match(/^H/));   // ["H"] → starts with H
console.log("Hello".match(/o$/));   // ["o"] → ends with o
console.log("word!".match(/\bword/)); // ["word"] → at boundary
console.log("sword".match(/\bword/)); // null → not at boundary
console.log("word!".match(/\bword/));  
// ["word"] → "word" is at the start of a word (before it is a boundary: start of string)

console.log("sword".match(/\bword/));  
// null → "word" is not at a boundary (before it is "s", which is also a word char)

console.log("the word is here".match(/\bword\b/));  
// ["word"] → surrounded by spaces (word boundaries)

console.log("word123".match(/\bword/));  
// ["word"] → matches at the start, because before "w" is a boundary (start of string)
console.log("sword".match(/\Bword/));  
// ["word"] → because before "w" is "s" (both are word chars, so no boundary)

console.log("word".match(/\Bword/));  
// null → "word" starts at the beginning (a boundary)

console.log("middleword".match(/word\B/));  
// null → "word" ends at boundary (end of string)

console.log("wordplay".match(/word\B/));  
// ["word"] → "word" is followed by "p" (word char), so not at boundary

// 4. Escaping Special Characters

// Metacharacters like . ^ $ * + ? ( ) [ ] { } | \
// → If you want to match them literally, escape with \.

// ✅ Example:

// console.log("3+5".match(/\+/));     // ["+"]
// console.log("price$".match(/\$/));  // ["$"]
// console.log("a.b".match(/\./));     // ["."]

// 5. Quantifier MetaCharacters

// (we covered them separately but they are also metacharacters)

// * → 0 or more

// + → 1 or more

// ? → 0 or 1

// {n} → exactly n

// {n,} → n or more

// {n,m} → between n and m

// ✅ Example:

console.log("goooal".match(/o+/));   // ["ooo"]
console.log("colou?r".match("color"));  // ["color"] → u optional

// 6. Grouping and Alternation

// (abc) → capturing group

// (?:abc) → non-capturing group

// | → OR operator

// ✅ Example:

console.log("bat".match(/b(at|it)/));  // ["bat"]
console.log("bit".match(/b(at|it)/));  // ["bit"]
console.log("cat".match(/(?:cat)/)); // ["cat"]

// 7. Lookaround MetaCharacters

// Special zero-width assertions.

// (?=...) → positive lookahead

// (?!...) → negative lookahead

// (?<=...) → positive lookbehind

// (?<!...) → negative lookbehind

// ✅ Example:

console.log("apple".match(/app(?=le)/));   // ["app"] → followed by "le"
console.log("apple".match(/app(?!le)/));  // null
console.log("apple".match(/(?!ap)ple/));   // ple
console.log("100USD".match(/(?<=100)USD/)); // ["USD"] → preceded by 100