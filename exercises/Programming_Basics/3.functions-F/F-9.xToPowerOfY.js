const printXToY = function(x, y) {
  for (let i = 1; i <= y; i++) {
    return x ** i;
  }
}

const threePowersToFive = printXToY(3, 5);
const twoPowersToEight = printXToY(2, 8);

const printMultipleXToY = function(x, y) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      return i ** j;
    }
  }
}

const printUpTpThreePowerOfFour = printMultipleXToY(3, 4);
