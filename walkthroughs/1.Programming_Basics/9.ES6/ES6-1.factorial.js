function factorial(num = 10) {
  let factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial());
