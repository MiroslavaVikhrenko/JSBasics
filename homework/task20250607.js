// Homework, try out all the scenarios with var and then try the same with let and const and note differences

// 1. RE-DECLARE VARIABLES

// var - possible, should be careful
// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);

// // let - not possible (error)
// let b = 3;
// console.log(b);
// //let b = 4;
// console.log(b);

// // const - not possible (error)
// const c = 5;
// console.log(c);
// //const c = 6;
// console.log(c);

// 2. INSIDE and OUTSIDE BLOCK - var OK, const and let - error (not defined outside block)

{
    var a = 10;
    let b = 11;
    const c = 12;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// 3. RE-ASSIGN VALUES (const cannot re-assign, let and var - OK)
// {
//     var a = 10;
//     let b = 11;
//     const c = 12;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     a = 100;
//     b = 110;
//     //c = 120;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
//console.log(b);
//console.log(c);

// Qu-s: 
// const is blue; let and var are white
// Global, Block, Script tabs
// how many scopes? function, block, global?