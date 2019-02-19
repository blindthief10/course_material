let quote = 'Greeks do not fight like heroes, heroes fight like Greeks';

let returnAbbr = function(text) {
  let allLetters = [];
  text = text.replace(',', '');
  let splitedText = text.split(' ');
  for (let word of splitedText) {
    let firstLetter = word[0].toUpperCase();
    allLetters.push(firstLetter);
  }

  console.log(`${allLetters.join('')}`);
}

returnAbbr(quote);
