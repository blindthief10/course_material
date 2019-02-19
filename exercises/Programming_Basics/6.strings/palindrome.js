let checkPalindrome = function(name) {
  name = name.toLowerCase();
  let reversedName = name.split('').reverse().join('');
  let conclusion;
  name === reversedName ? conclusion = 'is' : conclusion = 'is not';

  console.log(`The name ${name} ${conclusion} a palindrome!`);
}

checkPalindrome('Jake');
checkPalindrome('Anna');
