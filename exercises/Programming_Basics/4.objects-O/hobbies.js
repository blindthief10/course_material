let Participant = function(firstName, lastName, age, nationality, hoursProgramming, favoriteLanguage) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.nationality = nationality;
  this.hoursProgramming = hoursProgramming;
  this.favoriteLanguage = favoriteLanguage;
  this.checkHobby = function() {
    if (this.hasOwnProperty('hobby')) {
      console.log(`${this.firstName} has a life`);
    } else {
      console.log(`Open the window and brace for ${this.firstName}!`);
    }
  }
}

let marcelo = new Participant('Marcelo', 'Ramirez', 37, 'Paraguayan', 1000, 'PHP');
let daniel = new Participant('Daniel', 'Cipolla', 35, 'Ecuadorian', 2000, 'Ruby');
let carmine = new Participant('Carmine', 'Tabascia', 33, 'Italian', 3000, 'Python');
let nour = new Participant('Nour', 'Mustafa', 32, 'Syrian', 4000, 'C++');
let meir = new Participant('Meir', 'Overferst', 35, 'Israeli', 5000, 'JS');

marcelo.hobby = 'fishing';
nour.hobby = 'chess';
carmine.hobby = 'Drinking';

marcelo.checkHobby();
daniel.checkHobby();
meir.checkHobby();
