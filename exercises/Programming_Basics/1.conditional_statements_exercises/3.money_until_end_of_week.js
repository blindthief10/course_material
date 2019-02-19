var hoursRemaining = 0;

function calculateUntilEndOfWeek(numDay) {

  const moneyPerHour = 10;

  switch(numDay) {
    case 1:
      hoursRemaining += 4;
      stringExample = 'Monday, ';
      break;
    case 2:
      hoursRemaining += 6;
      stringExample = 'Tuesday, ';
      break;
    case 3:
      hoursRemaining += 8;
      stringExample = 'Wednesday, ';
      break;
    case 4:
      hoursRemaining += 10;
      stringExample = 'Thursday, ';
      break;
    case 6:
      hoursRemaining += 2;
      stringExample = 'Saturday, ';
      break;
    default:
      hoursRemaining += 0;
      stringExample = 'Friday or Sunday.';
      break;
  }

  numDay++;

  if (numDay <= 7) {
    calculateUntilEndOfWeek(numDay);
  } else {
    console.log(`The money that you are going to earn until the end of the week is ${hoursRemaining * moneyPerHour}$`);
  }

}

calculateUntilEndOfWeek(1);
