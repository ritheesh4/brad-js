//Create some arrays

const numbers =[43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true, undefined, null , {a:1, b:1}, new Date ()];

let val ;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers [3];
val = numbers [0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(23);

// //MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(12);
// // Take off from end
// numbers.pop();
// // Take of from front
// numbers.shift();
// // Splice values
// numbers.splice(2,3); 
// //Revers
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x,y){
//     return x-y;
// }) 

// //Reverse sort
// val =  numbers.sort(function(x,y){
//     return y-x;
// }) 

// FInd
function over50(num) {
    return num > 50;
}

val = numbers2.find(over50)

console.log(numbers2);
console.log(val);