/*
 Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

/* 
for loop

function productOfArray(arr) {
  let result = 1;

  arr.forEach((element) => {
    result *= element;
  });

  return result;
}
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

const product = productOfArray([3, 4, 5, 2]);
console.log(product);
