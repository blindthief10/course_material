var currentNumber = 1;

while (currentNumber <= 100) {
  // ternary operator
  currentNumber % 2 === 0 ? console.log(`The ${currentNumber} is even!`) : console.log(`The ${currentNumber} is odd!`);
  currentNumber++;
}
