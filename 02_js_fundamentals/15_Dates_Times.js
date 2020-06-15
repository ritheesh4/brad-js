let val;

const today = new Date();
let birthday = new Date('02-10-1994 11:22:00');
birthday = new Date('December 2 1994');
birthday = new Date ('9/10/1981');

val = today.getMonth();
val = today. getDate();
val = today. getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setMinutes(25);

console.log(birthday);
