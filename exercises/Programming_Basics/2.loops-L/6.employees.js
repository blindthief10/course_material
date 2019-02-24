var cashier = 100000;
var nextPayment = 7500;
var employees = 72;

for (var employeeId = 1; cashier - nextPayment >= 0; employeeId++) {

  if (employeeId === 1) {
    cashier -= 7500;
    nextPayment = 10000;
  } else if (employeeId === 2) {
    cashier -= 10000;
    nextPayment = 3000;
  } else if (employeeId <= 4) {
    cashier -= 3000;
    employeeId === 4 ? nextPayment = 2000 : nextPayment = 3000;
  } else if (employeeId <= 8) {
    cashier -= 2000;
    employeeId === 8 ? nextPayment = 1500 : nextPayment = 2000;
  } else if (employeeId <= 12) {
    cashier -= 1500;
    employeeId === 12 ? nextPayment = 1000 : nextPayment = 1500;
  } else if (employeeId <= 62) {
    cashier -= 1000;
    employeeId === 62 ? nextPayment = 5000 : nextPayment = 1000;
  } else if (employeeId <= 67) {
    cashier -= 5000;
    employeeId === 67 ? nextPayment = 4000 : nextPayment = 5000;
  } else {
    cashier -= 4000;
    employeeId === 72 ? nextPayment = 0 : nextPayment = 4000;
  }
}

console.log(`${employees - employeeId + 1} workers have not been paid. Egal, go to Bahamas! The cashier has ${cashier}$.`);
