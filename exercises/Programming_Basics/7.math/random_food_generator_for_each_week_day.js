let favFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let pickFood = function(foods) {

  for (let day of days) {
      let randomNumber = Math.floor(Math.random()*foods.length);
      let favFoodOfTheDay = foods[randomNumber];
      console.log(`On ${day} i am going to have ${favFoodOfTheDay} as a dinner!`);
      foods.splice(randomNumber, 1);
  }

}

pickFood(favFoods);
