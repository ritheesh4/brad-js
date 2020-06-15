const person ={
    firstName: "Allen",
    lastNmae: 'Joseph',
    age: 35,
    email: 'allen@gmai.com',
    hobbies : ['music','coding'],
    address : {
        city: 'ernakulam',
        state: 'Kerala'
    },
    getBirthYear: function (){
        return 1987 - this.age;
    }
}

let val;
val = person;
// Get specific value
val = person.firstName;
val = person['lastNmae'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();
console.log(val);

const people = [
    {name: 'Ritheesh', age:25},
    {name: 'Nidheesh', age:25},
    {name: 'Armaan', age:24}
];

for (let i = 0; i <people.length; i++){
    console.log(people[i].name);
}