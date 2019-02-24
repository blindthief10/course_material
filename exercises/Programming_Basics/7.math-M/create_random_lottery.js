let totalWinnings = 0;

let createLottery = function() {
  let prize;
  let luckyNumber = Math.ceil(Math.random() * 100);
  let usersNumber = Math.ceil(Math.random() * 100);
  let differenceBetweenNums = Math.abs(luckyNumber - usersNumber);

  if (luckyNumber === usersNumber) {
    prize = 100;
    console.log(`yaaaaaay!!!!!!! You have won ${prize}!`);
  }else if (differenceBetweenNums < 10) {
    prize = 100 - (10 * differenceBetweenNums);
  } else {
    prize = 0;
  }

  totalWinnings += prize;
  // console.log(`The lucky number is: ${luckyNumber}, the users numbers is: ${usersNumber}. The difference is: ${differenceBetweenNums}. And the user wins: ${prize}.`);
  return [luckyNumber, usersNumber, differenceBetweenNums, prize];
}

let resultsOfLottery = createLottery();

console.log(resultsOfLottery);
