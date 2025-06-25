const minAge = 18;
const user = {
    name: 'Abi',
    age: 16,
    isEmployed: false
}

const isUserELigible = user.age >= minAge || user.isEmployed

if (isUserELigible) {
    return 'Eligible';
}

const isReal = user.name ? true : false;

for (const prop in user) {
    console.log(`${prop} ${user[prop]}`)
}

const word = 'strawberry';
const charCount = {};

for (const char of word) {
    // if (charCount[char]){
    //     charCount[char] += 1;
    // }
    // else {
    //     charCount[char] = 1;
    // }

    //charCount[char] = (charCount[char]) ? + 1 :  1 ;  
    charCount[char] = (counts[char] || 0) + 1;  
}

