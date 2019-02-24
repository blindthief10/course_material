let sentence = 'I had a awful time in Bruges';

let badWords = ['awful', 'bad', 'negative', 'disaster'];

let checkBadLanguage = function(text, forbiddenWords) {
  console.log(text);
  let sentenceSplit = text.split(' ');
  console.log(sentenceSplit);
  for (let word of sentenceSplit) {
    if (forbiddenWords.includes(word)) {
      console.log('This message cannot be printed');
      return;
    }
  }
}

checkBadLanguage(sentence, badWords);
