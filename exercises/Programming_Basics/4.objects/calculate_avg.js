let parent = {
  calculateAverage: function() {
    let sum = 0;
    let count = 0;
    for (let props in this) {
      if (typeof this[props] !== "number") {
        continue;
      }
      sum += this[props];
      count++;
    }
    this.average = sum / count;
  }
}


let payPerMonth = {
  july: 1000,
  august: 2000,
  september: 5000
}

let marcelosSkills = {
  html: 92,
  css: 88,
  js: 67
}

let jakeSkills = {
  html: 65,
  css: 52,
  js: 85,
  nodeJS: 100
}

Object.setPrototypeOf(jakeSkills, parent);
Object.setPrototypeOf(marcelosSkills, parent);
Object.setPrototypeOf(payPerMonth, parent);

jakeSkills.calculateAverage();
marcelosSkills.calculateAverage();
