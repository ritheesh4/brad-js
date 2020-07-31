let price = 28.99;
let discount = 10;
let total = price - price * (discount / 100);
if (total > 25) {
  freeShipping();
}

let count = 10;
while (count > 0) {
  juggle();
  count = count - 1;
}

let dog = { name: "Rover", weight: 35 };
if (dog.weight > 30) {
  alert("WOOF WOOF");
} else {
  alert("woof woof");
}

let circleRadius = 20;
let circleArea = Math.PI * (circleRadius * circleRadius);

const freeShipping =()=>{
    console.log("hello")
}

const juggle =()=>{
    console.log("hi")
}

 let scoop = 2;
if (scoops >= 5) {
    alert("Eat faster, the ice cream is going to melt!");
    } else if (scoops == 3) {
    alert("Ice cream is running low!");
    } else if (scoops == 2) {
    alert("Going once!");
    } else if (scoops == 1) {
    alert("Going twice!");
    } else if (scoops == 0) {
    alert("Gone!");
    } else {
    alert("Still lots of ice cream left, come and get it.");
    }