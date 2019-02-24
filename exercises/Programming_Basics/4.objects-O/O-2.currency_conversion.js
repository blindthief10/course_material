let Person = function(firstName, lastName, bankAccountInAmericanDollars, countryOfResidence, usDollarToLocalCurrency) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bankAccountInAmericanDollars = bankAccountInAmericanDollars;
  this.countryOfResidence = countryOfResidence;
  this.convertToLocalCurrency = function() {
    this.localMoney = this.bankAccountInAmericanDollars * this.usDollarToLocalCurrency;
  };
}

const jake = new Person('Konstantinos', 'Diakogiannis', 1000, 'Greece', 0.86);
const gidday = new Person('Meuron', 'Gidday', 2000, 'Australia', 1.38);
const steffan = new Person('Steffan', 'Effenberg', 5000, 'Switzerland', 0.96);

jake.convertToLocalCurrency();
gidday.convertToLocalCurrency();
steffan.convertToLocalCurrency();

console.log(jake.localMoney);
console.log(gidday.localMoney);
console.log(steffan.localMoney);
