for (var x = 1; x <=100; x++) {
    var isPrime = true;

    for (var y = 2; y <= x - 1; y++) {

          if (x % y !== 0) {
            continue
          }else {
            isPrime = false;
          }

    }

    if (isPrime) {
      console.log(`${x} is prime!`);
    }
}
