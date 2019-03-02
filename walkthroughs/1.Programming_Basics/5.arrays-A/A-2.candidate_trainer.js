const schoolTeachers = {
  math: 'Mauro Cifuentes',
  science: 'Carmine Tambascia',
  history: 'Meir Overferst',
  geography: 'Marcelo Ramirez'
};

const john = ['John Doe', 'JavaScript', 'PHP', 'Ruby', 'C++'];
const kostas = ['Kostas Diakogiannis', 'JavaScript', 'Ruby', 'Python'];

const compareCandidateSkills = function(firstCandidate, secondCandidate) {
  let hiredPerson;

  firstCandidate.length > secondCandidate.length ? hiredPerson = firstCandidate[0] : hiredPerson = secondCandidate[0];

  schoolTeachers.programming = hiredPerson;
}

compareCandidateSkills(john, kostas);
