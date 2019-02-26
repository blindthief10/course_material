let sentenceToExamine = 'I love my job';

let sentenceSplitted = sentenceToExamine.split(' ');
let biggestWord = sentenceSplitted[0];

for (let word of sentenceSplitted) {
  if (word.length > biggestWord.length) {
    biggestWord = word;
  }
}

console.log(`The biggest word in this string is ${biggestWord}!`);
