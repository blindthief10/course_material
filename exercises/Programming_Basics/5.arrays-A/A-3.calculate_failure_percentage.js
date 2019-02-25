const testResults = [78, 82, 45, 69, 23, 91, 45, 39, 66, 60, 45, 72];

const calculateFailurePercentage = function(collection, basis) {
  let failureCounter = 0;

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] < basis) {
      failureCounter++;
    }
  }

  const result = (failureCounter / collection.length) * 100;

  console.log(`The percentage of failed students is ${result.toFixed(2)}% of total participants`);
}

calculateFailurePercentage(testResults, 50);
