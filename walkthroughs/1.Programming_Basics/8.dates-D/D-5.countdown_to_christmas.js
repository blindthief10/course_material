let timeTillChristmas = function() {
  const today = new Date();
  const christmas = new Date(2019, 11, 25);
  const countDown = [];

  if (christmas <= today) {
    console.log(`Christmas has arrived! Ho ho ho!`);
  }

  const differenceInMs = christmas - today;

  const yearsRemaining = differenceInMs / 1000 / 60 / 60 / 24 / 365;
  const yearsRounded = Math.floor(yearsRemaining);
  countDown.push(yearsRounded);

  const calculateDays = (yearsRemaining - yearsRounded) * 365;
  const daysRounded = Math.floor(calculateDays);
  countDown.push(daysRounded);

  const calculateHours = (calculateDays - daysRounded) * 24;
  const hoursRounded = Math.floor(calculateHours);
  countDown.push(hoursRounded);

  const calculateMins = (calculateHours - hoursRounded) * 60;
  const minsRounded = Math.floor(calculateMins);
  countDown.push(minsRounded);

  const calculateSecs = (calculateMins - minsRounded) * 60;
  const secsRounded = Math.floor(calculateSecs);
  countDown.push(secsRounded);

  console.log(`Remaining time for christmas is ${countDown.join(':')}`);
}

timeTillChristmas();
