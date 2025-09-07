// loop till the end
// find the min
//swap

function selection_sort(arr) {
  let length = arr.length;
  let min_index = 0;
  for (let i = 0; i < length - 1; i++) {
    min_index = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }

    if (i !== min_index) {
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }

  return arr;
}

console.log(selection_sort([23, 2, 45, 232, 124, 341, 1, 23]));
