let possibleDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let createRandomHex = function(pool) {
  let randomColor = '#';

  for (let i = 1; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    randomColor += pool[randomIndex];
  }
  return randomColor;
}

//connect this script with your HTML also to see the result! Refresh the page many times
// You should have a different background color
document.body.style.background = createRandomHex(possibleDigits);
