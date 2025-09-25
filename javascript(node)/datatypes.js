// Number Datatype in JavaScript

// In JavaScript, all numeric values (both integers and floating-point) are represented using the Number datatype.
// Unlike some other languages (like Java with int, float, double), JavaScript has only one number type.

let a = 42;           // integer
let b = 42.5;         // float
let c = 0.1 + 0.2;    // floating-point precision issue
let d = 1 / 0;        // Infinity
let e = "hi" * 2;     // NaN

console.log(a, typeof a); // 42 "number"
console.log(b, typeof b); // 42.5 "number"
console.log(c);           // 0.30000000000000004
console.log(d);           // Infinity
console.log(e);           // NaN
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//symbol
// A Symbol is a primitive data type in JavaScript (introduced in ES6).
// It is used to create unique identifiers for object properties.
// Every Symbol value is completely unique, even if two symbols have the same description.
// ✅ Why do we need Symbols?
// In JavaScript, object keys are usually strings (or numbers automatically converted to strings).
// But sometimes you want to add a property to an object without risking name conflicts.
// Symbols let you create hidden, unique keys that won't clash with other keys.

let id1 = Symbol("id"); 
let id2 = Symbol("id");
console.log(id1.description) //id
console.log(id1 === id2); // false (even though description is same)
user={
    name:"sahana",
    age :19,
    [id1]:101,
    [id2]:102
}
for (let key in user){
    console.log(key) //only name,age come...symbols hidden
}

let s1 = Symbol.for("app.key");
let s2 = Symbol.for("app.key");

console.log(s1 === s2); // true (same symbol)
// Symbol("id") → always creates a new unique symbol.
// Symbol.for("id") → checks global registry, reuses if already exists

//undefined
// undefined is a primitive datatype in JavaScript.

// It means: a variable has been declared but not yet assigned any value.
// It is the default value for:
// 1.Uninitialized variables
           let x;
           console.log(x);        // undefined
           console.log(typeof x); // "undefined"

// 2.Missing object properties
           let user = { name: "Sahana" };
           console.log(user.age);  // undefined (property does not exist)

// 3.Missing function arguments
           function greet(name) {
           console.log("Hello " + name);
           }
           greet();  // Hello undefined

// 4.A function with no return statement
           function add(a, b) {
           let sum = a + b;
           // no return
        }
            let result = add(2, 3);
            console.log(result); // undefined


            // //1.String

// let str = "hello"
// console.log(str)
// console.log(str.length)
// console.log(str[0])

// str[0]="j"// it wont get changed
// console.log(str)

// const name="gokila"
// console.log(This is ${name})//``backticks are known as template literals it u want to insert any values inside the backticks you can use $symbol
// console.log(typeof name)

// 2.Boolean
// const ans = (18>19)
// console.log(ans)
// let log = true;
// console.log(typeof log)


// 3.Null

// let name = null
// console.log(name)


// 4.Array

// let arr = ["apples","banana","grapes"]
// console.log(arr)
// let array = new Array(1,2,3,4,5)
// console.log(array)
// let empty=[]
// console.log(empty)
// console.log(array[0])
// console.log(arr[0])

// let arr=[1,2]
// arr.push(3);
// arr.unshift(0)
// console.log(arr)

// let arr=[0,1,2,3,4,5,6]
// arr.pop()
// arr.shift()
// console.log(arr)
// arr[3]=30
// console.log(arr)

// let nums = [5, 2, 8, 1,2];
// console.log(nums.length); 
// console.log(nums.indexOf(2));
// console.log(nums.lastIndexOf(2))
// console.log(nums.indexOf(10));
// console.log(nums.lastIndexOf(15));
// console.log(nums.includes(10)); // false
// console.log(nums.reverse())
// nums.sort(); // sorts ascending
// console.log(nums); // [1, 2, 5, 8]
// console.log(nums.join())


// forEach
// let arr=[1,2,3]
// arr.forEach((x,index)=>{
//     console.log(index ${index}:${x})
// })

// map
// let arr=[1,2,3]
// let ne = arr.map((x)=>x*2)
// console.log(ne)

// filter
// let arr=[1,2,3,4,5]
// let ans = arr.filter((x)=>(x>2))
// console.log(ans)

// reduce
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, x) => acc + x, 0);
// console.log(sum); // 10

