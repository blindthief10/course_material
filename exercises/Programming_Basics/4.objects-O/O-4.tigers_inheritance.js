class AllSpecies {
  constructor(species, numsOfEyes, numOfLegs, haveTail) {
    this.species = species;
    this.numOfLegs = numOfLegs;
    this.numsOfEyes = numsOfEyes;
    this.haveTail = haveTail;
  }
}

class Tiger extends AllSpecies {
  constructor(colorFur, eyeColor, region, eatMeet) {
    super('Tiger', 2, 4, true);
    this.colorFur = colorFur;
    this.eyeColor = eyeColor;
    this.region = region;
    this.eatMeet = eatMeet;
  }

  printColor(colorSkin) {
    console.log(colorSkin);
  }
}

class BengalTiger extends Tiger {
  constructor(name, age, height, length, gender) {
    super('orange-black', 'brown', 'India', true);
    this.name = name;
    this.age = age;
    this.height = height;
    this.length = length;
    this.gender = gender;
  }
}

class SiberianTiger extends Tiger {
  constructor(name, age, height, length, gender) {
    super('white-black', 'blue', 'Siberia', false);
    this.name = name;
    this.age = age;
    this.height = height;
    this.length = length;
    this.gender = gender;
  }
}

let richardParker = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
let jackSparrow = new BengalTiger('Jack Sparrow', 20, 74, 196, 'male');
let jonSnow = new SiberianTiger('Jon Snow', 25, 88, 204, 'male');
let nightKing = new SiberianTiger('NightKing', 990, 88, 204, 'White Walker');

console.table(richardParker);
console.table(jackSparrow);
console.table(jonSnow);
console.table(nightKing);

console.log(richardParker.printColor(richardParker.colorFur));
console.log(nightKing.printColor(nightKing.colorFur));
