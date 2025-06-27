const user = {
    name: 'James',
    age: 24,
    address: {
        city: 'London',
        country: 'UK',
    },
    getName: function () {
        console.log(this.name)
    }
}

//user.name = 'Julie';
// user.getName();
// user['age'];

// const newUser = {...user}; //nested objects would not be new copy but still by reference
// newUser.name = 'John'
// newUser.address.city = 'Birminghem'
//console.log(user, newUser)

const newUser2 = JSON.parse(JSON.stringify(user)) //deep copy, entire object is new 
newUser2.name = 'Nina'
newUser2.address.city = 'Birminghem'

//console.log(user, newUser2)

console.log(user.hasOwnProperty('name')) // checks if property is directly available on object, not looks up in prototype chain

const obj = Object.create(user, { foo: { value: 42, writable: true } }) // {}
obj.prop2 = 'Property2'
// console.log(obj)
// console.log(obj.foo)

//get all the keys of an object
const objKeys = Object.keys(user)
//get all the keys of an object
const objValues = Object.values(user)
//get all the keys of an object
const objEntries = Object.entries(user)
// console.log('keys: ', objKeys);
// console.log('values: ', objValues);
// console.log('Entries: ', objEntries);

const a = {
    name: 'bob',
    class: 'Japanese'
}

const b = {
    title: 'ABC news',
    publisher: 'James Doe'
}

const grouped = {...a, ...b} // not changing a and b
//const c = Object.assign(a, {...b}); // modifing a. a is a target

console.log("a:",a);
console.log("b:",b);
console.log("grouped:", grouped);