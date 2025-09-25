//A variable is like a container that stores data.
//In JavaScript, we mainly declare variables using var, let, and const.

//var
// Old way of declaring variables (before ES6).
// Has function scope (accessible inside the function where it’s declared).
// Allows re-declaration and re-assignment.
// Not recommended in modern JS because of some problems like hoisting and leakage outside blocks.

function test(){
    var a=10
    if(true){
        var a=20
        console.log(a)
    }
    console.log(a)
}
test()

// let
// Introduced in ES6 (2015).
// Has block scope (only accessible inside { }).
// Allows re-assignment but not re-declaration in the same scope.
// Preferred over var.

function testBlock() {
    
  if (true) {
    let b=30
    //let b = 30; not possibility of re declare
    const c = 40;
    console.log("Inside block:", b, c); // 30 40
  }
  // console.log(b); ❌ Error: b is not defined
  // console.log(c); ❌ Error: c is not defined
}

testBlock();

// const
// Also introduced in ES6.
// Has block scope like let.
// Cannot be re-assigned or re-declared.
// Must be initialized at the time of declaration.
// Useful for values that should not change (constants).
function testBlock() {
    
  if (true) {
    let b=30
    //let b = 30; not possibility of re declare
    const c = 40;
    //c=40 not possiblity of re assignment
    console.log("Inside block:", b, c); // 30 40
  }
  // console.log(b); ❌ Error: b is not defined
  // console.log(c); ❌ Error: c is not defined
}