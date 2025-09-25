// What is an Object in JavaScript?
// An object is a collection of key–value pairs.
// Keys (also called properties) are usually strings (or symbols).
// Values can be any data type: number, string, boolean, array, function, or even another object.

// Creating Objects
// There are different ways to create objects:

// 1. Using Object Literal {} (most common)
let user2 = {
  name: "Sahana",
  age: 21,
  isStudent: true
};

console.log(user2.name); // "Sahana"

// 2. Using new Object()
let user1 = new Object();
user1.name = "Sahana";
user1.age = 21;

console.log(user1); // { name: "Sahana", age: 21 }

// 3. Using Constructor Function
function User(name, age) {
  this.name = name;
  this.age = age;
}

let u1 = new User("Sahana", 21);
console.log(u1); // User { name: "Sahana", age: 21 }

// 4. Using class (ES6 syntax)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let u2 = new User("Sahana", 21);
console.log(u2); // User { name: "Sahana", age: 21 }


// ✅ Creating an object using literal
let user = {
  // Properties
  name: "Sahana",
  age: 21,
  isStudent: true,

  // Nested object
  address: {
    city: "Perambalur",
    pincode: 621212
  },

  // Method (normal function)
  greet: function() {
    return `Hello, my name is ${this.name}`;
  },

  // Method (shorthand)
  getAge() {
    return `I am ${this.age} years old`;
  }
};

// ✅ Adding new property after creation
user.college = "GCT";

// ✅ Adding a symbol property (hidden, unique)
let secretId = Symbol("id");
user[secretId] = 12345;

// ✅ Adding a method later
user.showDetails = function() {
  return `${this.name} from ${this.address.city}, studying at ${this.college}`;
};

// ✅ Using built-in object methods
console.log("Keys:", Object.keys(user));      // normal keys
console.log("Values:", Object.values(user));  // values
console.log("Entries:", Object.entries(user));// [key, value] pairs

// ✅ Iterating over keys
for (let key in user) {
  console.log(key, ":", user[key]);
}
// (Symbol property won’t show here)

// ✅ Accessing everything
console.log(user.greet());      // Hello, my name is Sahana
console.log(user.getAge());     // I am 21 years old
console.log(user.showDetails()); // Sahana from Perambalur, studying at GCT
console.log(user[secretId]);    // 12345 (hidden property)

//crud in objects

let car = { brand: "Toyota" };

// Add
car.model = "Innova";

// Update
car.brand = "Honda";

// Delete
delete car.model;

console.log(car); // { brand: "Honda" }


// What is Object Destructuring?

// In JavaScript, object destructuring allows you to unpack values from an 
// object into variables in a simple and readable way.


// Features of Object Destructuring
// 1. Basic Destructuring
const car = { brand: "Tesla", model: "X" };
const { brand, model } = car;

console.log(brand); // Tesla
console.log(model); // X

// 2. Renaming Variables
const user = { id: 101, username: "sahana_k" };
const { username: u } = user;
console.log(u); // sahana_k

// 3. Default Values
const student = { name: "Reshmi" };
const { name, grade = "A" } = student;
console.log(name);  // Reshmi
console.log(grade); // A (default since grade not in object)

// 4.Nested Destructuring

const employee = {
  id: 1,
  details: {
    dept: "IT",
    role: "Developer"
  }
};

const { details: { dept, role } } = employee;

console.log(dept); // IT
console.log(role); // Developer

// 5. Destructuring with Rest (...)
const book = { title: "JS Guide", author: "MDN", year: 2025 };

const { title, ...rest } = book;

console.log(title); // JS Guide
console.log(rest);  // { author: "MDN", year: 2025 }
// 
//6. Destructuring in Function Parameters

function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

const user = { name: "Sahana", age: 21, city: "Coimbatore" };

printUser(user); // Sahana is 21 years old

