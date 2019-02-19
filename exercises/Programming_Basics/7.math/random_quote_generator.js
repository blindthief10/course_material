let quoteDatabase = [
   {author: 'Jesus Christ',  quote: 'Ask and you shall receive'},
   {author: 'Julius Caesar', quote: 'Veni, Vidi, Vici'},
   {author: 'Tony Montana', quote: 'Say hello to my little friend!'},
   {author: 'Meir Overferst', quote: 'I have just started!'},
   {author: 'Kostas Diakogiannis', quote: 'End of story!'}
]

let showRandomQuote = function(collectionOfQuotes) {
  let randomNumber = Math.floor(Math.random()*collectionOfQuotes.length);
  console.log(`${collectionOfQuotes[randomNumber].quote}, ${collectionOfQuotes[randomNumber].author}`);
}

showRandomQuote(quoteDatabase);
