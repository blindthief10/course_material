function returnSquare(x) {
  if (typeof x !== 'number') {
    return 'The action you are trying to perform is not possible!';
  } else {
    return x**2;
  }
}

const squareOfNine = returnSquare(9);
console.log(squareOfNine);
