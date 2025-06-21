// var - older, function scope variables, can be reassigned / re-declared multiple times
    // problem with var: you can RE-DECLARE and overwrite variables accidentally => don't use
// let, cont - block scope (if/loop...)

// var - hoisted, but initialized to undefined
// var allows to use variable BEFORE we declare it 
// let, const - hoisted, but not initialized (TDZ - Temporal Dead Zone)
console.log(varVariable);
var varVariable = 'true'; // undefined (no error)

console.log(a); // undefined (no error)
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

// const - assignment is final, cannot reassign, but you can change properties
// const must be assigned immediately(!) and cannot be reassigned later
// let - you can initiallize later, not necessarily during declaration

// var, let - re-assignment allowed
// const - re-assignment not allowed (immutable reference)


//--------------------

const firstName = 'Miro'; // constant value, can not be reasigned.  block scope
let country = 'Canada'; // value can change. block scope
var subject = 'Math'; // old way to declare variables. global scope

country = 'US';

// CMD vs PowerShell 
// using a Windows CMD command (type NUL > index.js) in PowerShell, which interprets it differently.
// Alternatives (PowerShell-native)
    // "" | Out-File index.js
    // Set-Content example2.js ""
    // Open CMD (not PowerShell).
//Or in PowerShell, explicitly invoke cmd:
    // cmd /c "type NUL > example3.js"
