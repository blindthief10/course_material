const jake = {
  firstName: `Konstantinos`,
  lastName: `Diakogiannis`,
  nickName: `Jake`,
  age: 30,
  profession: `Machine Learning engineer`,
  nationality: 'Greece',
  livesIn: 'Germany',
  yearsAbroad: 10,
  changeNationality: function() {
    this.yearsAbroad >= 7 ? this.nationality = this.livesIn : null
  }
};

jake.changeNationality();
console.log(jake.nationality);
