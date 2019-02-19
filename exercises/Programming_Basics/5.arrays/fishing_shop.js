const myFishMarket = [];
const fishInfo = ['tuna', 'salmon', 'koi'];

const fillWithFishes = (numOfFishes, collectionMarket) => {
  for(let i = 1; i <= numOfFishes; i++) {
    const randomIndex = Math.floor(Math.random() * fishInfo.length); // This returns either 0, 1 or 2
    collectionMarket.push(fishInfo[randomIndex]);
  }
}

fillWithFishes(100, myFishMarket);

const removeByFish = (fishType, numOfFishes) => {
  for (let i = 1; i <= numOfFishes; i++) {
    myFishMarket.splice(myFishMarket.indexOf(fishType), 1);
  }
}

const addNewOrder = (numOfTunas, numOfSalmons, numOfKois) => {
  const availableTunas = myFishMarket.filter(fish => fish === 'tuna').length;
  const availableSalmons = myFishMarket.filter(fish => fish === 'salmon').length;
  const availableKois = myFishMarket.filter(fish => fish === 'koi').length;

  const orderedTunas = availableTunas - numOfTunas > 0 ? numOfTunas : availableTunas
  const orderedSalmons = availableSalmons - numOfSalmons > 0 ? numOfSalmons : availableSalmons
  const orderedKois = availableKois - numOfKois > 0 ? numOfKois : availableKois

  removeByFish('tuna', orderedTunas);
  removeByFish('salmon', orderedSalmons);
  removeByFish('koi', orderedKois);

  return [
    {species: 'tuna', price: 10, quantity: orderedTunas},
    {species: 'salmon', price: 50, quantity: orderedSalmons},
    {species: 'koi', price: 100, quantity: orderedKois}
  ]
}

const calcualateBasketCosts = basket => {
  return basket.reduce((cost, eachFish) => cost + eachFish.price * eachFish.quantity
}, 0);

const maurosOrder = addNewOrder(5, 2, 1);
const eugensOrder = addNewOrder(2, 5, 5);
const alisOrder = addNewOrder(5, 10, 0);

console.log(calcualateBasketCosts(maurosOrder));
console.log(calcualateBasketCosts(eugensOrder));
console.log(calcualateBasketCosts(alisOrder));
