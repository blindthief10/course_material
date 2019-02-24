let succeeded = [67, 82, 91, 96, 54];
let failed = [46, 48, 24, 33, 30];

let studentsResults = succeeded.concat(failed);

let calculateAvg = function(array) {
  let sum = 0;
  for (let result of array) {
    sum += result;
  }

  let average = sum / array.length;
  return average;
}

let averageForTenStudents = calculateAvg(studentsResults);

console.log(averageForTenStudents);

studentsResults.push(97);

let averageForElevenStudents = calculateAvg(studentsResults);

console.log(averageForElevenStudents);

let calculateMax = function(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[0]) {
      let temp = array [0]
      array[0] = array[i];
      array[i] = temp;
    }
  }
  return array[0];
}

let maxOfStudents = calculateMax(studentsResults);
console.log(`The best result is ${maxOfStudents}`);
