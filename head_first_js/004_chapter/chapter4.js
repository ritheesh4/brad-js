// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
// let solution2 = scores[2];
// alert("Solution 2 produced " + solution2 + " bubbles.");

// let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// let last = 3;
// let recent = products[last];

let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];
for (let i = 0; i < hasBubbleGum.length; i = i + 1) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
}
