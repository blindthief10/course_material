let howManyDaysRemain = function(datum) {
  let currentDateMonth = datum.getDate();
  const lastDateOfCurrentMonth = new Date(datum.getFullYear(), datum.getMonth() + 1, 0);
  console.log(lastDateOfCurrentMonth.getDate() - currentDateMonth);
}

const dueDate = new Date();
howManyDaysRemain(dueDate);
