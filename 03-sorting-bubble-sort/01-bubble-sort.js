function bubbleSort(arr) {
  let lastIndex = arr.length - 1;
  let didSwap;
  for (let i = lastIndex; i > 0; i--) {
    didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        didSwap = true;
      }
    }
    console.log(arr);
    if (!didSwap) {
      break;
    }
  }

  return arr;
}

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

console.log(bubbleSort([4, 2, 35, 67, 230, 23323]));
