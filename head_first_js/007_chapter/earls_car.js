const findCarInLot = (car) => {
  for (let i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      return i;
    }
  }
  return -1;
};

let chevy = {
  make: "Chevy",
  model: "Bel Air",
};

let taxi = {
  make: "Webville Motors",
  model: "Taxi",
};

let fiat1 = {
  make: "Fiat",
  model: "500",
};

let fiat2 = {
  make: "Fiat",
  model: "500",
};

let lot = [chevy, taxi, fiat1, fiat2];
let loc1 = findCarInLot(fiat2);
let loc2 = findCarInLot(taxi);
let loc3 = findCarInLot(chevy);
let loc4 = findCarInLot(fiat1);

console.log(loc1,loc2,loc3,loc4);
