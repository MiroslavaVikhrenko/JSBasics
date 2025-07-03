const products = [{name: "laptop", isInStock: true}, {name: "mouse", isInStock: false}]
console.log(products)

const movies = ["Shrek", "Mermaid", ["value1"]]

const numbers = [10, 20]

const array = [20, "str", {name: "Alice", age: 10}]

// typeof // tells you type of var

const instockProducts = products.filter((product) => product.isInStock)
const ProductsOutOfStock = products.filter((product, index) =>  { 
    console.log(index) 
    return !product.isInStock 
})

// console.log(instockProducts)
// console.log(ProductsOutOfStock)

const employees = [
  { name: "Alice", hours: 40, hourlyRate: 500 },
  { name: "Bob", hours: 35, hourlyRate: 600 },
  { name: "Charlie", hours: 25, hourlyRate: 700 },
]; 

function getEmployeePayRoll({name, hourlyRate, hours}) {
  return {
    name,
    totalPay: hours * hourlyRate,
    overtime: hours > 40,
  }
}
employees.push({ name: "David", hours: 46, hourlyRate: 450 })
employees.pop() // removes last element
const index = employees.findIndex() // find index for Bob
employees.splice(index, 1); // deletes from index 0 one lement

function generatePayroll(employees){
  return employees.map(getEmployeePayRoll) // returns new array, does not modify original array
}


// TASK 2 Write a function that sums all the salaries:
const users = [
  { id: 100, name: "Anna", salary: 2345 },
  { id: 101, name: "Bob", salary: 3421 },
  { id: 102, name: "Ava", salary: 1234 },
]; 

const sum = users.reduce((accum, user) => accum + user.salary, 0);
console.log(sum)
// 0, { id: 100, name: "Anna", salary: 2345 }, returns 2345
// 2345, { id: 101, name: "Bob", salary: 3421 }, returns 5766
// 5766, { id: 102, name: "Ava", salary: 1234 }, returns 7000

//homework: from previous homework of arrays find ones where reduce could be used and rewrite with reduce

const users2 = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" }
];
// output: { Delhi: ["Alice", "Charlie"], Mumbai: ["Bob"] }

const usersByCity = users2.reduce((accum, user) => {
  // pseudo code
  // check if accum contains user's city value as a key
  // if yes => just add user,name to accum[user.city] as array element
  // if no => create a new entry to accum object where user.city will be accum[key] 
  // and user.name will be element in array for that key

  if (!accum[user.city]) {
    accum[user.city] = [];
  }
  accum[user.city].push(user.name);

  return accum
}, {})
