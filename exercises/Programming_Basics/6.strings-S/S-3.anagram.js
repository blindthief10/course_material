let findAnagram = function(firstWord, secondWord) {
  firstWord = firstWord.toLowerCase().split('').sort().join('');
  secondWord = secondWord.toLowerCase().split('').sort().join('');
  firstWord === secondWord ? console.log('These words are anagrams') : console.log('Sorry, not an anagram here!');
}

findAnagram('Jake', 'akej');
findAnagram('Jake', 'John');
