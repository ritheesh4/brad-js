// if (fiat.year < 1965) {
//   classic = true;
// }
// for (let i = 0; i < fiat.passengers; i++) {
//   addPersonToCar();
// }

// let dog = {
//   name: "Fido",
//   weight: 20.2,
//   age: 4,
//   breed: "mixed",
//   activity: "fetch balls",
// };

// let bark;
// if (dog.weight > 20) {
//   bark = "WOOF WOOF";
// } else {
//   bark = "woof woof";
// }

// let speak =dog.name +" says "+ bark + " when he wants to " + dog.activity;
// console.log(speak);

// let car = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };

// const prequal = (car) => {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1960) {
//     return false;
//   }
//   return true;
// };

// console.log(prequal(car));

// let taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };

// let cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
// };

// prequal(cadi);
// let fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
// };
// prequal(fiat);

let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

const prequal = (car) => {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
};

let worthALook = prequal(chevy);;
if (worthALook) {
  console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
  console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}
