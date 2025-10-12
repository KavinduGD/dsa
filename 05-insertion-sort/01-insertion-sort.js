function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

sorted_arr = insertionSort([4, 1, 34, 2, 45, 233, 1, 3]);
console.log(sorted_arr);
