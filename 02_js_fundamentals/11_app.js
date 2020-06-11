const firstName = 'William';
const lastName = "Johnson";
const age = 24;
const str = "Hello, my name is Ritheesh Thomas";
const tags = 'web desing, web development'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val ="Brand ";
val += 'Traversy';

val ='Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait ';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l'); 

// charAt()
val = firstName.charAt('2');
// Get last Char
val = firstName.charAt(firstName.length-1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val =str.replace('Ritheesh', 'Jack');

//includes()
val = str.includes("foo")

console.log(val);