let males = {
  gender: 'male',
  hobby: 'Reading',
  convertToLocalCurrency: function() {
    this.bankAccountInLocalCurrency = this.bankAccountInAmericanDollars * this.convertToLocal;
  }
}

let Person = function(firstName, lastName, bankAccountInAmericanDollars, countryOfResidence, convertToLocal) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bankAccountInAmericanDollars = bankAccountInAmericanDollars;
  this.countryOfResidence = countryOfResidence;
  this.convertToLocal = convertToLocal;
}

let jake = new Person('Konstantinos', 'Diakogiannis', 1000, 'Greece', 0.86);
let gidday = new Person('Meuron', 'Gidday', 2000, 'Australia', 1.38);
let steffan = new Person('Steffan', 'Effenberg', 5000, 'Switzerland', 0.96);

Object.setPrototypeOf(jake, males);
Object.setPrototypeOf(gidday, males);
Object.setPrototypeOf(steffan, males);

jake.convertToLocalCurrency();

console.log(jake);
console.log(gidday);
console.log(steffan);
