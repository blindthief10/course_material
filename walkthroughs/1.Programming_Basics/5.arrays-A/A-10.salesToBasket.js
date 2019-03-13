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

let salesPerProduct = {};

let calculateSalesPerProduct = function(salesCollection) {
  for (let sale of salesCollection) {
    salesPerProduct.hasOwnProperty(sale) ? salesPerProduct[sale]++ : salesPerProduct[sale] = 1;
  }
  console.log(salesPerProduct);
}

calculateSalesPerProduct(sales);
