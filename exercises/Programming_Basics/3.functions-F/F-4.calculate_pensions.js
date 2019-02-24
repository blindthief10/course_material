function calculatePension(currentAge, pensionsAge, wagePerMonth, saveInPercent) {
  if (currentAge >= pensionsAge) {
    console.log('Save your memories');
  } else {
    var calculatedSaves = (pensionsAge - currentAge) * 12 * wagePerMonth * saveInPercent / 100;
    console.log(calculatedSaves);
  }
}

calculatePension(40, 65, 2000, 5);
