function filterOdds(arr) {
  const new_element = [];
  if (arr.length === 0) return new_element;

  //check odd condition
  if (arr[0] % 2 === 1) new_element[0] = arr[0];
  //recursion
  return new_element.concat(filterOdds(arr.slice(1)));
}

const odds = filterOdds([2, 4, 56, 6, 5673, 434, 656, 23, 66, 44541, 1, 34]);

console.log(odds);
