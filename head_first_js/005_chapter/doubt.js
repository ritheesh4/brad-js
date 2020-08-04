// Doubt number 1

let fiat = {
  make: "Fiat",
  started: false,
  start: function () {
    fiat.started = true; // Why here no error page.number 199 - 202
    console.log(fiat.started); // What is the use of "this", if we could use to define started as fiat.started.
  },
  stop: function () {
    started = false;
  },
  drive: function () {
    if (fiat.started) {
      console.log("Zoom zoom!");
    } else {
      console.log("You need to start the engine first.");
    }
  },
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();

// Doubt number 2

function Car(make, model, year) {
  // Normal example
  this.make = make;
  this.model = model;
  this.year = year;
}

function Car(make, model, year) {
  // Possibility
  return { make, model, year };
}

const Car = (make, model, year) => {
  // Normal example error in ES6 says constructor required.
  this.make = make;
  this.model = model;
  this.year = year;
  //   return { make, model, year };
};

let newCar = new Car("BMW", 3, 2020);
let newcar2 = new Car("Benz", 2, 2019);
console.log(newCar);
console.log(newcar2);

//  What is the differece between two of them above and what is actully "this" keyword performs in this function
