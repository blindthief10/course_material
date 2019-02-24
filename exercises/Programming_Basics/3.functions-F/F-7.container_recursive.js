function containerCalculate(maxWeight, weightIncluded, id, weightNextContainer, ignoredContainers) {

  if (id <= 100) {
    if (id >= 61 && id <= 70) {
      id++;
      ignoredContainers++;
      containerCalculate(maxWeight, weightIncluded, id, 10, ignoredContainers);
    } else {
    weightIncluded += 10;
    id === 100 ? weightNextContainer = 20 : weightNextContainer = 10
  }

  } else if (id <= 200) {
    weightIncluded += 20;
    id === 200 ? weightNextContainer = 50 : weightNextContainer = 20
    if (id === 113 + ignoredContainers) {
      return `I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`;
    }
  } else if (id <= 250)  {
    weightIncluded += 50;
    id === 250 ? weightNextContainer = 100 : weightNextContainer = 50
  } else if (id <= 300){
    weightIncluded += 100;
    id === 300 ? weightNextContainer = 200 : weightNextContainer = 100
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

  id++;

  if (maxWeight >= weightIncluded + weightNextContainer) {
     return containerCalculate(maxWeight, weightIncluded, id, weightNextContainer, ignoredContainers);
  } else {
    return `I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`;
  }

}

console.log(containerCalculate(10000, 0, 1, 10, 0));
