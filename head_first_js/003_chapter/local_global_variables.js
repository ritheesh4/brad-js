let avatar = "generic";
let skill = 1.0;
let pointsPerLevel = 1000;
let userPoints = 2008;

const getAvatar = (points) => {
  let level = points / pointsPerLevel;
  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
};

const updatePoints = (bonus, newPoints) => {
  let i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
};

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);

const playTurn = (player, location) => {
  points = 0;
  if (location == 1) {
    points = points + 100;
  }
  return points;
}

let total = playTurn("Jai", 1);
alert(points);
let points = 0;

const playTurn = (player, location) => {
  points = 0;
  if (location == 1) {
    points = points + 100;
  }
  return points;
}

let total = playTurn("Jai", 1);
alert(points);
