// TASK 1 
// Write a function that takes an object as a parameter and returns how many keys are in the object.

const john = {name: "john", age: 30, job: "developer", country: "Canada"};

function countKeys(obj){
    return  Object.keys(obj).length;
}

const keysCount = countKeys(john);
console.log(keysCount);


// TASK 2 Write a function that sums all the numeric values in the object:
const salaries = {
    "Software Engineer": 5400,
     "Product Manager": 5200,
     "CTO": 8000,
     "Data analyst": 4500
};

function summarizeNumericValues(obj){
    let sum = 0;
    for (const key in obj){
        if(typeof obj[key] === "number"){
            sum +=obj[key];
        }
    }
    return sum;
}

const sum = summarizeNumericValues(salaries);
console.log(sum);


// TASK 3 Count how many times each department appears:
const employees = [ 
    { name: "Alice", dept: "HR" }, 
    { name: "Bob", dept: "Engineering" }, 
    { name: "Charlie", dept: "HR" }, 
    { name: "David", dept: "Marketing" } 
];

function countEachDepartment(obj){
    const counts = {};
    for (const employee of employees ){
        const department = employee.dept;
        counts[department] = (counts[department] || 0) + 1; // use 0 as default if first heart of this dept and do + 1
    }
    return counts;
}

const countsOfEachDept = countEachDepartment(employees);
console.log(countsOfEachDept);

// TASK 4 Merge userInput with defaultForm, giving priority to user values.
const defaultForm = {
    name: "Guest",
    email: "guest@example.com",
    theme: "light"
};

function mergeUserInput(defaultForm, userInput){
    return {...defaultForm, ...userInput};
}

const userInput = {
    email: "john@example.com"
};

const mergedForm = mergeUserInput(defaultForm, userInput);
console.log(mergedForm);

// TASK 5 Track which users attended an event. Create an object where each key is a user and value is true false based if present or not
const allUsers = ["Alice", "Bob", "Charlie"];
const present = ["Bob", "Charlie"];

function trackAttendedOrNot(allUsers, present){
    const markedAttendance = {};
    for (const user of allUsers){
        markedAttendance[user] = present.includes(user); // returns true or false
    }
    return markedAttendance;
}

const allUsersWithAttendanceInfo = trackAttendedOrNot(allUsers, present);
console.log(allUsersWithAttendanceInfo);

// TASK 6 Our API returns a list of users. We want to group them by user ID.
const users = [
  { id: 100, name: "Anna" },
  { id: 101, name: "Bob" }
]; 
//Output: { 100: { id: 100, name: "Anna" }, 101: { id: 101, name: "Bob" } }

function groupById(users){
    const usersGroupedById = {};
    for (const user of users){
        usersGroupedById[user.id] = user; // usersGroupedById[user.id] => 100: 
                                        // = user; => { id: 100, name: "Anna" }
    }
    return usersGroupedById;
}

const usersGroupedById = groupById(users);
console.log(usersGroupedById);
