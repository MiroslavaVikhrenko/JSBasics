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

console.log(user, newUser2)