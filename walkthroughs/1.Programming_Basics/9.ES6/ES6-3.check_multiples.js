const findIfMultiple = (first, second) => {
  const isMultiple = first % second === 0 ? true : false
  return isMultiple;
}

console.log(findIfMultiple(9, 3));
console.log(findIfMultiple(10, 3));
