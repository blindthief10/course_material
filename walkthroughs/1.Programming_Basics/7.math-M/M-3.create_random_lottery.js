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

  console.log(`The lucky number is: ${luckyNumber}, the users numbers is: ${usersNumber}. The difference is: ${differenceBetweenNums}. And the user wins: ${prize}.`);
  return prize;
}

let moneyGiven = 0;
for (var i = 1; i <= 100; i++) {
  moneyGiven += createLottery();
}

console.log(`We gave ${moneyGiven}$ to lottery winnings today!`);
