let myQuote = ['It', 'is', 'Friday', 'and', 'i', 'am', 'already', 'exhausted', 'to', 'think', 'of', 'a', 'better', 'quote'];

//assemble the string with reduce

const mySentenceFromBeginning = myQuote.reduce(function(currentString, eachWord) {
  return currentString + eachWord + ' ';
}, '');

console.log(mySentenceFromBeginning);
