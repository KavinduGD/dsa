//  using frequency counter

/*
function countUniqueValues(arr) {
  const unique = {};

  for (let i of arr) {
    unique[i] = 1;
  }

  uniqueValues = 0;

  for (let i in unique) {
    uniqueValues++;
  }

  console.log(uniqueValues);
}

countUniqueValues([1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5]);

*/

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }
  //two pointer
  let uniquePointer = 0;
  let checkPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (arr[checkPointer] !== arr[uniquePointer]) {
      arr[++uniquePointer] = arr[checkPointer];
    }

    checkPointer++;
  }

  return uniquePointer + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5]));
console.log(countUniqueValues([]));
