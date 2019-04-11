const bearQuotes = [
  'bear',
  'I love watching bears fishing salmons in Kamtschaka',
  'My morning routine is to shave my beard',
  'The heat is unbearable!'
];

const bearRegex = /\bbears?\b/i;

for (let bearQuote of bearQuotes) {
  console.log(bearRegex.test(bearQuote));
}
