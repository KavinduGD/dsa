function binarySearch(arr, number) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right + 1) / 2);
    if (arr[middle] === number) {
      return middle;
    } else {
      if (arr[middle] > number) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
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
