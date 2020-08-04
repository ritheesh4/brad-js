// let dogName = "rover";
// let dogWeight = 23;

// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "spot";
// dogWeight = 13;

// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "spike";
// dogWeight = 53;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// let dogName = "rover";
// let dogWeight = 18;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// function bark(name, weight) {
//   if (weight > 20) {
//     console.log(name + "says WOOF WOOF");
//   } else {
//     console.log(name + "says woof woof");
//   }
// }

// bark("rithees", "19");

// const bark = (name, weight) => {
//   if (weight > 20) {
//     console.log(name + " says WOOF WOOF");
//   } else {
//   }
//   console.log(name + " says woof woof");
// };

// bark("rover", 23);
// bark("spot", 13);
// bark("spike", 53);

// let balance = 10500;
// let cameraOn = true;
// const steal = (balance, amount) => {
//   cameraOn = false;
//   if (amount < balance) {
//     balance = balance - amount;
//   }
//   return amount;
//   cameraOn = true;
// };
// let amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");

// EXPERIMENT #1:
// const makeTea = (cups, tea) => {
//   console.log("Brewing " + cups + " cups of " + tea);
// };
// makeTea(3, "hi");

// EXPERIMENT #2:

// const makeTea = (cups, tea) => {
//   console.log("Brewing " + cups + " cups of " + tea);
// };

// makeTea(3, "Earl Grey", "hey ma!", 42);

// const barkAtTheMoon = () => {
//   console.log("Woooooooooooooo!");
// };
// barkAtTheMoon();

const bake = (degrees) => {
  let message;
  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";
    // setMode("bake");
    // setTemp(degrees);
  }
  return message;
};
let status = bake(600);
console.log(status)
