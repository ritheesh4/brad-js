//1. concatination

let a = 3 + "44"; // output string 344
let b = "3" + 5; //outpu string 35

//2. arithemtic operators with different data types

let multi = 3 * "4"; //Here, JavaScript converts the sstring "4" to the nubmer 4, and multiplies it by 3, resulting in 12.

let divi = 80 / "10"; // Here the string "10" is converted to the number 10. THen 80 is divided by the nubmer 10, resulting in 8;

let mini = "10" - 5; // With minus, the "10" is converted to the number 10, so we have 10 minus 5, which is 5.

// Inerpretaion
let order = 1 + 2 + "pizzas";// Answer "3 pizzas"
let order = 1 + (2 + "pizzas");// Answer "12pizzas"
