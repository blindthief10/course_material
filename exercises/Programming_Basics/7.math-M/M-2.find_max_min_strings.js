const resultsInStrings =  ['63', '55.5', '72', '77',  '35.5', '81', '95', '29.5', '44.5',  '80'];

const convertToNumbers = function(collection) {
  const resultsInNumbers = [];
  for (let result of resultsInStrings) {
    resultsInNumbers.push(Number.parseFloat(result));
  }
  return resultsInNumbers;
}

const results = convertToNumbers(resultsInStrings);

const biggestResult = Math.max(...results);
const smallestResult = Math.min(...results);

console.log(Math.abs(smallestResult - biggestResult));
