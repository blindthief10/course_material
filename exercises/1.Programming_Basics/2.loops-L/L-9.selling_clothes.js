var tShirtPrice = 10;
var jeansPrice = 30;
var jacketPrice = 150;
var cashier = 150;

for (var customerId = 1; customerId <= 78; customerId++) {
  switch( customerId % 3 ) {
    case 0:
      cashier += jacketPrice;
      break;
    case 1:
      cashier += jeansPrice
      break;
    default:
      cashier += tShirtPrice;
  }
}

console.log(cashier);
