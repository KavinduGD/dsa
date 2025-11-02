function merge(arr1, arr2) {
  let left = 0;
  let right = 0;
  const arr = [];
  while (left < arr1.length && right < arr2.length) {
    console.log(left, right);
    if (arr1[left] > arr2[right]) {
      arr.push(arr2[right]);
      right++;
    } else {
      arr.push(arr1[left]);
      left++;
    }
  }

  while (right < arr2.length) {
    arr.push(arr2[right]);
    right++;
  }

  while (left < arr1.length) {
    arr.push(arr1[left]);
    left++;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

sorted_arr = mergeSort([3, 55, 6, 2, 23, 323]);
console.log(sorted_arr);
