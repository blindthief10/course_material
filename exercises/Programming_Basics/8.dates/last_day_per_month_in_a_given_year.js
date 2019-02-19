let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let calculateDaysPerMonthInAYear = function(year) {

  for (let i = 1; i <= 12; i++) {
    let lastDayOfEachMonth = new Date(year, i, 0);
    let dayOfWeek = lastDayOfEachMonth.getDay();
    console.log(`For year ${year}, the last day of ${months[i-1]} is ${days[dayOfWeek]}`);
  }

}

calculateDaysPerMonthInAYear(2020);
