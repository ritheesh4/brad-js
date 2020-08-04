let scoop = document.getElementById("raspberry");
let altText = scoop.getAttribute("alt");
if (altText == null) {
  console.log("Oh, I guess there isn't an alt attribute.");
} else {
  console.log("I can't see the image in the console,");
  console.log(" but I'm told it looks like " + altText);
}
