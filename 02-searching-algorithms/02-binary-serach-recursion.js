// function binarySearch(arr, number, left, right) {
//   if (left > right) return -1;
//   const middle = Math.floor((left + (right + 1)) / 2);
//   if (arr[middle] === number) return middle;

//   if (arr[middle] > number) {
//     right = middle - 1;
//     return binarySearch(arr, number, left, right);
//   } else {
//     left = middle + 1;
//     return binarySearch(arr, number, left, right);
//   }
// }

// const nums = [2, 3, 5, 7, 9, 10, 33, 45, 67];
// left = 0;
// right = nums.length - 1;

///

function binarySearch(arr, number) {
  function helper(arr, number, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + (right + 1)) / 2);
    if (arr[middle] === number) return middle;

    if (arr[middle] > number) {
      right = middle - 1;
      return helper(arr, number, left, right);
    } else {
      left = middle + 1;
      return helper(arr, number, left, right);
    }
  }

  let left = 0;
  let right = arr.length - 1;

  return helper(arr, number, left, right);
}

const nums = [2, 3, 5, 7, 9, 10, 33, 45, 67];

console.log(binarySearch(nums, 2));
console.log(binarySearch(nums, 3));
console.log(binarySearch(nums, 5));
console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 9));
console.log(binarySearch(nums, 10));
console.log(binarySearch(nums, 33));
console.log(binarySearch(nums, 45));
console.log(binarySearch(nums, 67));
console.log(binarySearch(nums, 55));
