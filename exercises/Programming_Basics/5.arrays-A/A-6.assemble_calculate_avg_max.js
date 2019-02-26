const succeeded = [67, 82, 91, 96, 54];
const failed = [46, 48, 24, 33, 30];

let studentsResults = succeeded.concat(failed);

let calculateAvg = function(array) {
  let sum = 0;
  for (let result of array) {
    sum += result;
  }

  const average = sum / array.length;
  return average;
}

const averageForTenStudents = calculateAvg(studentsResults);
console.log(`Average for the first 10 students is ${averageForTenStudents.toFixed(2)}`);

studentsResults.push(37);

const averageForElevenStudents = calculateAvg(studentsResults);
console.log(`Average for eleven students now has become ${averageForElevenStudents.toFixed(2)}.`);

const compareAverage = function(firstAverage, secondAverage) {
  if (firstAverage < secondAverage) {
    console.log(`The average has been raised by ${(secondAverage - firstAverage).toFixed(2)} points.`);
  } else {
    console.log(`The average has dropped by ${(firstAverage - secondAverage).toFixed(2)} points.`);
  }
}

compareAverage(averageForTenStudents, averageForElevenStudents);

const calculateMax = function(array) {
  let best = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > best) {
      best = array[i];
    }
  }
  return `Best score in the class is ${best}!`;
}

const maxOfStudents = calculateMax(studentsResults);
console.log(maxOfStudents);
