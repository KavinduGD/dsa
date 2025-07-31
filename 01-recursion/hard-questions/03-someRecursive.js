/* 
someRecursive

Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

const isOdd = (val) => val % 2 == 1;

function someRecursive(arr, fun) {
  if (arr.length === 0) return false;

  num = arr.pop();

  return fun(num) || someRecursive(arr, fun);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));
