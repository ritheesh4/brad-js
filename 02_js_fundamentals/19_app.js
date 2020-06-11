// FOR LOOP

// for (let i =0; i <10; i++) {

//     if (i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number ' + i);
// }

// WHILE LOOP

// let i =0;

// while (i < 10) {
//     console.log('Number ' + i);
//     i++;

// }

//DO WHILE

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while (i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i =0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//FOREACH
// cars.forEach(function (car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

//MAP
// const users = [
//     { id: 1, name: 'Allen' },
//     { id: 2, name: 'Nidheesh' },
//     { id: 3, name: 'Ritheesh' }
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);  

// FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);

}