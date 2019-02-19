for (var x = 1; x <=100; x++) {
    var failureCount = 0;

    for (var y = 2; y <= x - 1; y++) {

          if (x % y !== 0) {
            failureCount++;
          }else {
            break;
          }

    }

    if (failureCount === x - 2) {
      console.log(`${x}`);
    }
}
