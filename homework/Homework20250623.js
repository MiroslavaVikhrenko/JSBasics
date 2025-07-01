// TASK 1 Print Even Numbers from 1 to 50 (Use for loop and adjust starting point and incremental values)

// version 1
// for (let i = 1; i <= 50; i++ ){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// version 2
// for (let i = 2; i <= 50; i +=2 ){
//     console.log(i);
// }


// TASK 2 Reverse a String (This is to practice for loop with backwards loop)

// const str = "hello";
// let reversed = "";

// version 1
// for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
// }

// // version 2
// for (const char of str){
//     reversed = char + reversed; 
// }
// console.log(reversed);



// TASK 3 Find Max Number in an Array

// const numbers = [35, 13, 78, 4, 99];
// let max = numbers[0];

// for (const number of numbers){
//     if (max < number){
//         max = number;
//     }
// }

// console.log(max);


// TASK 4 Create an object as per your liking and loop through its properties and values

// const person = {
//     name: "Mira",
//     age: 36,
//     country: "Canada",
//     job: "engineer"
// };

// for (const prop in person){
//     console.log(`${prop} : ${person[prop]}`)
// }


// TASK 5  Print each character name using `for of` loop

// const heroes = ["Spider-Man", "Batman", "Iron Man"];

// for (hero of heroes){
//     console.log(hero)
// }


