// TASK 1

// function printPyramid(character, count){
//     for (let i = 1; i <= count; i++){
//         let spaces = " ".repeat(count - i);
//         let output = character.repeat(2 * i - 1);
//         console.log(spaces + output + spaces);
//     }
// };

// printPyramid("#", 15);



// TASK 2

// const str = "Work in silence, let your builds make the noise"

// function capitalizeWords(str){
//     const words = str.split(" ");
//     for (let i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// console.log(capitalizeWords(str));



// TASK 3

const text = "apple banana apple orange papaya apple banana grape";

// function countWords(str){
//     const words = str.split(" ");
//     const counts = {};
//     for (let i = 0; i < words.length; i++){
//         let word = words[i];
//         if (counts[word]){
//             counts[word] += 1;
//         } else{
//             counts[word] = 1;
//         }
//     }
//     return counts;
// }

// console.log(countWords(text));

// TASK 4

// const num = 12345;

// function sumUpDigits(num){
//     let sum = 0;
//     let str = num.toString();
//     for (let i = 0; i < str.length; i++){
//         let number = Number(str[i]);
//         sum += number;
//     }
//     return sum;
// }

// function sumUpDigits2(num){
//     let sum = 0;
//     let number = num;

//     while (number > 0){
//         let digit = number % 10;
//         sum += digit;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// console.log(sumUpDigits(num));
// console.log(sumUpDigits2(num));




// TASK 5

function isPrime(num){
    if (num <=1) return false;

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(12));
