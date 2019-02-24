let shop = {
  tshirtPrice: 10,
  jeansPrice: 30,
  jacketPrice: 150,
  tshirtStock: 100,
  jeansStock: 100,
  jacketStock: 100,
  balance: 0,
  createSale: function(numOfShirts, numOfJeans, numOfJackets) {
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
    shop.tshirtStock -= numOfShirts;
    shop.jeansStock -= numOfJeans;
    shop.jacketStock -= numOfJackets;
    console.log(`The cashier with id ${this.id} and more specifically ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance} $.`);
    console.log(`After this sale the total balance of the shop is ${shop.balance}$`);
  },
  refund: function(numOfShirts, numOfJeans, numOfJackets) {
    let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
    this.numOfSales -= 1;
    this.cashierBalance -= costOrder;
    shop.balance -= costOrder;
    shop.tshirtStock += numOfShirts;
    shop.jeansStock += numOfJeans;
    shop.jacketStock += numOfJackets;
    console.log(`Refund on cashier with id ${this.id} was success!`);
  }
};

let Cashier = function(id, employee) {
  this.id = id;
  this.employee = employee;
  this.numOfSales = 0;
  this.cashierBalance = 0;
}

let firstCashier = new Cashier(1, 'Marcelo Ramirez');
let secondCashier = new Cashier(2, 'Meir Overferst');
let thirdCashier = new Cashier(3, 'Jens Soltwedel');

Object.setPrototypeOf(firstCashier, shop);
Object.setPrototypeOf(secondCashier, shop);
Object.setPrototypeOf(thirdCashier, shop);

firstCashier.createSale(2, 2, 0);
thirdCashier.createSale(0, 1, 1);
thirdCashier.createSale(3, 0, 0);
secondCashier.createSale(2, 1, 1);
secondCashier.refund(2, 1, 1);
