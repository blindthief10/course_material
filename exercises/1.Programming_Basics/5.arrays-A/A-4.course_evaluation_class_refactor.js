class Student {
  constructor(fullName, course, satisfaction) {
    this.fullName = fullName;
    this.course = course;
    this.satisfaction = satisfaction;
    }

  interpretFeel() {
    if (this.satisfaction > 80) {
      this.mood = `${this.fullName} found the course perfect.`;
    } else if (this.satisfaction >= 50) {
      this.mood = `${this.fullName} is content with the course overall.`;
    } else {
      this.mood = `${this.fullName} keeps complaining. Potential refund is coming.`;
    }
  }
}

let mauro = new Student('Mauro Cifuentes Navarro', 'PHP', 45);
let eugen = new Student('Jewgeny Kuhn', 'JS', 85);
let meir = new Student('Meir Overferst', 'JS', 62);
let mohLah = new Student('Mohamad Lahham', 'Ruby', 72);
let mohWah = new Student('Mohammed Wahba', 'Ruby', 67);
let nour = new Student('Mohammed Nour Mustafa', 'JS', 59);
let carmine = new Student('Carmine Tambascia', 'JS', 72);
let ali = new Student('Ali Pudina', 'PHP', 22);
let jens = new Student('Jens Soltwedel', 'PHP', 82);
let murhaf = new Student('Murhaf Orfali', 'PHP', 94);

let studentsTogether = [mauro, eugen, meir, mohLah, mohWah, nour, carmine, ali, jens, murhaf];

let addMood = function(studentsGroup) {
  for (let student of studentsGroup) {
    student.interpretFeel();
    console.log(student.mood);
  }
}

addMood(studentsTogether);

const allCoursesSatisfaction = [];

const calculateAveragePerCourse = function(collection, course) {
  let sum = 0;
  let coursesParticipants = 0;
  for (let student of collection) {
    if (student.course === course) {
      coursesParticipants++;
      sum += student.satisfaction;
    }
  }
  const average = sum / coursesParticipants;
  console.log(`The average satisfaction level for the ${course} course is ${average}!`);
  allCoursesSatisfaction.push({course: course, courseSatisfaction: average});
}

const PHPAvg = calculateAveragePerCourse(studentsTogether, 'PHP');
const JSAvg = calculateAveragePerCourse(studentsTogether, 'JS');
const RubyAvg = calculateAveragePerCourse(studentsTogether, 'Ruby');

console.log(allCoursesSatisfaction);

const printBiggest = function(allCourses) {
  let biggest = allCourses[0]
  for (let course of allCourses) {
    if (course.courseSatisfaction > biggest.courseSatisfaction) {
      biggest = course;
    }
  }
  return biggest;
}

const mostSatisfactoryCourse = printBiggest(allCoursesSatisfaction);

console.log(`The most satisfactory course is ${mostSatisfactoryCourse.course}`);
