/* Selection Sort
Selection Sort

Here's some guidance for how selection sort should work:

Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
Repeat this with the next element until the array is sorted.
This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms 
*/

function selectionSort(arr, comparator) {
  let length = arr.length;
  let min_index = 0;
  for (let i = 0; i < length - 1; i++) {
    min_index = i;
    for (let j = i + 1; j < length; j++) {
      if (comparator) {
        console.log(comparator(arr[min_index], arr[j]));
        if (comparator(arr[min_index], arr[j]) > 0) {
          min_index = j;
        }
      } else {
        if (arr[min_index] > arr[j]) {
          min_index = j;
        }
      }
    }

    if (i !== min_index) {
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }

  return arr;
}

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(selectionSort(moarKittyData, oldestToYoungest));

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(selectionSort(kitties, strComp));
