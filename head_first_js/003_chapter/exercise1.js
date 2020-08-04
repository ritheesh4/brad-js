const dogYears = (dogName, age) => {
  let years = age * 7;
  console.log(dogName + " is " + years + " years old");
};

let myDog = "Fido";
dogYears(myDog, 4);
const makeTea = (cups, tea) => {
  console.log("Brewing " + cups + " cups of " + tea);
};

let guests = 3;
makeTea(guests, "Earl Grey");
const secret = () => {
  console.log("The secret of life is 42");
};

secret();
const speak = (kind) => {
  let defaultSound = "";
  if (kind == "dog") {
    alert("Woof");
  } else if (kind == "cat") {
    alert("Meow");
  } else {
    alert(defaultSound);
  }
};

let pet = prompt("Enter a type of pet: ");
speak(pet);
