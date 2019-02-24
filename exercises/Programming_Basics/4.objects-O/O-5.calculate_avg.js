class Person {
  constructor(firstName, lastName, html, css, js) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = {html: html, css: css, js: js};
  }

  calculateAverage() {
    let sum = 0, countSkills = 1;
    for (let skillScore in this.skills) {
      countSkills++;
      sum += this.skills[skillScore];
    }
    return sum / countSkills;
  }

}

const Marcelo = new Person('Marcelo', 'Ramirez', 92, 88, 65);
const Jake = new Person('Kostas', 'Diakogiannis', 62, 58, 55);

console.log(Marcelo.calculateAverage());
console.log(Jake.calculateAverage());
