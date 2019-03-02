const checkPalindrome = function(name) {
  let nameToLower = name.toLowerCase();
  let reversedName = nameToLower.split('').reverse().join('');
  let conclusion;
  nameToLower === reversedName ? conclusion = 'is' : conclusion = 'is not';

  console.log(`The name ${name} ${conclusion} a palindrome!`);
}

checkPalindrome('Jake');
checkPalindrome('Anna');
