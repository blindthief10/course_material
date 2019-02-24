let howManyDaysRemain = function(datum) {
  let currentDateMonth = datum.getMonth();

  let remainingDays = -1;

  while (currentDateMonth === datum.getMonth()) {
    datum.setDate(datum.getDate() + 1);
    remainingDays++;
  }

  return remainingDays;
}

let currentDate = new Date();
let februaryDate = new Date('Feb 23 2020');

console.log(howManyDaysRemain(currentDate));
console.log(howManyDaysRemain(februaryDate));
