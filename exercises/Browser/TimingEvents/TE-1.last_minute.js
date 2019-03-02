let countDownCounter = 11;

const countDown = setInterval(function() {
  countDownCounter--;
  if (!countDownCounter) {
    console.log('Game Over');
    clearInterval(countDown);
  } else {
    console.log(countDownCounter);
  }
}, 1000)
