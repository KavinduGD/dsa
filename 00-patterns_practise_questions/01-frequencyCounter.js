/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

same([1, 2, 3], [4, 1, 9]) // true  
same([1, 2, 3], [1, 9])    // false  
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

*/

//input - arr1, arr2

//one element from 1st arr as 1 corresponding  square  element
// after checking that should remove compare that again

/*for loop arr1
    i ^2
    for arr 2
        compare if has add -1

O(n^2)
*/

/*
check 2 arr length
for loop
take object with frq
compare obj

O(n)
*/

function check(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frq1 = {};
  let frq2 = {};

  for (let i = 0; i < arr1.length; i++) {
    frq1[arr1[i] ** 2] = (frq1[arr1[i] ** 2] || 0) + 1;
    frq2[arr2[i]] = (frq2[arr2[i]] || 0) + 1;
  }
  console.log(frq1);
  console.log(frq2);

  for (let key of Object.keys(frq1)) {
    if (frq1[key] !== frq2[key]) {
      return false;
    }
  }

  return true;
}

let arr1 = [1, 2, 3, 5, 7];
let arr2 = [1, 2, 3, 6, 8];

console.log(check([1, 2, 3], [1, 9])); // false
console.log(check([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
console.log(check([1, 3, 3], [9, 1, 9])); // true
