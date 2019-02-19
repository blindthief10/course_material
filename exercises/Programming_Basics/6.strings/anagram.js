let findAnagram = function(firstWord, secondWord) {
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();
  firstWord = firstWord.split('').sort().join('');
  secondWord = secondWord.split('').sort().join('');
  if (firstWord === secondWord) {
    console.log('These words are anagrams');
  } else {
    console.log('I am sorry not an anagram here!');
  }
}
