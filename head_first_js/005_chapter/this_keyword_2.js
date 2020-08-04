// let fiat = {
//   make: "Fiat",
//   model: "500",
//   // other properties go here, we're saving some paper...
//   started: false,
//   fuel: 0,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
//   addFuel: function (amount) {
//     this.fuel = this.fuel + amount;
//   },
// };

let fiat = {
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};


fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();