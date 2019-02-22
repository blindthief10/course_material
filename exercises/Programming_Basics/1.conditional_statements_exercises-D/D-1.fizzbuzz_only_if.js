var num = 7; // put a number from 1 to 100 here

if (num % 3 === 0 && num % 5 === 0) {
  console.log(`FizzBuzz`);
} else if (num % 3 === 0) {
  console.log(`Fizz`);
} else if (num % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(num);
}
