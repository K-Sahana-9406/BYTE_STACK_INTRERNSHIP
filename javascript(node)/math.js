// What are ES Modules?
// ES Modules (ECMAScript Modules) allow us to split our code into multiple files.
// Instead of writing everything in one file, we can export pieces of code (functions, variables, classes) and import them where needed.
// This makes code modular, reusable, and easier to maintain.

// There are two main ways to export:

// Named Exports
// Default Exports

//named exports
export const add = (a,b)=>a+b
export const multiply = (a,b)=>a*b

//default export
 const value = (name)=> console.log(`This is ${name}`)
 export default value;

export const pi = 3.14
export const squarre = (x)=> x*x