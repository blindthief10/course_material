function fizzBuzz(currentNum, endNum) {
  while (endNum >= currentNum) {

    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (currentNum % 3 === 0) {
      console.log(`Fizz`);
    } else if (currentNum % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(currentNum);
    }
    currentNum++;
  }
}

fizzBuzz(1, 100);
