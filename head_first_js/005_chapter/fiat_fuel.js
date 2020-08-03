let fiat = {
  make: "Fiat",
  model: "500",
  started: false,
  fuel: 0,
  start: function () {
      if(this.fuel >0){
        this.started = true;
      } else{
          console.log("The car is on empty, fill up before starting!")
      }
   
  },
  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        console.log(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        console.log("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
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