var maxWeight = 10000;
var weightIncluded = 0;
var weightNextContainer = 10;
var ignoredContainers = 0;

for(var id = 1; maxWeight >= weightIncluded + weightNextContainer; id++) {

  if (id <= 100) {
    if (id >= 61 && id <= 70) {
      id++;
      ignoredContainers++;
      continue;
    }
    weightIncluded += 10;
    id === 100 ? weightNextContainer = 20 : weightNextContainer = 10
  } else if (id <= 200) {
    weightIncluded += 20;
    id === 200 ? weightNextContainer = 50 : weightNextContainer = 20
    if (id === 113 + ignoredContainers) {
      break;
    }
  } else if (id <= 250)  {
    weightIncluded += 50;
    id === 250 ? weightNextContainer = 100 : weightNextContainer = 50
  } else if (id <= 300){
    weightIncluded += 100;
    id === 300 ? weightNextContainer = 200 : weightNextContainer = 100
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

}

console.log(`I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
