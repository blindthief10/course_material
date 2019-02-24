let requirements = ['PHP', 'JS', 'Ruby', 'Python', 'Java'];
let catalogMenu = ['Chocolate', 'Bananas', 'Kiwi', 'Mangos', 'Strawberries'];
let favoriteFruits = ['Apple', 'Bananas', 'Cherries'];

const jake = ['Kostas Diakogiannis', 'Julia', 'Python', 'JS', 'PHP'];
const daniel = ['Daniel Cipolla', 'Ruby', 'Python', 'JS', 'PHP'];

let hiredPeople = [];
let passedFood = [];



let hireOrNot = function(candidate, checkedStatement, pushable) {

  let skillsMet = 0;

  for (let language of checkedStatement) {
    if (candidate.includes(language)) {
      skillsMet++;
    }
  }

  if (skillsMet >= 3) {
    pushable.push(candidate[0]);
  }

}

hireOrNot(jake, requirements, hiredPeople);
hireOrNot(daniel, requirements, hiredPeople);
hireOrNot(favoriteFruits, catalogMenu, passedFood);

console.log(hiredPeople);
