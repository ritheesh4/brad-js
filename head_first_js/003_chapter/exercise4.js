let x = 32;
let y = 44;
let radius = 5;
let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

const setup = (width, height) => {
  centerX = width / 2;
  centerY = height / 2;
};

const computeDistance = (x1, y1, x2, y2) => {
  let dx = x1 - x2;
  let dy = y1 - y2;
  let d2 = dx * dx + dy * dy;
  let d = Math.sqrt(d2);
  return d;
};

const circleArea = (r) => {
  let area = Math.PI * r * r;
  return area;
};

setup(width, height);
let area = circleArea(radius);
let distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);
