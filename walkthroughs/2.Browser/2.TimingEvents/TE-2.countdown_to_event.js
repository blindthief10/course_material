
const myBday = new Date('Mar 23 2019');

let countdownInterval = setInterval(function() {
  let today = new Date();
  let differenceInMs = myBday - today;

  if (differenceInMs) {
    let daysRemaining = differenceInMs / 1000 / 60 / 60 / 24;
    let actualDays = Math.floor(daysRemaining);
    let hoursRemaining = (daysRemaining - actualDays) * 24;
    let actualHours = Math.floor(hoursRemaining);
    let minutesRemaining = (hoursRemaining - actualHours) * 60;
    let actualMinutes = Math.floor(minutesRemaining);
    let secondsRemaining = (minutesRemaining - actualMinutes) * 60;
    let actualSeconds = Math.floor(secondsRemaining);

    console.log(`Time remaining till the future event is: ${actualDays} days, ${actualHours} hours, ${actualMinutes} minutes and ${actualSeconds} seconds.`);
  } else {
    console.log('The event has started!!!');
    clearInterval(countdownInterval);
  }


}, 1000)
