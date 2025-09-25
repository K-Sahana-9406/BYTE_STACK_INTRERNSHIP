// Definition of Asynchronous JavaScript

// Asynchronous JavaScript allows code to run without blocking the execution of other operations.
// It means JavaScript can start a task (like fetching data, waiting for a timer, or reading a file), and continue executing other code while waiting for that task to finish.
// 👉 This is important because JavaScript is single-threaded (executes one line at a time). Asynchronous behavior lets it handle tasks like timers, API calls, and events efficiently.
// 🔹 Methods of Asynchronous JavaScript

// 1. Callback

// A callback is a function passed as an argument to another function, and executed after the task is completed.
// Used in early async programming.


function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

// function sayBye() {
//   console.log("Goodbye!");
// }

greet("Sahana", ()=>{
    console.log("Goobye")
});

// Hello Sahana
// Goodbye!

// 2. Promise

// A Promise is an object that represents the future result of an asynchronous operation.
// It has 3 states: pending → fulfilled → rejected.
// isHalwaThere=false
// function waitInQueue(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(isHalwaThere){
//                 resolve("1/2 kg halwa")
//             }
//             else{
//                 reject("halwa finished")
//             }
//         },2000);
//     })
// }
// function buyHalwa(){
//     waitInQueue().then((m)=>{
//         console.log(m)
//     }).catch((err)=>{
//         console.log(err)
//     }).finally(()=>{console.log("Go Home")})
// }
// buyHalwa()
// console.log("Halwa Wale")

// Halwa Wale
// halwa finished
// Go Home
// 3. async/await

// async/await is syntactic sugar built on top of Promises.
// async makes a function return a Promise.
// await pauses execution until the Promise resolves.
// Makes async code look like synchronous code (cleaner).
isHalwaThere=false
function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwaThere){
                resolve("1/2 kg halwa")
            }
            else{
                reject("halwa finished")
            }
        },2000);
    })
}
async function buyHalwa(){
    try{
        let res=await waitInQueue();
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("Go Home")
    }
}
buyHalwa()
console.log("Halwa Wale")