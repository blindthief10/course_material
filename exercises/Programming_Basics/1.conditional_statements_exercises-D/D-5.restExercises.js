//D-5 1. Print if a number is negative, positive or 0.

var numberToBeChecked = 0;

if (numberToBeChecked > 0) {
  console.log('Positive');
}else if (numberToBeChecked < 0) {
  console.log('Negative');
} else {
  console.log('The number is zero!');
}

// D-5 2. Print the opposite version of a number.

var numberToBeReversed = -10;
console.log(numberToBeReversed - (2 * numberToBeReversed));

// D-5 3. Calculate sum and average of 5 variables

var firstNum = 2;
var secondNum = 7;
var thirdNum = 12;
var fourthNum = 19;
var fifthNum = 22;

var sumOfNums = firstNum + secondNum + thirdNum + fourthNum + fifthNum;
var averageOfNums = sumOfNums / 5;

console.log(sumOfNums);
console.log(averageOfNums);

// D-5 4. Print the biggest number of variables

var firstTestScore = 65;
var secondTestScore = 65;
var thirdTestScore = 33;
var biggestScore;

if (firstTestScore > secondTestScore) {
  if (firstTestScore > thirdTestScore) {
    biggestScore = firstTestScore;
  } else {
    biggestScore = thirdTestScore;
  }
}else if (secondTestScore > thirdTestScore) {
    biggestScore = secondTestScore;
  } else {
    biggestScore = thirdTestScore;
}

console.log(biggestScore);

// D-5. Leap year exercise

var yearToBeExamined = 2014;

yearToBeExamined % 4 === 0 ? console.log('It is a leap year!') : console.log('It is not leap year');
