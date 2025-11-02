function merge(
  arr1,
  arr2,
  comparator = (a, b) => {
    if (a < b) return -1;
    else return 1;
  }
) {
  let left = 0;
  let right = 0;
  let arr = [];

  while (left < arr1.length && right < arr2.length) {
    if (comparator(arr1[left], arr2[right]) < 0) {
      arr.push(arr1[left++]);
    } else {
      arr.push(arr2[right++]);
    }
  }
  while (left < arr1.length) {
    arr.push(arr1[left++]);
  }
  while (right < arr2.length) {
    arr.push(arr2[right++]);
  }

  return arr;
}

function mergeSort(arr, stringLengthComparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid), stringLengthComparator);
  let right = mergeSort(arr.slice(mid), stringLengthComparator);

  return merge(left, right, stringLengthComparator);
}

var names = [
  "Bob",
  "Ethel",
  "Christine",
  "M",
  "Colt",
  "Allison",
  "SuperLongNameOMG",
];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

console.log(mergeSort(names, stringLengthComparator));
