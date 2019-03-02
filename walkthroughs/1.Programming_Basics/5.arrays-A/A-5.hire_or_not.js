const requirements = ['PHP', 'JS', 'Ruby', 'Python', 'Java'];

const jake = ['Kostas Diakogiannis', 'Julia', 'Python'];
const daniel = ['John Doe', 'Ruby', 'Python', 'JS', 'PHP'];

const hiredPeople = [];
const passedFood = [];

const hireOrNot = function(candidate, checkedStatement, pushable) {

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

console.log(hiredPeople);
