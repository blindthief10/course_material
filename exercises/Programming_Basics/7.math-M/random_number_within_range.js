let createNumWithinRange = function(lowNumber, highNumber) {
  let range = Math.abs(lowNumber - highNumber) + 1;
  let randomNumber = Math.floor(Math.random() * range + lowNumber);
}

createNumWithinRange(50, 55);
