function assignGrade(score) {
  if (score < 50) {
    console.log('Its not a pass!');
  } else if (score <= 60) {
    console.log('D');
  } else if (score <= 80) {
    console.log('C');
  } else if (score <= 90) {
    console.log('B');
  } else if (score >= 91 && score <= 98) {
    console.log('A');
  } else if ( score === 99) {
    console.log('Almost perfect');
  } else {
    console.log('Take a day off tomorrow!');
  }
}

assignGrade(45);
assignGrade(55);
assignGrade(65);
assignGrade(85);
assignGrade(95);
assignGrade(99);
assignGrade(100);
