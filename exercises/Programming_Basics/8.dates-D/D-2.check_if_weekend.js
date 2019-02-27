let checkWeekend = function(date) {
  if (date.getDay() === 0 || date.getDay() === 6) {
    console.log('It is a weekend!');
  } else {
    console.log('It is a weiterbildung day!!!');
  }
}

let today = new Date();
let twoDaysAfter = new Date(2018, 9, 13);
let threeDaysAfter = new Date('Oct 15 2018');

checkWeekend(today);
checkWeekend(twoDaysAfter);
checkWeekend(threeDaysAfter);
