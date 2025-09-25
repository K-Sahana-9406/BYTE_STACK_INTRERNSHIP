// 🔹 Creating a RegExp

// You can create a regex in two ways:

// Literal way
let regex1 = /^\d{10}$/;

// Using RegExp object constructor
let regex2 = new RegExp("^\\d{10}$");


// Both mean the same thing.

// 🔹 RegExp Object Properties

// Here are the most important ones:

// 1. source

// Returns the pattern of the regex as a string.

let re = /\d{3}/;
console.log(re.source);  
// "\d{3}"

// 2. global (g flag)

// Boolean → true if the regex has the g (global) flag, otherwise 
// false.

let re1 = /hello/g;
let re2 = /hello/;
console.log(re1.global); // true
console.log(re2.global); // false

// 3. ignoreCase (i flag)

// Boolean → true if the regex has the i (case-insensitive) flag.

let re3 = /hello/i;
console.log(re3.ignoreCase); // true

// 4. multiline (m flag)

// Boolean → true if the regex has the m (multiline) flag.

let re4 = /^hi/m;
console.log(re4.multiline); // true

// 5. dotAll (s flag)

// Boolean → true if regex has the s flag, which allows . 
// to also match newline \n.

let re5 = /hi.world/s;
console.log(re5.dotAll); // true

// 6. unicode (u flag)

// Boolean → true if regex has the u flag, meaning it’s using 
// Unicode mode.

let re6 = /\u{61}/u;  // matches "a"
console.log(re6.unicode); // true

// 7. sticky (y flag)

// Boolean → true if regex has the y flag (sticky search).

// Sticky means matching must start exactly at lastIndex.

let re7 = /hello/y;
console.log(re7.sticky); // true

// 8. lastIndex

// A number indicating the position at which to start the next 
// match (used with exec() and global/sticky regex).

let re8 = /\d+/g;
let str = "123 456";
console.log(re8.lastIndex);   // 0 (initial)
re8.exec(str);                // finds "123"
console.log(re8.lastIndex);   // 3 (moves after first match)