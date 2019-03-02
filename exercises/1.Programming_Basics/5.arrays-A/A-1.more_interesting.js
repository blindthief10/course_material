const MaurosHobbies = ['Fishing', 'Playing football', 'ping pong', 'programming', 'billiards'];
const JakesHobbies = ['Playing football', 'basketball', 'programming'];

const checkPeoplesHobbies = function(firstPerson, secondPerson) {
  if (firstPerson.length > secondPerson.length) {
    console.log('Mauro is more exciting!');
  } else if (secondPerson.length > firstPerson.length) {
    console.log('Jake is more exciting!');
  } else {
    console.log('Both of them are booooring...');
  }
}

checkPeoplesHobbies(MaurosHobbies, JakesHobbies);
