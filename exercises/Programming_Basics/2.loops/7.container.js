var maxWeight = 10000;
var weightIncluded = 0;
var id = 1;
var weightNextContainer = 10;
var ignoredContainers = 0;



while(maxWeight >= weightIncluded + weightNextContainer) {


  if (id <= 100) {
    if (id >= 61 && id <= 70) {
      id++;
      ignoredContainers++;
      continue;
    }
    weightIncluded += 10;
    weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
    if (id === 111) {
      id++;
      break;
    }
  } else if (id <= 250)  {
    weightIncluded += 50;
    weightNextContainer = 50;
  } else if (id <= 300){
    weightIncluded += 100;
    weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

  id++;

}

console.log(`I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
