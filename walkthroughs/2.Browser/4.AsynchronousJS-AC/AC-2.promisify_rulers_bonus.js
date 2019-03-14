const allRulers = ['Cersei Lannister', 'Danny', 'Jon Snow', 'Euron Greyjoy', 'Jaimie Lannister', 'nightsKing'];
const times = [5000, 3000, 2000, 1000, 1000, 1000];
let index = 0;
let currentRuler;

const changeRuler = (rulersName, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rulersName);
    }, time)
  })
}

const wrapperRuler = (rulersName, time) => {
  changeRuler(rulersName, time)
      .then(name => {
        currentRuler = name;
        console.log(currentRuler);
        index++;
        if (index === allRulers.length) {
          return false;
        }
        return wrapperRuler(allRulers[index], times[index]);
      })
}

wrapperRuler(allRulers[index], times[index]);