// reduceright
// let arr = ["a", "b", "c"];
// let combined = arr.reduceRight((acc, x) => acc + x, "");
// console.log(combined); // "cba"

// every
// let arr = [2, 4, 6];
// let allEven = arr.every(x => x % 2 === 0);
// console.log(allEven); // true

// let arr2 = [2, 3, 4];
// console.log(arr2.every(x => x % 2 === 0)); // false

// some
// let arr = [1, 3, 4];
// let hasEven = arr.some(x => x % 2 === 0);
// console.log(hasEven); // true (because 4 is even)

// let arr2 = [1, 3, 5];
// console.log(arr2.some(x => x % 2 === 0)); // false



// What is Array Destructuring?
// Definition: Array destructuring allows you to extract values from an array and assign them to variables in a single statement.
// Makes code cleaner and more readable.


// Syntax
// let [var1, var2, var3] = array;

// let arr = [10, 20, 30];
// let [a, b, c] = arr;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// skipping values
// let arr = [1, 2, 3, 4];
// let [first, , third] = arr;
// console.log(first); // 1
// console.log(third); // 3

// default values
// let arr = [5];
// let [x = 10, y = 20] = arr;
// console.log(x); // 5  (from array)
// console.log(y); // 20 (default, since no second element)

// swapping
// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1


// using functions
// function getScores() {
//   return [70, 80, 90];
// }
// let [math, science, english] = getScores();
// console.log(science); // 80

// using rest operator
// let arr = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = arr;
// console.log(first);  // 1
// console.log(second); // 2
// console.log(rest);   // [3, 4, 5]

// Functions in JavaScript
// Functions are blocks of code designed to perform a particular task. They can take inputs (parameters), perform operations, and optionally return a value.

// There are three main types of functions in JS:
// Function Declaration
// Function Expression
// Arrow Function

// Function declaration
// It’s a normal function declared using the function keyword.
// Has its own name.
// Hoisted, so you can call it before it appears in the code.

// hoisted
// console.log(add(2,3)); // ✅ Works 5
// function add(a, b) {
//   return a + b;
// }


// function add(a, b) {
//   return a + b;
// }
// console.log(add(2,3)); // ✅ Works 5


// Function Expression
// A function stored in a variable.
// Can be anonymous (no name) or named.
// Not hoisted, so you cannot call it before declaration.

// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(2,3)); // ✅ Works//5


// Arrow Function in JavaScript
// 1️⃣ Definition
// Arrow functions (=>) are a shorter syntax for writing functions introduced in ES6 (2015).
// They are always expressions, usually stored in variables or constants.
// Designed for concise functional programming and callbacks.

// Basic syntax
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); // 5

// single value-implicit return 
// const add = (a, b) => a + b; //no need of brackets 
// console.log(add(2, 3)); // 5

// multiple value-explicit return
// const add = (a, b) => {
//   console.log("Adding numbers");
//   return a + b; // ✅ explicit return
// };
// console.log(add(2, 3)); 
// Output:
// Adding numbers
// 5

// braces but no return-so undefined
// const add = (a, b) => {
//   a + b; // no return
// };
// console.log(add(2, 3)); // undefined


// using paranthesis to explicitly return an object
// const createPerson = (name, age) => ({ name, age });
// console.log(createPerson("Alice", 25)); 
// { name: "Alice", age: 25 }

// features of arow function
// 1. Lexical this
// Arrow functions do not have their own this.
// this refers to the context where the arrow function is defined, not called.

// const obj = {
//   value: 100,
//   regular: function() { console.log(this.value); },
//   arrow: () => console.log(this.value)
// };
// obj.regular(); // 100
// obj.arrow();   // undefined (this points to outer scope)


// No arguments Object
// Arrow functions do not have their own arguments object.
// Use rest parameters (...args) instead.

// const sum = (...args) => args.reduce((a, b) => a + b, 0);
// console.log(sum(1, 2, 3, 4)); // 10

// Cannot be Used as Constructors
// const Person = (name) => { this.name = name; }
// const p = new Person("Alice"); // ❌ TypeError: Person is not a constructor

// rest parameters
// const sumAll = (...nums) => nums.reduce((total, n) => total + n, 0);
// console.log(sumAll(1,2,3,4,5)); // 15