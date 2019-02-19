
function containerCalculate(maxWeight, weightIncluded, id, weightNextContainer, ignoredContainers) {

  if (id <= 100) {
    if (id >= 61 && id <= 70) {
      id++;
      ignoredContainers++;
    } else {
    weightIncluded += 10;
    weightNextContainer = 10;
  }

  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
    if (id === 111) {
      id++;
      console.log(`I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
      return;
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

  if (maxWeight >= weightIncluded + weightNextContainer) {
    containerCalculate(maxWeight, weightIncluded, id, weightNextContainer, ignoredContainers);
  } else {
    console.log(`I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);
  }

}

containerCalculate(10000, 0, 1, 10, 0);
