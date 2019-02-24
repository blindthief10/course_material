let Person = function(firstName, lastName, bankAccountInAmericanDollars, countryOfResidence, convertToLocal) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bankAccountInAmericanDollars = bankAccountInAmericanDollars;
  this.countryOfResidence = countryOfResidence;
  this.convertToLocal = convertToLocal;
}

const jake = {
  firstName: 'Konstantinos',
  lastName: 'Diakogiannis',
  bankAccountInAmericanDollars: 1000,
  countryOfResidence: 'Greece',
  usDollarToLocalCurrency: 0.86,
  convertToLocalCurrency: function() {
    this.localMoney = this.bankAccountInAmericanDollars * this.usDollarToLocalCurrency;
  }
}

const gidday = {
  firstName: 'Meuron',
  lastName: 'Gidday',
  bankAccountInAmericanDollars: 2000,
  countryOfResidence: 'Australia',
  usDollarToLocalCurrency: 1.38,
  convertToLocalCurrency: function() {
    this.localMoney = this.bankAccountInAmericanDollars * this.usDollarToLocalCurrency;
  }
}

const steffan = {
  firstName: 'Steffan',
  lastName: 'Effenberg',
  bankAccountInAmericanDollars: 5000,
  countryOfResidence: 'Switzerland',
  usDollarToLocalCurrency: 0.96,
  convertToLocalCurrency: function() {
    this.localMoney = this.bankAccountInAmericanDollars * this.usDollarToLocalCurrency;
  }
}

jake.convertToLocalCurrency();
gidday.convertToLocalCurrency();
steffan.convertToLocalCurrency();

console.log(jake.localMoney);
console.log(gidday.localMoney);
console.log(steffan.localMoney);
