// TASK 1 You have a list of products. Some are taxable, some aren’t. 
// Write a function generateInvoice(products) that calculates total and applies 18% tax on taxable items
const items = [
  { name: "Laptop", price: 3200, taxable: true },
  { name: "Book", price: 20, taxable: false },
  { name: "Headphones", price: 29, taxable: true }
];

function generateInvoice(products){
    const tax = 0.18;
    let total = 0;

    for (const product of products){
        total += product.price;
        if (product.taxable){
            total += product.price * tax;
        }
    }

    return total;
}

const invoice = generateInvoice(items);
console.log(invoice);


// TASK 2 There are users with roles. Write a function canAccess(user, action) that returns true or false 
// depending on whether the user’s role includes the action.

const user = { name: "Alice", role: "admin" };
const user2 = { name: "Kate", role: "viewer" };

const permissions = {
  admin: ["create", "read", "update", "delete"],
  editor: ["read", "update"],
  viewer: ["read"]
};

function canAccess(user, action){
    return permissions[user.role].includes(action);
}

console.log(canAccess(user, "create"));
console.log(canAccess(user2, "create"));


// TASK 3  Validate user input. Write a function validateData(data) that returns a list of  
// empty fields or invalid input with notice that a field is required or data is invalid. 
const formData = {
  name: "Alex", //required
  email: "notvalidemail", //required 
  age: null,
  username: "user123",
  password: "", //required
}; // [{field: "email", msg: "Invalid email format"}, {field: "password", msg: "password can not be empty"}]

function validateData(data){
    const failedValidationArray = [];

    const requiredFields = ["name", "email", "password"];

    for (const field of requiredFields){
        if (data[field] === null || data[field] === undefined || data[field] === ""){
            failedValidationArray.push({field, msg: `${field} can not be empty`});
        }
    }

    // https://regexr.com/3e48o

    if (data.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        failedValidationArray.push({field: "email", msg: "Invalid email format"});
    }

    return failedValidationArray;
}

console.log(validateData(formData));

// TASK 4  Employee Payroll Summary: Write a function generatePayroll(employees) that: 
// * calculates total pay for each employee, 
// * flags if someone worked overtime (over 40 hours)
// *  returns summary object

const employees = [
  { name: "Alice", hours: 40, hourlyRate: 500 },
  { name: "Bob", hours: 35, hourlyRate: 600 },
  { name: "Charlie", hours: 25, hourlyRate: 700 }
]; // [ { name: "Alice", totalPay: 20000, overtime: false }, ...]

// VER 1
function generatePayroll(employees){
    const summary = [];

    for (const employee of employees){
        const totalPay = employee.hours * employee.hourlyRate;
        const workedOvertime = employee.hours > 40;

        const employeeSummary = {
            name: employee.name,
            totalPay: totalPay,
            overtime: workedOvertime
        };

        summary.push(employeeSummary);
    }
    return summary;
}

console.log(generatePayroll(employees));

// VER 2
// https://www.w3schools.com/jsref/jsref_map.asp

function generatePayroll2(employees){
    return employees.map(formEmployeeEntry);
}

function formEmployeeEntry(employee){
    return {
        name: employee.name,
        totalPay: employee.hours * employee.hourlyRate,
        overtime: employee.hours > 40
    }
}

console.log(generatePayroll2(employees));

// VER 3
function generatePayroll3(employees){
    return employees.map(employee => {
        const totalPay = employee.hours * employee.hourlyRate;
        const overtime = employee.hours > 40;
        return {
            name: employee.name,
            totalPay: totalPay,
            overtime: overtime
        }
    })
}

console.log(generatePayroll3(employees));

// TASK 5 Create an array of random numbers, write a function to: 
// * Filter out even numbers. 
// * Return a new array with each number squared. 
// Hint: you can use numbers.map & numbers.filter also arithmetic operators % and **

const numbers = [];

// https://www.w3schools.com/JS/js_random.asp
//Math.random() always returns a number lower than 1.
//Math.random() used with Math.floor() can be used to return random INTEGERS.
function populateArray(size, array){
    for (let i = 0; i < size; i++){
        array.push(Math.floor(Math.random() * 101)) // Returns a random integer from 0 to 100
    }
}

populateArray(10, numbers);
console.log("original array: ", numbers);

// https://www.w3schools.com/jsref/jsref_filter.asp
function filterOutEvenNumbers(numbers){
    const oddArray = numbers.filter(number => number % 2 !==0); // keep only odd numbers
    return oddArray;
}

const oddArray = filterOutEvenNumbers(numbers);
console.log("only odd numbers: ", oddArray);

function squareNumbers(numbers){
    // https://www.w3schools.com/js/js_operators.asp
    const squareArray = numbers.map(number => number **2);
    return squareArray;
}

const squareArray = squareNumbers(oddArray);
console.log("square numbers: ", squareArray);


// TASK 6 Library App. Write functions to:
// List all books.
// Borrow a book (find a book in the list by title and update isAvailable to false).
// Return a book (find a book in the list by title and update isAvailable to true).
//             Hint: use books.find method to find a book in array 

const books = [ 
    { title: "1984", author: "George Orwell", isAvailable: true }, 
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }, 
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: false } 
];

function listBooks() {
    //foreach book log book title, author and is available or not
    console.log("Library catalog:");
    // https://www.w3schools.com/jsref/jsref_forEach.asp
    books.forEach(displayIndividualBook);
}

function displayIndividualBook(book){
    const status = book.isAvailable ? "Available" : "Not available";
    console.log(`>>> "${book.title}" by ${book.author} - ${status}`);
}

function borrowBook(title) { 
    // https://www.w3schools.com/jsref/jsref_find.asp
    const book = books.find(book => book.title === title);
    if (!book){
        console.log(`Book "${title}" was not found.`);
    }
    else if (!book.isAvailable){
        console.log(`Book "${title}" is not available now.`);
    }
    else{
        book.isAvailable = false;
        console.log(`You successfully borrowed book "${title}".`);
    }

}
function returnBook(title) { 
    const book = books.find(book => book.title === title);
    if (!book){
        console.log(`Book "${title}" was not found.`);
    }
    else if (book.isAvailable){
        console.log(`Book "${title}" is already returned.`);
    }
    else{
        book.isAvailable = true;
        console.log(`You successfully returned book "${title}".`);
    }
}

listBooks(); 
borrowBook("1984"); 
returnBook("1984");

