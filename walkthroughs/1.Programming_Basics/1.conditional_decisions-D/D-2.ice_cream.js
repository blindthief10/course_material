var numOfIceCreamBalls = 5;
var price;

switch (numOfIceCreamBalls) {
  case 1:
    price = 1;
    break;
  case 2:
    price = 1.8;
    break;
  case 3:
    price = 2.5;
    break;
  case 4:
    price = 3;
    break;
  case 5:
    price = 3.3;
    break;
  default:
    price = 1.8;
}

console.log(`The total cost is ${price}$!`);
