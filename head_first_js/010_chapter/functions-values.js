function quack(num) {
  for (let i = 0; i < num; i++) {
    console.log("Quack!");
  }
}
let fly = function (num) {
  for (let i = 0; i < num; i++) {
    console.log("Flying!");
  }
};

let superFly = fly;
superFly(2);
let superQuack = quack;
superQuack(3);
