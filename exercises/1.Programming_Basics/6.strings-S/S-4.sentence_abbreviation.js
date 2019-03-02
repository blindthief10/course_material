let quote = 'World will not believe it, when i will become a developer!';
const symbolsToBeRemoved = [',', '!'];

const returnAbbr = function(text) {
  const allLetters = [];
  for (let symbol of symbolsToBeRemoved) {
    text = text.replace(symbol, '');
  }
  let splitedText = text.split(' ');
  for (let word of splitedText) {
    let firstLetter = word[0].toUpperCase();
    allLetters.push(firstLetter);
  }

  return `${allLetters.join('')}`;
}

console.log(returnAbbr(quote));
