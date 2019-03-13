let sales = [
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'laptop',
  'air_cooler',
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'smart_watch'
];

const salesPerProduct = sales.reduce(function(currentSalesObject, newSaleString) {
  currentSalesObject.hasOwnProperty(newSaleString) ? currentSalesObject[newSaleString]++ : currentSalesObject[newSaleString] = 1;
  return currentSalesObject;
}, {})

console.log(salesPerProduct);
