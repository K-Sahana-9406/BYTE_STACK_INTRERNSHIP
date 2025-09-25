// Types of Quantifiers
// 1. Greedy Quantifiers (default)

// They try to match as many characters as possible.

// Quantifier	Meaning	Example
// *	0 or more	/a*/ → "", "a", "aaa"
// +	1 or more	/a+/ → "a", "aa"
// ?	0 or 1	/a?/ → "", "a"
// {n}	exactly n	/a{3}/ → "aaa"
// {n,}	at least n	/a{2,}/ → "aa", "aaa", ...
// {n,m}	between n and m	/a{2,4}/ → "aa", "aaa", "aaaa"

// ✅ Examples:

console.log("aaa".match(/a*/));    // ["aaa"] → 0 or more
console.log("aaa".match(/a+/));    // ["aaa"] → 1 or more
console.log("abc".match(/a?/));    // ["a"]   → 0 or 1
console.log("aaaa".match(/a{3}/)); // ["aaa"] → exactly 3
console.log("aaaaa".match(/a{2,}/)); // ["aaaaa"] → at least 2
console.log("aaaa".match(/a{2,3}/)); // ["aaa"] → between 2 and 3

// 2. Lazy Quantifiers (non-greedy)

// Add ? after a greedy quantifier → match as few as possible.

// ✅ Example:

let str = "<p>Hello</p><p>World</p>";

console.log(str.match(/<p>.*<\/p>/));  
// ["<p>Hello</p><p>World</p>"] → greedy (captures everything)

console.log(str.match(/<p>.*?<\/p>/)); 
// ["<p>Hello</p>"] → lazy (stops at first </p>)

// 3. Possessive Quantifiers (Java/advanced, not in JS)

// 👉 Just for knowledge: in some languages, *+, ++, ?+, {n,m}+ mean no backtracking allowed.

// JS does not support them yet.

// 🔹 Practical Examples

// Email-like pattern

console.log("user123@gmail.com".match(/\w+@\w+\.\w+/));
// ["user123@gmail.com"]


// \w+ → 1 or more word chars

// @ → literal @

// \w+ → domain name

// \.\w+ → dot + extension

// Match repeating letters

console.log("heeeello".match(/e{2,}/)); 
// ["eeee"] → 2 or more e's


// Phone number (10 digits)

console.log("9876543210".match(/^\d{10}$/));
// ["9876543210"] → exactly 10 digits