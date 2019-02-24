let timeTillChristmas = setInterval(function() {
  let today = new Date();
  let christmas = new Date(2018, 11, 25);

  if (christmas <= today) {
    console.log(`Christmas has arrived! Ho ho ho!`);
    clearInterval(timeTillChristmas);
  }
  let countDown = [];

  let differenceInMs = christmas - today;

  let yearsRemaining = differenceInMs / 1000 / 60 / 60 / 24 / 365;
  let yearsRounded = Math.floor(yearsRemaining);
  countDown.push(yearsRounded);

  let calculateDays = (yearsRemaining - yearsRounded) * 365;
  let daysRounded = Math.floor(calculateDays);
  countDown.push(daysRounded);

  let calculateHours = (calculateDays - daysRounded) * 24;
  let hoursRounded = Math.floor(calculateHours);
  countDown.push(hoursRounded);

  let calculateMins = (calculateHours - hoursRounded) * 60;
  let minsRounded = Math.floor(calculateMins);
  countDown.push(minsRounded);

  let calculateSecs = (calculateMins - minsRounded) * 60;
  let secsRounded = Math.floor(calculateSecs);
  countDown.push(secsRounded);

  document.body.innerHTML = `Remaining time for christmas is ${countDown.join(':')}`;
}, 1000)
