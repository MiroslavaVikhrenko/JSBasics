console.log('Hello JS!')

console.log(globalA);
var globalA = 10;
console.log(globalA);

function displayHello() {
    console.log('Hello from displayHello function!', globalA);
    globalA = 20;
}
displayHello();
console.log(globalA);

{
    // inside a block we can combine multiple statemnents inside a block 
    // where JS expects a single statement
    let localA = 30;
    var globalB = 20;
    console.log(localA)
}

console.log(localA)

//look up execution context and 2 phases

//Scenarios where `var` can go wrong
// It does not error when rediclared 
var a = 10;
var a = 20; // can create problems if we are not careful

console.log(b); // undefined (no error)
var b = 10;

// var gets shadowed inside a block.
var c = 100;
{
    var c = 1;
}
console.log(c); // 1, not 100, it has been shadowed. as variables declared by var sits in global scope

// Homework, try out all the scenarios with var and then try the same with let and const and note differences

if (true) {
    console.log('It\'s true');
}