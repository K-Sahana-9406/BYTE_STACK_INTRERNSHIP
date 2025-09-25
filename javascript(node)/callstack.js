// 1. JavaScript Execution Model
// JavaScript is single-threaded → it can only execute one task at a time.
// It uses the Call Stack to manage execution.
// For handling async tasks (like setTimeout, promises, events), JavaScript uses the Event Loop with Task Queue (Callback Queue)
//  and Microtask Queue.


//  2. Call Stack
// A stack (LIFO → Last In, First Out) where JS keeps track of function execution.
// When a function is called, it’s pushed onto the stack.
// When it returns, it’s popped off the stack.

// code:
function a() {
  console.log("Inside a");
  b();
}
function b() {
  console.log("Inside b");
}
a();

// Execution Flow:

// a() pushed → runs → logs "Inside a"
// b() pushed → runs → logs "Inside b"
// b() popped → return to a
// a() popped → program ends


// 1. Blocking Code (Synchronous)
// JavaScript has one Call Stack → it can only do one thing at a time.
// If you run code that takes too long, nothing else can run until it finishes → this is called blocking.

// example:
console.log("Start");

// Blocking task (takes 5 seconds)
let startTime = Date.now();
while (Date.now() - startTime < 5000) {
  // Busy waiting (JS stuck here for 5 seconds)
}
console.log("End");

// output:
// Start
// (wait 5 seconds)
// End

// Problem: During those 5 seconds, the browser cannot do anything else:
// No button clicks
// No animations
// No async tasks processed
// Because the call stack is busy.

// 2. Non-Blocking Code (Asynchronous)

// Instead of freezing the thread, we let the browser handle long 
// tasks in background (via async).

// 📌 Example 

console.log("Start");

setTimeout(() => {
  console.log("Done after 5 seconds");
}, 5000);

console.log("End");


// 👉 Output:
// Start
// End
// Done after 5 seconds


// "Start" prints
// setTimeout tells browser: "Wait 5 seconds, then run this callback"
// "End" prints immediately
// After 5 sec, Event Loop pushes "Done after 5 seconds"

// If a function takes too long (e.g. while loop for 10 seconds), 
// JS cannot do anything else → because only one call stack.

// 4. Event Loop
// The Event Loop is the mechanism that:
// Looks at the Call Stack.
// If stack is empty, it checks:
// Microtask Queue (Promises, MutationObserver).
// Callback Queue (Task Queue) (setTimeout, setInterval, DOM events, etc).
// Moves tasks into the stack for execution.


console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 1000);

setTimeout(() => {
  console.log("Timeout 2");
}, 500);

setTimeout(() => {
  console.log("Timeout 3");
}, 0);

console.log("End");
 
// output
// Start
// End
// Timeout 3
// Timeout 2
// Timeout 1



console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

// output;
// Start
// End
// Promise resolved
// setTimeout callback

// Execution Order:
// "Start"
// "End"
// Promise callback (Microtask Queue has higher priority)
// Timeout callback (from Callback Queue)

// 7. Visualizing the Flow

// Call Stack: Where JS runs code.
// Web APIs (Browser): Handle timers, HTTP requests, etc.
// Callback Queue: Stores async callbacks (setTimeout, setInterval).
// Microtask Queue: Stores promise callbacks (executed first).
// Event Loop: Keeps checking → if stack is empty → takes tasks from queues.

// Call Stack → Microtask Queue → Callback Queue