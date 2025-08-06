/* 
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. */

const flattenArr = [];

function flatten(arr) {
  let first_element = arr[0];
  if (arr.length === 0) flattenArr.concat([]);
  if (typeof first_element !== -"object") flattenArr.push(first_element);

  return arr[0];
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
