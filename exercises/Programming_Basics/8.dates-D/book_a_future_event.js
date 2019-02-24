let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let today = new Date();

let createEvent = function(usersDate) {
    if (usersDate > today) {
      let getDate = usersDate.getDate();
      let getYear = usersDate.getFullYear();
      let getMonth = usersDate.getMonth();

      console.log(`Your reservation for the ${getDate}rd ${months[getMonth]} ${getYear} is guaranteed!`);

    } else {
      console.log('Please put a future date!');
    }
}

let preferrableDate = new Date(2019, 2, 23);
let notAcceptableDate = new Date(2017, 5, 3);

createEvent(preferrableDate);
createEvent(notAcceptableDate);
