let currentRuler = 'Cersei Lannister';

const changeRuler = (firstRuler, secondRuler, thirdRuler, fourthRuler, finalRuler) => {
  setTimeout(() => {
    currentRuler = firstRuler;
    console.log(currentRuler);
    setTimeout(() => {
      currentRuler = secondRuler;
      console.log(currentRuler);
      setTimeout(() => {
        currentRuler = thirdRuler;
        console.log(currentRuler);
        setTimeout(() => {
          currentRuler = fourthRuler;
          console.log(currentRuler);
          setTimeout(() => {
            currentRuler = finalRuler;
            console.log(currentRuler);
          }, 1000)
        }, 1000)
      }, 2000)
    }, 3000)
  }, 5000)
}

changeRuler('Danny', 'Jon Snow', 'Euron Greyjoy', 'Jaimie Lannister', 'The nightsKing');
