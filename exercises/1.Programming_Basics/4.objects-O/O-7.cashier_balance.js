class Shop {
  constructor() {
    this.tshirtPrice = 10;
    this.jeansPrice = 30;
    this.jacketPrice = 150;
    this.tshirtStock = 100;
    this.jeansStock = 100;
    this.jacketStock = 100;
    this.balance = 0;
  }

}

const shop = new Shop();

class Cashier {
  constructor(id, employee) {
    this.id = id;
    this.employee = employee;
    this.numOfSales = 0;
    this.cashierBalance = 0;
  }

  createSale(numOfShirts, numOfJeans, numOfJackets) {
    let enoughShirts = numOfShirts <= shop.tshirtStock;
    let enoughJeans = numOfJeans <= shop.jeansStock;
    let enoughJackets = numOfJackets <= shop.jacketStock;

    if (!enoughShirts) {
      numOfShirts = shop.tshirtStock;
    }

    if (!enoughJeans) {
      numOfJeans = shop.jeansStock;
    }

    if (!enoughJackets) {
      numOfJackets = shop.jacketStock;
    }

    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;

    if (costOrder === 0) {
      console.log('Its not possible to make this sale because the requested material is not there.');
      return;
    }
    this.numOfSales += 1;
    this.cashierBalance += costOrder;
    shop.balance += costOrder;
    this.tshirtStock -= numOfShirts;
    this.jeansStock -= numOfJeans;
    this.jacketStock -= numOfJackets;
    console.log(`The cashier with id ${this.id} and more specifically ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance} $.`);
    console.log(`After this sale the total balance of the shop is ${shop.balance}$`);
  }

  refund(numOfShirts, numOfJeans, numOfJackets) {
    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
    this.numOfSales -= 1;
    this.cashierBalance -= costOrder;
    shop.balance -= costOrder;
    this.tshirtStock += numOfShirts;
    this.jeansStock += numOfJeans;
    this.jacketStock += numOfJackets;
    console.log(`Refund on cashier with id ${this.id} was success! Total Balance now is ${shop.balance}$`);
  }

}

let firstCashier = new Cashier(1, 'Marcelo Ramirez');
let secondCashier = new Cashier(2, 'Meir Overferst');
let thirdCashier = new Cashier(3, 'Jens Soltwedel');

firstCashier.createSale(2, 2, 0);
thirdCashier.createSale(0, 1, 1);
thirdCashier.createSale(3, 0, 0);
secondCashier.createSale(2, 1, 1);
secondCashier.refund(2, 1, 1);
