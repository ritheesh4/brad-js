// 1.  x;
// if (x === undefined) {
//     console.log(x)
//   console.log("x isn’t defined! just deal with it!");
// }

//2. let x
// let x;
// if (x === undefined) {
//   console.log(x);
//   console.log("x isn’t defined! just deal with it!");
// }

// 3. object
// let customer = {
//   name: "Jenny",
// };
// if (customer.phoneNumber === undefined) {
//   console.log(customer.phoneNumber)
// }

// let test10 = null;
// console.log(typeof test10);

// // 4. Checking NaN
// if (myNum == NaN) {  //=> WRONG. This would not work.
//   myNum = 0;
// }

// if (isNaN(myNum)) { //=>right method
//   myNum = 0;
// }

// let test1 = 0/0;
// console.log(typeof test1)

// 5. Passing string into NaN
// let testString ="hello"
// if(isNaN(testString)){
//   console.log("worked")
// }

//6. Inifinty
// let result = 10/0;
//  console.log(result);
//  if(result === Infinity){
//    console.log("we can chekc the values is infinite or not")
//  }

// 7. Inifinty - infinty = NaN
// console.log(Infinity - Infinity);

// console.log(typeof (Infinity - Infinity));

//8. Typeof null
// console.log(typeof (null))

//9. Combinations

// console.log(true === 1);
// console.log(99 === "99");
// console.log(undefined === null);

// console.log(0 === +"");
// // console.log((1 = +2));
// let result =2;
// result =- 2;
// console.log(result)

// Truthy or falsey

// Falsey
let testThis;
if (testThis) {
  console.log("testThis is true");
  // do something
}

let element = null;
if (element) {
  console.log("element working");
}

if (0) {
  console.log("0 working");
}

if ("") {
  console.log(" space working");
}

if (NaN) {
  console.log("NaN working");
}

// Truthy

if ([]) {
  console.log("empty array");
}

// let element = document.getElementById("elementThatDoesExist");
if (element) {
  console.log("element");
}

if (1) {
  console.log("1");
}

let string = "mercy me";
if (string) {
  console.log("string");
}
