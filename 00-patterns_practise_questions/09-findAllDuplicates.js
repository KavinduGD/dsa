/* 
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) 
 */

function findAllDuplicates(arr) {
  const frq = {};

  for (let i = 0; i < arr.length; i++) {
    frq[arr[i]] = (frq[arr[i]] || 0) + 1;
  }

  const duplicates = [];

  for (const num in frq) {
    if (frq[num] === 2) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
