const calculateArea = (r)=> {
  let area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

let radius = 5.2;
 let theArea = calculateArea(radius);
 console.log("THe are is :" + theArea)