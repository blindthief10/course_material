let amount = [5, 5, 2, 6, 1];
let groceries = ['chocolate', 'bananas', 'rice', 'beers', 'deodorant'];
let shoppingCart = [];

for (let i = 0; i < groceries.length; i++) {
  let pair = [groceries[i], amount[i]];
  shoppingCart.push(pair);
}

for (let item of shoppingCart) {
  console.log(`Please buy ${item[1]}x ${item[0]}.`);
}

console.log(groceries.reverse());
