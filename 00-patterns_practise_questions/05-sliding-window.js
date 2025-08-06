function maxSubarraySum(arr, num) {
  if (arr.length === 0) return null;
  //starting window
  let startingPointer = num;
  let maxWindow = 0;

  for (let i = 0; i < num; i++) {
    maxWindow += arr[i];
  }

  let tempWindow = maxWindow;

  //changing the widow
  for (let i = num; i < arr.length; i++) {
    tempWindow += arr[i];
    tempWindow -= arr[i - num];

    //check for max
    maxWindow = Math.max(tempWindow, maxWindow);
  }

  return maxWindow;
}

console.log(maxSubarraySum([11, 2, 4, 6, 2, 4, 1, 3, 5, 6, 65, 2, 3], 4));

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10 COPY
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
